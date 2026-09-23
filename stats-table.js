const STATS_TABLE_CONFIG = {
    z: { img: 'picture/normal_distribution_table.png?v=stat1', desc: '※ 表の数値は上側確率 \\( P(Z \\geq z) \\) を表しています。' },
    t: { img: 'picture/t_distribution_table.png?v=stat1', desc: '※ 表の数値は、各上側確率に対応する臨界値 \\( t \\) です。' },
    chi: { img: 'picture/chi_square_table.png?v=stat1', desc: '※ 表の数値は、各上側確率に対応する臨界値 \\( x \\) です。' },
    f05: { img: 'picture/f_distribution_table.png?v=stat1', desc: '※ 列は分子の自由度、行は分母の自由度です。表の数値は上側確率 \\( P(F \\geq f)=0.05 \\) の臨界値です。' },
    f025: { img: 'picture/f_distribution_table_025.png?v=stat1', desc: '※ 列は分子の自由度、行は分母の自由度です。表の数値は上側確率 \\( P(F \\geq f)=0.025 \\) の臨界値です。' }
};

const STATS_TABLE_TABS = [
    { id: 'z', label: '正規分布' },
    { id: 't', label: 't分布' },
    { id: 'chi', label: 'χ²分布' },
    { id: 'f05', label: 'F 5%' },
    { id: 'f025', label: 'F 2.5%' }
];

let statsCurrentType = 'z';

function ensureStatsTableModal() {
    if (document.getElementById('statsTableModal')) return;

    const modal = document.createElement('div');
    modal.id = 'statsTableModal';
    modal.className = 'stats-modal hidden';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'statsTableTitle');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
        <div class="stats-modal-panel" onclick="event.stopPropagation()">
            <div class="stats-modal-head">
                <h2 id="statsTableTitle">統計数値表</h2>
                <button type="button" class="stats-modal-close" onclick="closeStatsTable()" aria-label="閉じる">×</button>
            </div>
            <div class="stats-modal-tabs">
                ${STATS_TABLE_TABS.map(tab => `
                    <button type="button" id="tab-${tab.id}" class="tab-btn" onclick="switchTable('${tab.id}')">${tab.label}</button>
                `).join('')}
            </div>
            <div class="stats-modal-body">
                <div class="stats-modal-imgwrap">
                    <img id="displayStatsTable" src="" alt="統計数値表">
                </div>
                <p id="tableDescription" class="stats-modal-desc"></p>
            </div>
        </div>
    `;
    modal.addEventListener('click', closeStatsTable);
    document.body.appendChild(modal);
}

function openStatsTable(type) {
    ensureStatsTableModal();
    const modal = document.getElementById('statsTableModal');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('stats-modal-open');
    switchTable(type || statsCurrentType || 'z');
    document.querySelector('.stats-modal-close')?.focus();
}

function closeStatsTable() {
    const modal = document.getElementById('statsTableModal');
    if (!modal || modal.classList.contains('hidden')) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('stats-modal-open');
}

function switchTable(type) {
    ensureStatsTableModal();
    const config = STATS_TABLE_CONFIG[type];
    const imgElement = document.getElementById('displayStatsTable');
    const descElement = document.getElementById('tableDescription');
    if (!config || !imgElement) return;

    statsCurrentType = type;
    document.querySelectorAll('#statsTableModal .tab-btn').forEach(btn => {
        btn.classList.toggle('is-active', btn.id === `tab-${type}`);
    });

    imgElement.src = config.img;
    imgElement.classList.remove('hidden');
    descElement.innerHTML = config.desc;
    if (window.MathJax) MathJax.typesetPromise([descElement]);
}

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const modal = document.getElementById('statsTableModal');
    if (!modal || modal.classList.contains('hidden')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    closeStatsTable();
}, true);

if (document.body) {
    ensureStatsTableModal();
} else {
    document.addEventListener('DOMContentLoaded', ensureStatsTableModal);
}
