const REPORT_DATA_VERSION = 'q074';
const CATALOG_KEY = `quizQuestionCatalog:${REPORT_DATA_VERSION}`;

const CHAPTER_UI = {
    'chapter-1': { short: '記述統計', color: '#2563eb' },
    'chapter-2': { short: 'データ収集', color: '#10b981' },
    'chapter-3': { short: '確率分布', color: '#8b5cf6' },
    'chapter-4': { short: '推定', color: '#f59e0b' },
    'chapter-5': { short: '検定', color: '#f43f5e' },
    'chapter-6': { short: '回帰分析', color: '#14b8a6' }
};

const DIFF_META = [
    { id: 1, label: '基礎', color: '#3b82f6' },
    { id: 2, label: '標準', color: '#22c55e' },
    { id: 3, label: '応用', color: '#a855f7' }
];

const PRI_META = [
    { id: 3, label: 'A', color: '#fb7185' },
    { id: 2, label: 'B', color: '#38bdf8' },
    { id: 1, label: 'C', color: '#fb923c' }
];

let catalog = [];
let viewYear;
let viewMonth;
let currentTab = 'report';

function pad(n) {
    return String(n).padStart(2, '0');
}

function dateKeyFromParts(y, m, d) {
    return `${y}-${pad(m)}-${pad(d)}`;
}

function parseDateKey(key) {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(y, m - 1, d);
}

function addDays(date, n) {
    const next = new Date(date);
    next.setDate(next.getDate() + n);
    return next;
}

function startOfWeek(date) {
    const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const day = next.getDay();
    const offset = day === 0 ? -6 : 1 - day;
    next.setDate(next.getDate() + offset);
    return next;
}

async function loadCatalog() {
    try {
        const cached = JSON.parse(sessionStorage.getItem(CATALOG_KEY) || 'null');
        if (Array.isArray(cached) && cached.length) return cached;
    } catch {
        /* ignore */
    }

    const items = menuData.flatMap(chapter =>
        (chapter.subItems || []).map(sub => ({ ...sub, chapterId: chapter.id, chapterTitle: chapter.title }))
    );

    const loaded = await Promise.all(items.map(async item => {
        try {
            const response = await fetch(`questions/${item.genre}.js?v=${REPORT_DATA_VERSION}`);
            const source = await response.text();
            const questions = new Function(`${source}\nreturn allQuestions;`)();
            return (Array.isArray(questions) ? questions : []).map(q => ({
                genre: item.genre,
                id: Number(q.id),
                difficulty: Number(q.difficulty) || 2,
                priority: Number(q.priority) || 0,
                category: q.category || item.name,
                chapterId: item.chapterId
            }));
        } catch (error) {
            console.error(item.genre, error);
            return [];
        }
    }));

    const next = loaded.flat();
    sessionStorage.setItem(CATALOG_KEY, JSON.stringify(next));
    return next;
}

function questionStatus(q) {
    if (typeof isQuestionCorrect === 'function' && isQuestionCorrect(q.genre, q.id)) return 'correct';
    if (typeof isQuestionMissed === 'function' && isQuestionMissed(q.genre, q.id)) return 'missed';
    return 'open';
}

function rate(part, whole) {
    if (!whole) return 0;
    return Math.round((part / whole) * 100);
}

function donut(percent, color, size, stroke) {
    const pct = Math.max(0, Math.min(100, Number(percent) || 0));
    return `
        <svg viewBox="0 0 36 36" width="${size}" height="${size}" aria-hidden="true">
            <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(226,232,240,0.7)" stroke-width="${stroke}"/>
            <circle cx="18" cy="18" r="16" fill="none" stroke="${color}" stroke-width="${stroke}"
                stroke-linecap="round" pathLength="100" stroke-dasharray="${pct} 100"
                transform="rotate(-90 18 18)"/>
            <text x="18" y="21" text-anchor="middle" font-size="8.4" font-weight="800" fill="${color}">${pct}%</text>
        </svg>
    `;
}

function buildStats(questions) {
    const tagged = questions.map(q => ({ ...q, status: questionStatus(q) }));
    const total = typeof countMenuQuestions === 'function' ? countMenuQuestions() : tagged.length;
    const correct = typeof countAnsweredAll === 'function' ? countAnsweredAll() : tagged.filter(q => q.status === 'correct').length;
    const missed = typeof countMissedAll === 'function' ? countMissedAll() : tagged.filter(q => q.status === 'missed').length;
    const open = Math.max(0, total - correct - missed);

    const groups = (meta, key) => meta.map(item => {
        const list = tagged.filter(q => q[key] === item.id);
        const ok = list.filter(q => q.status === 'correct').length;
        return { ...item, total: list.length, correct: ok, pct: rate(ok, list.length) };
    });

    const chapters = menuData.map(chapter => {
        const list = tagged.filter(q => q.chapterId === chapter.id);
        const ok = list.filter(q => q.status === 'correct').length;
        return {
            id: chapter.id,
            short: CHAPTER_UI[chapter.id]?.short || chapter.title,
            color: CHAPTER_UI[chapter.id]?.color || '#2563eb',
            total: list.length,
            correct: ok,
            pct: rate(ok, list.length)
        };
    });

    return {
        total: tagged.length,
        correct,
        missed,
        open,
        pct: rate(correct, tagged.length),
        diffs: groups(DIFF_META, 'difficulty'),
        pris: groups(PRI_META, 'priority'),
        chapters
    };
}

function weekRange(date) {
    const start = startOfWeek(date);
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

function logForDay(log, date) {
    return log[studyDateKey(date)] || { answered: 0, correct: 0 };
}

function monthStats(log, year, month) {
    let answered = 0;
    let correct = 0;
    const days = new Date(year, month, 0).getDate();
    for (let d = 1; d <= days; d += 1) {
        const entry = log[dateKeyFromParts(year, month, d)] || { answered: 0, correct: 0 };
        answered += Number(entry.answered || 0);
        correct += Number(entry.correct || 0);
    }
    return { answered, correct, pct: rate(correct, answered) };
}

function currentStreak(log, today = new Date()) {
    let streak = 0;
    let cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    while (true) {
        const entry = logForDay(log, cursor);
        if (Number(entry.answered || 0) <= 0) break;
        streak += 1;
        cursor = addDays(cursor, -1);
    }
    return streak;
}

function heatLevel(n) {
    if (n >= 11) return 'lv3';
    if (n >= 6) return 'lv2';
    if (n >= 1) return 'lv1';
    return '';
}

function renderReport(stats) {
    document.getElementById('reportPane').innerHTML = `
        <section class="report-hero">
            <p class="report-hero-script">Step by step to your goal.</p>
            <div class="report-hero-ring">${donut(stats.pct, '#fff', 72, 3.6)}</div>
            <div class="report-hero-copy">
                <strong>総合進捗</strong>
                <b>${stats.correct} <span>/ ${stats.total} 問</span></b>
            </div>
            <div class="report-hero-bar"><span style="width:${stats.pct}%"></span></div>
            <div class="report-hero-legend">
                <span><i style="background:#4ade80"></i>正解 ${stats.correct}</span>
                <span><i style="background:#fb7185"></i>不正解 ${stats.missed}</span>
                <span><i style="background:#cbd5e1"></i>未回答 ${stats.open}</span>
            </div>
        </section>

        <div class="report-grid">
            <section class="report-card">
                <h2>難易度別 正答率</h2>
                <div class="report-rate">
                    ${stats.diffs.map(item => `
                        <div class="report-rate-row">
                            <span>${item.label}</span>
                            <div class="report-rate-track"><span style="width:${item.pct}%;background:${item.color}"></span></div>
                            <b>${item.pct}%</b>
                        </div>
                    `).join('')}
                </div>
            </section>
            <section class="report-card">
                <h2>重要度別 正答率</h2>
                <div class="report-rate">
                    ${stats.pris.map(item => `
                        <div class="report-rate-row">
                            <span>${item.label}</span>
                            <div class="report-rate-track"><span style="width:${item.pct}%;background:${item.color}"></span></div>
                            <b>${item.pct}%</b>
                        </div>
                    `).join('')}
                </div>
            </section>
            <section class="report-card report-master">
                <h2>
                    分野別習熟度
                    <a class="report-card-link" href="category.html">詳しく見る ›</a>
                </h2>
                <div class="report-master-grid">
                    ${stats.chapters.map((ch, i) => `
                        <div class="report-master-item">
                            <small>第${i + 1}章</small>
                            <strong>${ch.short}</strong>
                            <b style="color:${ch.color}">${ch.pct}%</b>
                            <em> ${ch.correct} / ${ch.total}</em>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderTrend(days, log) {
    const values = days.map(date => logForDay(log, date));
    const maxAns = Math.max(1, ...values.map(v => Number(v.answered || 0)));
    const w = 320;
    const h = 136;
    const padL = 28;
    const padR = 28;
    const padT = 12;
    const padB = 28;
    const innerW = w - padL - padR;
    const innerH = h - padT - padB;
    const barW = innerW / days.length * 0.42;
    const points = values.map((v, i) => {
        const x = padL + (innerW / days.length) * (i + 0.5);
        const pct = Number(v.answered || 0) ? rate(Number(v.correct || 0), Number(v.answered || 0)) : 0;
        const y = padT + innerH * (1 - pct / 100);
        const barH = (Number(v.answered || 0) / maxAns) * innerH * 0.9;
        return { x, y, barH, label: `${days[i].getMonth() + 1}/${days[i].getDate()}`, pct, answered: Number(v.answered || 0) };
    });
    const line = points.map(p => `${p.x},${p.y}`).join(' ');
    return `
        <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="直近7日の正答率と学習数">
            ${[0, 25, 50, 75, 100].map(n => {
                const y = padT + innerH * (1 - n / 100);
                return `<line x1="${padL}" x2="${w - padR}" y1="${y}" y2="${y}" stroke="#eef2f7"/>
                    <text x="${padL - 4}" y="${y + 3}" text-anchor="end" font-size="7" fill="#94a3b8">${n}%</text>`;
            }).join('')}
            ${points.map(p => `
                <rect x="${p.x - barW / 2}" y="${padT + innerH - p.barH}" width="${barW}" height="${p.barH}" rx="3" fill="#bfdbfe"/>
            `).join('')}
            <polyline points="${line}" fill="none" stroke="#2563eb" stroke-width="2"/>
            ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="2.4" fill="#2563eb"/>`).join('')}
            ${points.map(p => `<text x="${p.x}" y="${h - 8}" text-anchor="middle" font-size="7.5" fill="#64748b">${p.label}</text>`).join('')}
        </svg>
    `;
}

function renderCalendar() {
    const log = typeof getStudyLog === 'function' ? getStudyLog() : {};
    const today = new Date();
    const first = new Date(viewYear, viewMonth, 1);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < startPad; i += 1) cells.push({ empty: true });
    for (let d = 1; d <= daysInMonth; d += 1) {
        const key = dateKeyFromParts(viewYear, viewMonth + 1, d);
        const answered = Number((log[key] || {}).answered || 0);
        const isToday = today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === d;
        cells.push({ d, answered, isToday, level: heatLevel(answered) });
    }
    while (cells.length % 7) cells.push({ empty: true });

    const month = monthStats(log, viewYear, viewMonth + 1);
    const week = weekRange(today);
    const weekStart = week[0];
    const weekEnd = week[6];
    const streak = currentStreak(log, today);
    const trendDays = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6));

    document.getElementById('calendarPane').innerHTML = `
        <section class="report-card report-cal-card">
            <h2>
                学習カレンダー
                <span class="report-cal-nav">
                    <button type="button" id="calPrev" aria-label="前の月">‹</button>
                    ${viewYear}年 ${viewMonth + 1}月
                    <button type="button" id="calNext" aria-label="次の月">›</button>
                </span>
            </h2>
            <div class="report-cal-week">${['月', '火', '水', '木', '金', '土', '日'].map(d => `<span>${d}</span>`).join('')}</div>
            <div class="report-cal-grid">
                ${cells.map(cell => cell.empty
                    ? `<span class="report-cal-day is-empty">-</span>`
                    : `<span class="report-cal-day ${cell.level} ${cell.isToday ? 'is-today' : ''}">${cell.d}</span>`
                ).join('')}
            </div>
            <div class="report-cal-legend">
                <span><i></i>0問</span>
                <span><i class="lv1"></i>1〜5問</span>
                <span><i class="lv2"></i>6〜10問</span>
                <span><i class="lv3"></i>11問以上</span>
            </div>
        </section>
        <section class="report-card">
            <h2>
                今月の学習
                <span class="report-card-link">${weekStart.getMonth() + 1}/${weekStart.getDate()} 〜 ${weekEnd.getMonth() + 1}/${weekEnd.getDate()}</span>
            </h2>
            <div class="report-month-stats">
                <div><b>${month.answered}</b><span>回答</span></div>
                <div><b>${month.correct}</b><span>正解</span></div>
                <div><b>${month.answered ? month.pct + '%' : '—'}</b><span>正答率</span></div>
                <div><b>${streak}日</b><span>連続学習</span></div>
            </div>
        </section>
        <section class="report-card">
            <h2>学習の推移</h2>
            <div class="report-trend">${renderTrend(trendDays, log)}</div>
        </section>
    `;

    document.getElementById('calPrev')?.addEventListener('click', () => {
        viewMonth -= 1;
        if (viewMonth < 0) {
            viewMonth = 11;
            viewYear -= 1;
        }
        renderCalendar();
    });
    document.getElementById('calNext')?.addEventListener('click', () => {
        viewMonth += 1;
        if (viewMonth > 11) {
            viewMonth = 0;
            viewYear += 1;
        }
        renderCalendar();
    });
}

function showTab(tab) {
    currentTab = tab;
    document.getElementById('tabReport').classList.toggle('is-on', tab === 'report');
    document.getElementById('tabCalendar').classList.toggle('is-on', tab === 'calendar');
    document.getElementById('reportPane').classList.toggle('hidden', tab !== 'report');
    document.getElementById('calendarPane').classList.toggle('hidden', tab !== 'calendar');
}

async function initReport() {
    const now = new Date();
    viewYear = now.getFullYear();
    viewMonth = now.getMonth();
    catalog = await loadCatalog();
    renderReport(buildStats(catalog));
    try {
        renderCalendar();
    } catch (error) {
        console.error(error);
    }
    document.getElementById('tabReport').addEventListener('click', () => showTab('report'));
    document.getElementById('tabCalendar').addEventListener('click', () => showTab('calendar'));
}

document.addEventListener('DOMContentLoaded', initReport);
