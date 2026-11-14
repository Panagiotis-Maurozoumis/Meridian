/* ==========================================================================
   MERIDIAN — SITE BEHAVIOUR
   You don't need to edit this file to add or remove articles.
   Content lives in content.js. Interface wording lives in UI_TEXT below.
   ========================================================================== */
(function () {
    'use strict';

    /* ---------- Interface text (buttons, labels, messages) ---------- */
    const UI_TEXT = {
        en: {
            skip: "Skip to content",
            tagline: "Stories worth your time",
            nav_home: "Home",
            nav_latest: "Latest",
            nav_opinion: "Opinion",
            nav_columnists: "Columnists",
            nav_contact: "Contact",
            lang_button: "ΕΛ",
            lang_label: "Ελληνικά",
            theme_to_dark: "Dark",
            theme_to_light: "Light",
            theme_label: "Switch colour theme",
            menu: "Menu",
            headlines_title: "Latest headlines",
            latest_title: "Latest articles",
            all_topics: "All",
            filter_label: "Filter by topic",
            load_more: "More stories",
            no_articles: "No articles in this topic yet.",
            editorial_label: "Editorial",
            read_editorial: "Read the editorial",
            read_more: "Continue reading",
            columnists_title: "Columnists",
            columnist_latest: "Latest:",
            by_prefix: "By ",
            min_read: "{n} min read",
            min_read_one: "1 min read",
            newsletter_title: "The Meridian letter",
            newsletter_text: "The week's best stories, sent to your inbox once a week. No spam, unsubscribe any time.",
            email_label: "Email address",
            email_placeholder: "Your email address",
            subscribe: "Subscribe",
            nl_sending: "Sending…",
            nl_success: "Thank you, you're on the list.",
            nl_invalid: "Please enter a valid email address.",
            nl_error: "Something went wrong. Please try again in a moment.",
            nl_not_configured: "The newsletter isn't set up yet. Add your email address in content.js.",
            footer_sections: "Sections",
            footer_legal: "Legal",
            terms: "Terms of service",
            privacy: "Privacy policy",
            cookies: "Cookie policy",
            footer_contact: "Contact",
            rights: "All rights reserved.",
            back_to_top: "Back to top",
            back_home: "← All stories",
            more_stories: "More stories",
            not_found_title: "Article not found",
            not_found_text: "It may have been moved or removed."
        },
        gr: {
            skip: "Μετάβαση στο περιεχόμενο",
            tagline: "Ιστορίες που αξίζουν τον χρόνο σας",
            nav_home: "Αρχική",
            nav_latest: "Πρόσφατα",
            nav_opinion: "Γνώμη",
            nav_columnists: "Αρθρογράφοι",
            nav_contact: "Επικοινωνία",
            lang_button: "EN",
            lang_label: "English",
            theme_to_dark: "Σκούρο",
            theme_to_light: "Φωτεινό",
            theme_label: "Αλλαγή θέματος χρωμάτων",
            menu: "Μενού",
            headlines_title: "Τελευταία νέα",
            latest_title: "Πρόσφατα άρθρα",
            all_topics: "Όλα",
            filter_label: "Φιλτράρισμα ανά θέμα",
            load_more: "Περισσότερα άρθρα",
            no_articles: "Δεν υπάρχουν ακόμη άρθρα σε αυτό το θέμα.",
            editorial_label: "Άρθρο σύνταξης",
            read_editorial: "Διαβάστε το άρθρο",
            read_more: "Συνέχεια",
            columnists_title: "Αρθρογράφοι",
            columnist_latest: "Πρόσφατο:",
            by_prefix: "",
            min_read: "{n} λεπτά ανάγνωσης",
            min_read_one: "1 λεπτό ανάγνωσης",
            newsletter_title: "Το newsletter του Meridian",
            newsletter_text: "Οι καλύτερες ιστορίες της εβδομάδας, μία φορά την εβδομάδα στο email σας. Χωρίς spam, διαγραφή όποτε θέλετε.",
            email_label: "Διεύθυνση email",
            email_placeholder: "Το email σας",
            subscribe: "Εγγραφή",
            nl_sending: "Αποστολή…",
            nl_success: "Ευχαριστούμε, η εγγραφή σας ολοκληρώθηκε.",
            nl_invalid: "Παρακαλώ εισάγετε έγκυρη διεύθυνση email.",
            nl_error: "Κάτι πήγε στραβά. Δοκιμάστε ξανά σε λίγο.",
            nl_not_configured: "Το newsletter δεν έχει ρυθμιστεί ακόμη. Προσθέστε το email σας στο content.js.",
            footer_sections: "Ενότητες",
            footer_legal: "Νομικά",
            terms: "Όροι χρήσης",
            privacy: "Πολιτική απορρήτου",
            cookies: "Πολιτική cookies",
            footer_contact: "Επικοινωνία",
            rights: "Με την επιφύλαξη παντός δικαιώματος.",
            back_to_top: "Επιστροφή στην κορυφή",
            back_home: "← Όλα τα άρθρα",
            more_stories: "Περισσότερα άρθρα",
            not_found_title: "Το άρθρο δεν βρέθηκε",
            not_found_text: "Μπορεί να μετακινήθηκε ή να αφαιρέθηκε."
        }
    };

    const PAGE_SIZE = 6;

    /* ---------- Helpers ---------- */
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
    function safeSet(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* ignore */ } }

    function esc(value) {
        return String(value == null ? '' : value).replace(/[&<>"']/g, c => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[c]));
    }

    let lang = safeGet('language') === 'gr' ? 'gr' : 'en';

    function t(key) {
        const v = UI_TEXT[lang][key];
        return v !== undefined ? v : (UI_TEXT.en[key] !== undefined ? UI_TEXT.en[key] : key);
    }

    // Pick the current language from a {en, gr} field (falls back to English).
    function L(field) {
        if (field == null) return '';
        if (typeof field === 'object' && !Array.isArray(field)) {
            return field[lang] != null && field[lang] !== '' ? field[lang] : (field.en != null ? field.en : '');
        }
        return field;
    }

    function localISODate() {
        const d = new Date();
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    function fmtDate(iso, opts) {
        if (!iso) return '';
        const d = new Date(iso + 'T12:00:00');
        if (isNaN(d)) return '';
        return new Intl.DateTimeFormat(lang === 'gr' ? 'el-GR' : 'en-GB',
            opts || { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
    }

    /* ---------- Content ---------- */
    const SITE = window.SITE || { name: 'Meridian', email: '' };
    const TOPICS = window.TOPICS || {};
    const COLUMNISTS = window.COLUMNISTS || [];
    const today = localISODate();

    const ARTICLES = (window.ARTICLES || [])
        .filter(a => a && a.id && !a.draft && (!a.date || a.date <= today))
        .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

    const LEAD = ARTICLES.find(a => a.featured && a.type !== 'editorial') || ARTICLES.find(a => a.type !== 'editorial');
    const EDITORIAL = ARTICLES.find(a => a.type === 'editorial');

    const topicName = key => L(TOPICS[key]) || key || '';
    const columnistById = id => (typeof id === 'string' ? COLUMNISTS.find(c => c.id === id) : null);
    const authorName = a => { const c = columnistById(a.author); return c ? L(c.name) : L(a.author); };
    const articleUrl = a => 'article.html?id=' + encodeURIComponent(a.id);

    function readingTime(a) {
        const body = [].concat(L(a.body) || []).join(' ');
        const words = body.split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.round(words / 200));
    }

    function readingLabel(a) {
        const n = readingTime(a);
        return n === 1 ? t('min_read_one') : t('min_read').replace('{n}', n);
    }

    function metaHTML(a) {
        const parts = [];
        const name = authorName(a);
        if (name) parts.push(`<span>${esc(t('by_prefix') + name)}</span>`);
        if (a.date) parts.push(`<time datetime="${esc(a.date)}">${esc(fmtDate(a.date))}</time>`);
        return parts.join('<span class="sep" aria-hidden="true">·</span>');
    }

    function mediaHTML(a, cls, eager) {
        if (!a.image) return '';
        return `<div class="${cls}"><img src="${esc(a.image)}" alt="${esc(L(a.imageAlt))}" ` +
            `loading="${eager ? 'eager' : 'lazy'}" decoding="async" onerror="this.parentNode.remove()"></div>`;
    }

    function storyHTML(a) {
        const excerpt = L(a.excerpt);
        return `<article class="story">
            ${mediaHTML(a, 'story-media')}
            <span class="kicker">${esc(topicName(a.topic))}</span>
            <h3 class="story-title"><a href="${articleUrl(a)}">${esc(L(a.title))}</a></h3>
            ${excerpt ? `<p class="story-excerpt">${esc(excerpt)}</p>` : ''}
            <p class="meta">${metaHTML(a)}</p>
        </article>`;
    }

    /* ---------- Home page ---------- */
    let activeTopic = 'all';
    let visibleCount = PAGE_SIZE;

    function renderHome() {
        const lead = $('#lead');
        if (LEAD) {
            const excerpt = L(LEAD.excerpt);
            const teaser = [].concat(L(LEAD.body) || []).find(p => !/^(## |> )/.test(String(p)));
            lead.innerHTML = `
                ${mediaHTML(LEAD, 'lead-media', true)}
                <span class="kicker">${esc(topicName(LEAD.topic))}</span>
                <h1 class="lead-title"><a href="${articleUrl(LEAD)}">${esc(L(LEAD.title))}</a></h1>
                ${excerpt ? `<p class="lead-excerpt">${esc(excerpt)}</p>` : ''}
                ${!LEAD.image && teaser ? `<p class="lead-teaser">${esc(teaser)} <a class="text-link" href="${articleUrl(LEAD)}">${esc(t('read_more'))} →</a></p>` : ''}
                <p class="meta">${metaHTML(LEAD)}<span class="sep" aria-hidden="true">·</span><span>${esc(readingLabel(LEAD))}</span></p>`;
        } else {
            lead.innerHTML = `<p class="empty">${esc(t('no_articles'))}</p>`;
        }

        const briefs = ARTICLES.filter(a => a !== LEAD).slice(0, 5);
        $('#briefs').innerHTML = briefs.map(a => `
            <li>
                <a class="brief-title" href="${articleUrl(a)}">${esc(L(a.title))}</a>
                <span class="meta">${esc(topicName(a.topic))}<span class="sep" aria-hidden="true">·</span><time datetime="${esc(a.date)}">${esc(fmtDate(a.date, { day: 'numeric', month: 'short' }))}</time></span>
            </li>`).join('');

        renderEditorial();
        renderFilters();
        renderGrid();
        renderColumnists();
    }

    function renderEditorial() {
        const band = $('#editorial');
        if (!band) return;
        if (!EDITORIAL) { band.hidden = true; return; }
        const quote = L(EDITORIAL.quote);
        $('#editorial-inner').innerHTML = `
            <div class="editorial">
                <div>
                    <span class="kicker">${esc(t('editorial_label'))}</span>
                    <h2 class="editorial-title"><a href="${articleUrl(EDITORIAL)}">${esc(L(EDITORIAL.title))}</a></h2>
                    <p class="editorial-excerpt">${esc(L(EDITORIAL.excerpt))}</p>
                    <a class="text-link" href="${articleUrl(EDITORIAL)}">${esc(t('read_editorial'))} →</a>
                </div>
                ${quote ? `<blockquote class="pull-quote"><p>${esc(quote)}</p><cite>${esc(authorName(EDITORIAL))}</cite></blockquote>` : ''}
            </div>`;
    }

    function renderFilters() {
        const box = $('#filters');
        const used = Object.keys(TOPICS).filter(k => ARTICLES.some(a => a.topic === k));
        const keys = ['all'].concat(used);
        box.setAttribute('aria-label', t('filter_label'));
        box.innerHTML = keys.map(k => `
            <button type="button" class="filter" data-topic="${esc(k)}" aria-pressed="${k === activeTopic}">
                ${esc(k === 'all' ? t('all_topics') : topicName(k))}
            </button>`).join('');
    }

    function gridPool() {
        return activeTopic === 'all'
            ? ARTICLES.filter(a => a !== LEAD && a !== EDITORIAL)
            : ARTICLES.filter(a => a.topic === activeTopic);
    }

    function renderGrid() {
        const pool = gridPool();
        const items = pool.slice(0, visibleCount);
        $('#story-grid').innerHTML = items.length
            ? items.map(storyHTML).join('')
            : `<p class="empty">${esc(t('no_articles'))}</p>`;
        const more = $('#load-more');
        more.hidden = pool.length <= visibleCount;
        more.textContent = t('load_more');
    }

    function initials(name) {
        return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
    }

    function renderColumnists() {
        const section = $('#columnists');
        if (!section) return;
        if (!COLUMNISTS.length) { section.hidden = true; return; }
        $('#columnist-list').innerHTML = COLUMNISTS.map(c => {
            const name = L(c.name);
            const latest = ARTICLES.find(a => a.author === c.id);
            return `<article class="columnist">
                <div class="avatar" aria-hidden="true">${c.image ? `<img src="${esc(c.image)}" alt="" loading="lazy">` : esc(initials(name))}</div>
                <div>
                    <h3>${esc(name)}</h3>
                    <p class="role">${esc(L(c.role))}</p>
                    <p class="bio">${esc(L(c.bio))}</p>
                    ${latest ? `<p class="columnist-latest"><span>${esc(t('columnist_latest'))}</span> <a href="${articleUrl(latest)}">${esc(L(latest.title))}</a></p>` : ''}
                </div>
            </article>`;
        }).join('');
    }

    function bindHome() {
        $('#filters').addEventListener('click', e => {
            const btn = e.target.closest('.filter');
            if (!btn) return;
            activeTopic = btn.dataset.topic;
            visibleCount = PAGE_SIZE;
            $$('.filter').forEach(b => b.setAttribute('aria-pressed', b === btn));
            renderGrid();
        });
        $('#load-more').addEventListener('click', () => {
            visibleCount += PAGE_SIZE;
            renderGrid();
        });
    }

    /* ---------- Article page ---------- */
    function bodyHTML(paragraphs, quote) {
        const list = [].concat(paragraphs || []);
        const html = list.map(p => {
            const text = String(p);
            if (text.startsWith('## ')) return `<h2>${esc(text.slice(3))}</h2>`;
            if (text.startsWith('> ')) return `<blockquote><p>${esc(text.slice(2))}</p></blockquote>`;
            return `<p>${esc(text)}</p>`;
        });
        if (quote) {
            const at = Math.min(2, html.length);
            html.splice(at, 0, `<aside class="pull-quote"><p>${esc(quote)}</p></aside>`);
        }
        return html.join('');
    }

    function renderArticle() {
        const box = $('#article');
        const id = new URLSearchParams(location.search).get('id');
        const a = ARTICLES.find(x => x.id === id);

        if (!a) {
            document.title = `${t('not_found_title')} — ${SITE.name}`;
            box.innerHTML = `
                <a class="back-link" href="index.html">${esc(t('back_home'))}</a>
                <header class="article-header">
                    <h1 class="article-title">${esc(t('not_found_title'))}</h1>
                    <p class="article-standfirst">${esc(t('not_found_text'))}</p>
                </header>`;
            renderMore(null);
            return;
        }

        document.title = `${L(a.title)} — ${SITE.name}`;
        const desc = $('meta[name="description"]');
        if (desc && L(a.excerpt)) desc.setAttribute('content', L(a.excerpt));

        const excerpt = L(a.excerpt);
        const name = authorName(a);
        const caption = L(a.caption);
        box.innerHTML = `
            <a class="back-link" href="index.html">${esc(t('back_home'))}</a>
            <header class="article-header">
                <span class="kicker">${esc(topicName(a.topic))}</span>
                <h1 class="article-title">${esc(L(a.title))}</h1>
                ${excerpt ? `<p class="article-standfirst">${esc(excerpt)}</p>` : ''}
                <div class="article-byline">
                    ${name ? `<strong>${esc(t('by_prefix') + name)}</strong>` : ''}
                    ${a.date ? `<time datetime="${esc(a.date)}">${esc(fmtDate(a.date))}</time>` : ''}
                    <span>${esc(readingLabel(a))}</span>
                </div>
            </header>
            ${a.image ? `<figure class="article-figure"><img src="${esc(a.image)}" alt="${esc(L(a.imageAlt))}" onerror="this.parentNode.remove()">${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}</figure>` : ''}
            <div class="article-body">${bodyHTML(L(a.body), L(a.quote))}</div>`;
        renderMore(a);
    }

    function renderMore(current) {
        const grid = $('#more-grid');
        if (!grid) return;
        const others = ARTICLES.filter(a => a !== current)
            .sort((x, y) => {
                const sx = current && x.topic === current.topic ? 0 : 1;
                const sy = current && y.topic === current.topic ? 0 : 1;
                return sx - sy || String(y.date).localeCompare(String(x.date));
            })
            .slice(0, 3);
        grid.innerHTML = others.map(storyHTML).join('');
        $('#more-stories').hidden = others.length === 0;
    }

    /* ---------- Shared: static text, site details ---------- */
    function applyStaticText() {
        document.documentElement.lang = lang === 'gr' ? 'el' : 'en';
        $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
        $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
        $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

        const langBtn = $('#language-toggle');
        langBtn.textContent = t('lang_button');
        langBtn.setAttribute('aria-label', t('lang_label'));
        langBtn.setAttribute('lang', lang === 'gr' ? 'en' : 'el');

        const todayEl = $('#today');
        if (todayEl) {
            todayEl.textContent = new Intl.DateTimeFormat(lang === 'gr' ? 'el-GR' : 'en-GB',
                { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
        }

        $$('[data-site="address"]').forEach(el => { el.textContent = L(SITE.address); });
        $$('[data-site="email"]').forEach(el => {
            el.textContent = SITE.email || '';
            el.href = 'mailto:' + (SITE.email || '');
        });
        $$('[data-site="year"]').forEach(el => { el.textContent = new Date().getFullYear(); });

        const social = $('#social-links');
        if (social) {
            const labels = { facebook: 'Facebook', instagram: 'Instagram', twitter: 'X / Twitter' };
            const links = Object.entries(SITE.social || {}).filter(([, href]) => href);
            social.innerHTML = links.map(([k, href]) =>
                `<li><a href="${esc(href)}" target="_blank" rel="noopener">${esc(labels[k] || k)}</a></li>`).join('');
            social.hidden = links.length === 0;
        }

        updateThemeButton();
    }

    function render() {
        applyStaticText();
        if ($('#lead')) renderHome();
        if ($('#article')) renderArticle();
        const status = $('#form-status');
        if (status) { status.textContent = ''; status.className = 'form-status'; }
    }

    /* ---------- Theme ---------- */
    const root = document.documentElement;
    const themeBtn = $('#theme-toggle');
    let isDark = root.dataset.theme === 'dark';

    function updateThemeButton() {
        themeBtn.textContent = t(isDark ? 'theme_to_light' : 'theme_to_dark');
        themeBtn.setAttribute('aria-label', t('theme_label'));
    }

    function setTheme(dark, remember) {
        isDark = dark;
        root.dataset.theme = dark ? 'dark' : 'light';
        if (remember) safeSet('theme', root.dataset.theme);
        updateThemeButton();
    }

    themeBtn.addEventListener('click', () => setTheme(!isDark, true));

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = e => { if (!safeGet('theme')) setTheme(e.matches, false); };
    if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange);

    /* ---------- Language ---------- */
    $('#language-toggle').addEventListener('click', () => {
        lang = lang === 'en' ? 'gr' : 'en';
        safeSet('language', lang);
        render();
    });

    /* ---------- Mobile menu ---------- */
    const nav = $('#nav');
    const menuToggle = $('#menu-toggle');

    function closeMenu() {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    menuToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

    /* ---------- Compact header once the masthead scrolls away ---------- */
    const header = $('#header');
    const masthead = $('.masthead');
    if (masthead && 'IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            header.classList.toggle('is-stuck', !entry.isIntersecting);
        }).observe(masthead);
    }

    /* ---------- Gentle fade-in on scroll ---------- */
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !reduceMotion) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });
        $$('.reveal').forEach(el => { el.classList.add('reveal-init'); io.observe(el); });
    }

    /* ---------- Newsletter (sends to SITE.email via FormSubmit) ---------- */
    const form = $('#newsletter-form');
    if (form) {
        const input = $('#email', form);
        const button = $('button[type="submit"]', form);
        const status = $('#form-status', form);
        const isValid = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
        const configured = () => SITE.email && isValid(SITE.email) && !/example\.com$/i.test(SITE.email);

        const say = (msg, kind) => {
            status.textContent = msg;
            status.className = 'form-status' + (kind ? ' is-' + kind : '');
        };

        form.addEventListener('submit', async e => {
            e.preventDefault();
            if (form.elements._honey && form.elements._honey.value) return; // bot trap

            const email = input.value.trim();
            if (!isValid(email)) {
                say(t('nl_invalid'), 'error');
                input.setAttribute('aria-invalid', 'true');
                input.focus();
                return;
            }
            input.removeAttribute('aria-invalid');
            if (!configured()) { say(t('nl_not_configured'), 'error'); return; }

            button.disabled = true;
            say(t('nl_sending'));
            try {
                const res = await fetch('https://formsubmit.co/ajax/' + SITE.email, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        language: lang === 'gr' ? 'Greek' : 'English',
                        page: location.href,
                        _subject: `New ${SITE.name} newsletter subscriber`,
                        _template: 'table',
                        _captcha: 'false'
                    })
                });
                const data = await res.json().catch(() => ({}));
                if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || res.status);
                say(t('nl_success'), 'success');
                form.reset();
            } catch (err) {
                say(t('nl_error'), 'error');
            } finally {
                button.disabled = false;
            }
        });
    }

    /* ---------- Go ---------- */
    render();
    if ($('#lead')) bindHome();
})();
