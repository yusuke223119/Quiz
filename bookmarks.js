const BOOKMARK_KEY = 'quizBookmarks';
const REVIEW_QUEUE_KEY = 'quizReviewQueue';
const LAST_STUDY_KEY = 'quizLastStudy';
const GENRE_STAR_KEY = 'quizGenreStars';
const ANSWERED_KEY = 'quizAnswered';
const MISSED_KEY = 'quizMissed';
const STUDY_LOG_KEY = 'quizStudyLog';
const GENRE_RENAME_KEY = 'quizGenreRename:v1';
const GENRE_RENAMES = {
    q34_linear_regression: 'q33_linear_regression',
    q35_regression_output: 'q34_regression_output',
    q36_anova: 'q35_anova'
};

function canonicalGenre(genre) {
    return GENRE_RENAMES[genre] || genre;
}

function remapGenreRecord(record) {
    if (!record || typeof record !== 'object' || Array.isArray(record)) return record;
    const next = {};
    Object.keys(record).forEach(key => {
        const mapped = canonicalGenre(key);
        if (Array.isArray(record[key]) && Array.isArray(next[mapped])) {
            next[mapped] = [...new Set([...next[mapped], ...record[key]])];
        } else {
            next[mapped] = record[key];
        }
    });
    return next;
}

function migrateStoredGenres() {
    if (localStorage.getItem(GENRE_RENAME_KEY)) return;
    const answered = remapGenreRecord(getAnsweredMap());
    localStorage.setItem(ANSWERED_KEY, JSON.stringify(answered));
    localStorage.setItem(MISSED_KEY, JSON.stringify(remapGenreRecord(getMissedMap())));
    localStorage.setItem(GENRE_STAR_KEY, JSON.stringify(remapGenreRecord(getGenreStars())));
    saveBookmarks(getBookmarks().map(item => ({ ...item, genre: canonicalGenre(item.genre) })));
    const last = getLastStudy();
    if (last?.genre && GENRE_RENAMES[last.genre]) {
        const nextGenre = canonicalGenre(last.genre);
        saveLastStudy({
            ...last,
            genre: nextGenre,
            href: (last.href || '').replace(`genre=${last.genre}`, `genre=${nextGenre}`)
        });
    }
    localStorage.setItem(GENRE_RENAME_KEY, '1');
}

function getLastStudy() {
    try {
        const parsed = JSON.parse(localStorage.getItem(LAST_STUDY_KEY) || 'null');
        return parsed && parsed.href ? parsed : null;
    } catch {
        return null;
    }
}

function saveLastStudy(entry) {
    if (!entry?.href) return;
    localStorage.setItem(LAST_STUDY_KEY, JSON.stringify({
        href: entry.href,
        title: entry.title || '',
        kind: entry.kind || 'genre',
        genre: entry.genre || '',
        savedAt: Date.now()
    }));
}

function getAnsweredMap() {
    try {
        const parsed = JSON.parse(localStorage.getItem(ANSWERED_KEY) || '{}');
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch {
        return {};
    }
}

function markQuestionAnswered(genre, id) {
    if (!genre || id == null) return;
    genre = canonicalGenre(genre);
    const map = getAnsweredMap();
    const list = Array.isArray(map[genre]) ? map[genre].map(Number) : [];
    const num = Number(id);
    if (!list.includes(num)) list.push(num);
    map[genre] = list;
    localStorage.setItem(ANSWERED_KEY, JSON.stringify(map));
    removeMissedQuestion(genre, num);
}

function getMissedMap() {
    try {
        const parsed = JSON.parse(localStorage.getItem(MISSED_KEY) || '{}');
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch {
        return {};
    }
}

function removeMissedQuestion(genre, id) {
    genre = canonicalGenre(genre);
    const map = getMissedMap();
    const list = Array.isArray(map[genre]) ? map[genre].map(Number) : [];
    const next = list.filter(item => item !== Number(id));
    if (next.length) map[genre] = next;
    else delete map[genre];
    localStorage.setItem(MISSED_KEY, JSON.stringify(map));
}

function markQuestionMissed(genre, id) {
    if (!genre || id == null) return;
    genre = canonicalGenre(genre);
    const num = Number(id);
    if (isQuestionCorrect(genre, num)) return;
    const map = getMissedMap();
    const list = Array.isArray(map[genre]) ? map[genre].map(Number) : [];
    if (!list.includes(num)) list.push(num);
    map[genre] = list;
    localStorage.setItem(MISSED_KEY, JSON.stringify(map));
}

function isQuestionCorrect(genre, id) {
    const list = getAnsweredMap()[canonicalGenre(genre)];
    return Array.isArray(list) && list.map(Number).includes(Number(id));
}

function isQuestionMissed(genre, id) {
    if (isQuestionCorrect(genre, id)) return false;
    const list = getMissedMap()[canonicalGenre(genre)];
    return Array.isArray(list) && list.map(Number).includes(Number(id));
}

function activeGenreSet() {
    if (typeof menuData === 'undefined' || !Array.isArray(menuData)) return null;
    return new Set(menuData.flatMap(chapter =>
        (chapter.subItems || []).map(sub => canonicalGenre(sub.genre))
    ));
}

function idsForGenre(map, genre) {
    const key = canonicalGenre(genre);
    const ids = [];
    const primary = map[key];
    const alias = map[genre];
    if (Array.isArray(primary)) ids.push(...primary.map(Number));
    if (key !== genre && Array.isArray(alias)) ids.push(...alias.map(Number));
    return [...new Set(ids)];
}

function countMenuQuestions() {
    if (typeof menuData === 'undefined' || !Array.isArray(menuData)) return 0;
    return menuData.reduce((sum, chapter) => (
        sum + (chapter.subItems || []).reduce((n, sub) => n + (sub.priorities?.length || 4), 0)
    ), 0);
}

function countAnsweredInGenre(genre) {
    return idsForGenre(getAnsweredMap(), genre).length;
}

function countAnsweredAll() {
    const allowed = activeGenreSet();
    const map = getAnsweredMap();
    if (!allowed) {
        return Object.values(map).reduce((sum, list) => sum + (Array.isArray(list) ? list.length : 0), 0);
    }
    let total = 0;
    allowed.forEach(genre => {
        total += idsForGenre(map, genre).length;
    });
    return total;
}

function countMissedAll() {
    const allowed = activeGenreSet();
    const answered = getAnsweredMap();
    const missed = getMissedMap();
    const genres = allowed || new Set([
        ...Object.keys(answered),
        ...Object.keys(missed)
    ].map(canonicalGenre));
    let total = 0;
    genres.forEach(genre => {
        const correct = idsForGenre(answered, genre);
        total += idsForGenre(missed, genre).filter(id => !correct.includes(id)).length;
    });
    return total;
}

function studyDateKey(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function getStudyLog() {
    try {
        const parsed = JSON.parse(localStorage.getItem(STUDY_LOG_KEY) || '{}');
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch {
        return {};
    }
}

function recordStudyLog(isCorrect, date = new Date()) {
    const key = studyDateKey(date);
    const log = getStudyLog();
    const entry = log[key] && typeof log[key] === 'object'
        ? log[key]
        : { answered: 0, correct: 0 };
    entry.answered = Number(entry.answered || 0) + 1;
    if (isCorrect) entry.correct = Number(entry.correct || 0) + 1;
    log[key] = entry;
    localStorage.setItem(STUDY_LOG_KEY, JSON.stringify(log));
}

function recordQuestionAttempt(genre, id, isCorrect) {
    if (isCorrect) markQuestionAnswered(genre, id);
    else markQuestionMissed(genre, id);
    recordStudyLog(Boolean(isCorrect));
}

function getGenreStars() {
    try {
        const parsed = JSON.parse(localStorage.getItem(GENRE_STAR_KEY) || '{}');
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch {
        return {};
    }
}

function hasGenreStar(genre) {
    return Boolean(genre && getGenreStars()[genre]);
}

function awardGenreStar(genre, total) {
    if (!genre) return false;
    const stars = getGenreStars();
    const already = Boolean(stars[genre]);
    stars[genre] = {
        total: Number(total) || stars[genre]?.total || 0,
        clearedAt: stars[genre]?.clearedAt || Date.now()
    };
    localStorage.setItem(GENRE_STAR_KEY, JSON.stringify(stars));
    return !already;
}

function getBookmarks() {
    try {
        const parsed = JSON.parse(localStorage.getItem(BOOKMARK_KEY) || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveBookmarks(list) {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(list));
}

function isBookmarked(genre, id) {
    return getBookmarks().some(item => item.genre === genre && Number(item.id) === Number(id));
}

function toggleBookmark(entry) {
    const list = getBookmarks();
    const index = list.findIndex(item => item.genre === entry.genre && Number(item.id) === Number(entry.id));

    if (index >= 0) {
        list.splice(index, 1);
        saveBookmarks(list);
        return false;
    }

    list.push({
        genre: entry.genre,
        id: Number(entry.id),
        category: entry.category || '',
        difficulty: Number(entry.difficulty) || 2,
        priority: Number(entry.priority) || 0,
        savedAt: Date.now()
    });
    saveBookmarks(list);
    return true;
}

function removeBookmark(genre, id) {
    saveBookmarks(getBookmarks().filter(item => !(item.genre === genre && Number(item.id) === Number(id))));
}

function setReviewQueue(refs) {
    sessionStorage.setItem(REVIEW_QUEUE_KEY, JSON.stringify(refs));
}

function getReviewQueue() {
    try {
        const parsed = JSON.parse(sessionStorage.getItem(REVIEW_QUEUE_KEY) || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function shuffleItems(items) {
    const list = [...items];
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

function startReviewQuiz(refs, options = {}) {
    const source = refs.map(ref => ({ genre: ref.genre, id: Number(ref.id) }));
    const queue = options.random ? shuffleItems(source) : source;

    if (!queue.length) return false;

    setReviewQueue(queue);
    window.location.href = 'quiz.html?mode=review';
    return true;
}

async function loadGenreQuestions(genre) {
    genre = canonicalGenre(genre);
    const response = await fetch(`questions/${genre}.js`);
    if (!response.ok) {
        throw new Error(genre);
    }
    const source = await response.text();
    const loader = new Function(`${source}\nreturn allQuestions;`);
    const loaded = loader();
    return (Array.isArray(loaded) ? loaded : []).map(question => ({ ...question, genre }));
}

async function loadQuestionsByRefs(refs) {
    const cache = {};
    const questions = [];

    for (const ref of refs) {
        const genre = canonicalGenre(ref.genre);
        if (!cache[genre]) {
            cache[genre] = await loadGenreQuestions(genre);
        }
        const found = cache[genre].find(item => Number(item.id) === Number(ref.id));
        if (found) {
            questions.push({ ...found, genre });
        }
    }

    return questions;
}

migrateStoredGenres();
