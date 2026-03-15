/* ============================================
   CINEMA ALHAMBRA — Interactive Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    // --- Search ---
    const films = [
        { title: 'Alter Ego', meta: 'Comédie, Thriller \u2022 1h39', badge: 'VF', poster: 'posters/alter-ego.jpg' },
        { title: 'The Mastermind', meta: 'Policier, Drame \u2022 1h50', badge: 'VOST', poster: 'posters/the-mastermind.jpg' },
        { title: "L'Affaire Bojarski", meta: 'Drame, Policier \u2022 2h08', badge: 'VF', poster: 'posters/affaire-bojarski.jpg' },
        { title: "Soundtrack to a Coup d'État", meta: 'Documentaire \u2022 2h30', badge: 'VOST', poster: 'posters/soundtrack-coup-etat.jpg' },
        { title: 'Marsupilami', meta: 'Comédie, Aventure \u2022 1h39', badge: 'VF', poster: 'posters/marsupilami.jpg' },
        { title: 'Marty Supreme', meta: 'Drame \u2022 2h30', badge: 'VOST', poster: 'posters/marty-supreme.jpg' },
        { title: 'Le Mystérieux regard du flamant rose', meta: 'Drame \u2022 1h44', badge: 'VOST', poster: 'posters/flamant-rose.jpg' },
        { title: 'Les Dimanches', meta: 'Drame \u2022 1h58', badge: 'VOST', poster: 'posters/les-dimanches.jpg' },
        { title: 'EPiC: Elvis Presley in Concert', meta: 'Documentaire, Musical', badge: 'VOST', poster: 'posters/epic-elvis.jpg' },
        { title: "L'Invasion", meta: 'Documentaire', badge: 'VOST', poster: 'posters/invasion.jpg' },
        { title: 'A Fidai', meta: 'Documentaire', badge: 'VOST', poster: 'posters/a-fidai.jpg' },
        { title: 'Peaches Goes Bananas', meta: 'Documentaire \u2022 1h13', badge: 'VOST', poster: 'posters/peaches-goes-bananas.jpg' },
        { title: 'Sainte-Marie-aux-Mines', meta: 'Drame \u2022 1h26', badge: 'VF', poster: 'posters/sainte-marie-aux-mines.jpg' },
        { title: 'Urchin', meta: 'Drame \u2022 1h39', badge: 'VOST', poster: 'posters/urchin.jpg' },
        { title: 'Nuremberg', meta: 'Drame, Historique \u2022 2h05', badge: 'VOST', poster: 'posters/nuremberg.jpg' },
        { title: 'Des nimbes au monde', meta: 'Documentaire', badge: 'VF', poster: 'posters/des-nimbes-au-monde.jpg' },
        { title: 'Maigret et le mort amoureux', meta: 'Policier \u2022 1h20', badge: 'VF', poster: 'posters/maigret.jpg' },
        { title: 'Tafiti', meta: 'Animation, Famille', badge: 'VF', poster: 'posters/tafiti.jpg' },
        { title: 'Love on Trial', meta: 'Drame, Romance', badge: 'VOST', poster: 'posters/love-on-trial.jpg' },
        { title: "L'Ombre d'un mensonge", meta: 'Drame \u2022 1h39', badge: 'VOST', poster: 'posters/ombre-mensonge.jpg' },
    ];

    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
    const searchResults = document.getElementById('searchResults');

    function openSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput && searchInput.focus(), 100);
    }

    function closeSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.remove('open');
        document.body.style.overflow = '';
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
    }

    if (searchToggle) searchToggle.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);
    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeSearch();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('open')) {
            closeSearch();
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            if (!searchResults) return;

            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }

            const matches = films.filter(f =>
                f.title.toLowerCase().includes(query)
            );

            if (matches.length === 0) {
                searchResults.innerHTML = '<div class="search-no-result">Aucun film trouvé</div>';
                return;
            }

            searchResults.innerHTML = matches.map(f => `
                <a href="a-laffiche.html" class="search-result">
                    <img src="${f.poster}" alt="${f.title}" class="search-result-poster" loading="lazy">
                    <div class="search-result-info">
                        <div class="search-result-title">${f.title}</div>
                        <div class="search-result-meta">${f.meta} &bull; ${f.badge}</div>
                    </div>
                </a>
            `).join('');
        });
    }

    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }, { passive: true });

    // --- Mobile Menu ---
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });

        // Close on link click
        mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Cursor Glow ---
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        function animateCursor() {
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    }

    // --- Counter Animation ---
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                let current = 0;
                const step = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        el.textContent = target;
                        clearInterval(timer);
                    } else {
                        el.textContent = current;
                    }
                }, 40);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Parallax on hero ---
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                const heroContent = hero.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
                    heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
                }
            }
        }, { passive: true });
    }

    // --- Film card tilt effect ---
    const filmCards = document.querySelectorAll('.film-card');
    filmCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -4;
            const rotateY = (x - centerX) / centerX * 4;

            card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

});
