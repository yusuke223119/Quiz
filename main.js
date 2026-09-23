const QUESTION_DATA_VERSION = 'q074';
const genreMetaCache = {};

const CHAPTER_UI = {
    'chapter-1': { tone: 'descriptive', arts: ['icons/descriptive-statistics.svg'] },
    'chapter-2': { tone: 'data', arts: ['icons/data-collection.svg'] },
    'chapter-3': { tone: 'probability', arts: ['icons/probability-distribution.svg'] },
    'chapter-4': { tone: 'estimation', arts: ['icons/estimation.svg'] },
    'chapter-5': { tone: 'testing', arts: ['icons/hypothesis-testing.svg'] },
    'chapter-6': { tone: 'regression', arts: ['icons/regression.svg?v=4'] }
};

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <header class="category-hero">
            <div class="category-hero-bar">
                <a class="category-back" href="index.html" aria-label="ホームに戻る">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </a>
                <h1>分野別演習</h1>
                <span class="category-hero-spacer" aria-hidden="true"></span>
            </div>
            <p class="category-hero-lead">章ごとに基礎から解く</p>
            <p class="home-hero-script">See the world through data.</p>
            <img class="category-hero-art" src="picture/home/hero-bars.svg" alt="">
        </header>
        <main class="category-main">
            <div class="category-toolbar">
                <p>学習する章を選択</p>
                <a class="category-progress-chip" href="report.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19h4V9H5v10zm5 0h4V5h-4v14zm5 0h4v-7h-4v7z"/>
                    </svg>
                    進捗を見る
                    <span aria-hidden="true">›</span>
                </a>
            </div>
            <div id="menuContainer" class="category-list"></div>
        </main>
    `;

    renderMenu(menuData);

    const hash = decodeURIComponent(location.hash.replace('#', ''));
    if (hash && document.getElementById(hash)) {
        toggleSubMenu(hash);
        document.getElementById(`wrapper-${hash}`)?.scrollIntoView({ block: 'nearest' });
    }
}

function chapterClearedCount(item) {
    return (item.subItems || []).filter(sub => typeof hasGenreStar === 'function' && hasGenreStar(sub.genre)).length;
}

function subButtonsHtml(subItems) {
    return subItems.map(sub => {
        const priorityHtml = typeof priorityListHtml === 'function'
            ? priorityListHtml(sub.priorities)
            : '';
        const starred = typeof hasGenreStar === 'function' && hasGenreStar(sub.genre);
        const starHtml = starred
            ? `<span class="text-amber-500 text-lg leading-none shrink-0 mt-0.5" title="全問正解" aria-label="全問正解">★</span>`
            : '';
        return `
                <button type="button" onclick="location.href='quiz.html?genre=${sub.genre}&v=star1'"
                    class="category-field">
                    <span class="category-field-dot"></span>
                    <span class="category-field-copy">
                        <span class="block">${sub.name}</span>
                        <span class="block mt-1.5">${priorityHtml}</span>
                    </span>
                    ${starHtml}
                </button>
            `;
    }).join('');
}

function renderMenu(data) {
    const container = document.getElementById('menuContainer');
    container.innerHTML = '';

    data.forEach(item => {
        if (!item.hasSubMenu) return;

        const ui = CHAPTER_UI[item.id] || { tone: 'descriptive', arts: [] };
        const titleMatch = item.title.match(/^(第\d+章)\s*(.*)$/);
        const num = titleMatch ? titleMatch[1] : item.title;
        const name = titleMatch ? titleMatch[2] : item.title;
        const desc = (item.description || '').replace(/（分野\d+〜\d+）/, '').trim();
        const total = item.subItems?.length || 0;
        const cleared = chapterClearedCount(item);
        const pct = total > 0 ? Math.round((cleared / total) * 100) : 0;
        const arts = (ui.arts || []).map(src => `<img src="${src}" alt="">`).join('');
        const pairClass = (ui.arts || []).length > 1 ? ' is-pair' : '';

        const wrapper = document.createElement('div');
        wrapper.id = `wrapper-${item.id}`;
        wrapper.className = `category-card chapter-${ui.tone}`;
        wrapper.innerHTML = `
            <button type="button" class="category-card-btn" onclick="toggleSubMenu('${item.id}')">
                <div class="category-card-copy">
                    <p class="chapter-number">${num}</p>
                    <h2>${name}</h2>
                    <p class="category-card-desc">${desc}</p>
                </div>
                <div class="category-art${pairClass}">${arts}</div>
                <div class="category-progress">
                    <strong>${cleared} / ${total}</strong>
                    <span>分野完了</span>
                    <span class="category-bar-track">
                        <span class="category-bar" style="width:${pct}%"></span>
                    </span>
                </div>
                <svg id="icon-${item.id}" class="category-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
            <div id="${item.id}" class="hidden category-fields animate-slide-down">
                <div class="category-field-list">${subButtonsHtml(item.subItems)}</div>
            </div>
        `;
        container.appendChild(wrapper);
    });
}

async function loadGenreMeta(genre) {
    if (genreMetaCache[genre]) return genreMetaCache[genre];
    const response = await fetch(`questions/${genre}.js?v=${QUESTION_DATA_VERSION}`);
    const source = await response.text();
    const questions = new Function(`${source}\nreturn allQuestions;`)();
    const meta = (Array.isArray(questions) ? questions : []).map(q => ({
        id: q.id,
        difficulty: q.difficulty,
        priority: q.priority
    }));
    genreMetaCache[genre] = meta;
    return meta;
}

async function refreshChapterPriorities(chapterId) {
    const chapter = menuData.find(item => item.id === chapterId);
    if (!chapter?.subItems) return;
    await Promise.all(chapter.subItems.map(async sub => {
        try {
            const meta = await loadGenreMeta(sub.genre);
            sub.priorities = meta.map(item => item.priority);
        } catch (error) {
            console.error(`重要度の読み込みに失敗しました: ${sub.genre}`, error);
        }
    }));
    const list = document.querySelector(`#${chapterId} .category-field-list`);
    if (list) list.innerHTML = subButtonsHtml(chapter.subItems);
}

async function toggleSubMenu(id) {
    const subMenu = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    const wrapper = document.getElementById('wrapper-' + id);
    if (!subMenu || !wrapper) return;

    const isHidden = subMenu.classList.contains('hidden');

    if (isHidden) {
        subMenu.classList.remove('hidden');
        wrapper.classList.add('is-open');
        if (icon) icon.style.transform = 'rotate(90deg)';
        if (!subMenu.dataset.metaLoaded) {
            await refreshChapterPriorities(id);
            subMenu.dataset.metaLoaded = '1';
        }
    } else {
        subMenu.classList.add('hidden');
        wrapper.classList.remove('is-open');
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}
