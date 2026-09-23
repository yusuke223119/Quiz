const PRIORITY_LETTERS = { 3: 'A', 2: 'B', 1: 'C' };
const PRIORITY_BADGE_CLASS = {
    3: 'bg-amber-100 text-amber-800',
    2: 'bg-sky-100 text-sky-800',
    1: 'bg-slate-100 text-slate-500'
};

function priorityLetter(priority) {
    return PRIORITY_LETTERS[Number(priority)] || '';
}

function priorityBadgeHtml(priority) {
    const n = Number(priority);
    const letter = PRIORITY_LETTERS[n];
    if (!letter) return '';
    return `<span class="inline-flex items-center justify-center min-w-[1.15rem] h-5 px-1 rounded text-[10px] font-bold ${PRIORITY_BADGE_CLASS[n]}">${letter}</span>`;
}

function priorityListHtml(priorities, numbered = true) {
    const list = Array.isArray(priorities) ? priorities : (priorities == null ? [] : [priorities]);
    const items = list.map((value, index) => {
        const badge = priorityBadgeHtml(value);
        if (!badge) return '';
        if (!numbered) return badge;
        return `<span class="inline-flex items-center gap-0.5"><span class="text-[9px] font-bold text-slate-400 tabular-nums">${index + 1}</span>${badge}</span>`;
    }).filter(Boolean);
    if (!items.length) return '';
    return `<span class="inline-flex flex-wrap items-center gap-1.5"><span class="text-[10px] font-bold text-slate-400">重要度</span>${items.join('')}</span>`;
}

function priorityLabelHtml(priority) {
    const badge = priorityBadgeHtml(priority);
    if (!badge) return '';
    return `<span class="inline-flex items-center gap-1.5"><span class="text-[10px] font-bold text-slate-400">重要度</span>${badge}</span>`;
}
