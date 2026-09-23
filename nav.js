(function () {
    const ICONS = {
        home: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3m-6 0h6m-6 0v-4a1 1 0 011-1h4a1 1 0 011 1v4" />',
        book: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',
        bookFilled: '<path stroke-linejoin="round" stroke-width="1.6" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" fill="currentColor"/>',
        layers: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19h4V9H5v10zm5 0h4V5h-4v14zm5 0h4v-7h-4v7z" />',
        exam: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />',
        review: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />'
    };

    const TABS = [
        { id: 'home', href: 'index.html', label: 'ホーム', files: ['index.html', ''], icon: 'home' },
        { id: 'study', href: 'category.html', label: '学習', files: ['category.html', 'Explanation.html', 'report.html'], icon: 'book' },
        { id: 'comp', href: 'comprehensive.html', label: '総合演習', files: ['comprehensive.html', 'comprehensive-quiz.html'], icon: 'layers' },
        { id: 'mock', href: 'mock.html', label: '模試', files: ['mock.html', 'mock-quiz.html'], icon: 'exam' },
        { id: 'review', href: 'review.html', label: '復習', files: ['review.html'], icon: 'review' }
    ];

    function currentFile() {
        const path = window.location.pathname.split('/').pop();
        return path || 'index.html';
    }

    function bookmarkCount() {
        try {
            const parsed = JSON.parse(localStorage.getItem('quizBookmarks') || '[]');
            return Array.isArray(parsed) ? parsed.length : 0;
        } catch {
            return 0;
        }
    }

    function render() {
        if (document.querySelector('.bottom-nav')) return;

        const file = currentFile();
        const saved = bookmarkCount();
        const nav = document.createElement('nav');
        nav.className = 'bottom-nav';
        nav.setAttribute('aria-label', 'メインメニュー');
        nav.innerHTML = TABS.map(tab => {
            const active = tab.files.includes(file);
            const badge = tab.id === 'review' && saved > 0
                ? `<span class="nav-badge">${saved > 9 ? '9+' : saved}</span>`
                : '';
            return `
                <a href="${tab.href}" class="${active ? 'active' : ''}" ${active ? 'aria-current="page"' : ''}>
                    ${badge}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">${ICONS[active && tab.icon === 'book' ? 'bookFilled' : tab.icon]}</svg>
                    <span>${tab.label}</span>
                </a>
            `;
        }).join('');

        document.body.classList.add('app-shell');
        const frame = document.querySelector('.app-frame') || document.body;
        frame.appendChild(nav);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
