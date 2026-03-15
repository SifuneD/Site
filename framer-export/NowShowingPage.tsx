import React, { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: {
        bgPrimary: "#0a0a0f",
        bgCard: "#16161f",
        textPrimary: "#f0ece4",
        textSecondary: "#9a9aad",
        textMuted: "#5e5e72",
        accent: "#c23636",
        accentLight: "#e04444",
        accentGlow: "rgba(194,54,54,0.15)",
        border: "rgba(255,255,255,0.06)",
        borderHover: "rgba(255,255,255,0.12)",
        cardShadow: "0 4px 24px rgba(0,0,0,0.4)",
        cardHoverShadow: "0 12px 40px rgba(0,0,0,0.6)",
        posterGradientA: "#1e1e2e",
        posterGradientB: "#2a1a1a",
    },
    light: {
        bgPrimary: "#f5f3ef",
        bgCard: "#ffffff",
        textPrimary: "#1a1a2e",
        textSecondary: "#555566",
        textMuted: "#8a8a9a",
        accent: "#b52e2e",
        accentLight: "#d03a3a",
        accentGlow: "rgba(181,46,46,0.08)",
        border: "rgba(0,0,0,0.08)",
        borderHover: "rgba(0,0,0,0.15)",
        cardShadow: "0 2px 12px rgba(0,0,0,0.06)",
        cardHoverShadow: "0 8px 30px rgba(0,0,0,0.12)",
        posterGradientA: "#e8e4de",
        posterGradientB: "#e0d8d0",
    },
}

const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}

const defaultFilms = [
    { title: "Alter Ego", genre: "Comédie, Thriller", duration: "1h39", badge: "VF" },
    { title: "The Mastermind", genre: "Policier, Drame", duration: "1h50", badge: "VOST" },
    { title: "L'Affaire Bojarski", genre: "Drame, Policier", duration: "2h08", badge: "VF" },
    { title: "Soundtrack to a Coup d'État", genre: "Documentaire", duration: "2h30", badge: "VOST" },
    { title: "Marsupilami", genre: "Comédie, Aventure", duration: "1h39", badge: "VF" },
    { title: "Marty Supreme", genre: "Drame", duration: "2h30", badge: "VOST" },
    { title: "Le Mystérieux regard du flamant rose", genre: "Drame", duration: "1h44", badge: "VOST" },
    { title: "Les Dimanches", genre: "Drame", duration: "1h58", badge: "VOST" },
    { title: "EPiC: Elvis Presley in Concert", genre: "Documentaire, Musical", duration: "", badge: "VOST" },
    { title: "L'Invasion", genre: "Documentaire", duration: "", badge: "VOST" },
    { title: "A Fidai", genre: "Documentaire", duration: "", badge: "VOST" },
    { title: "Peaches Goes Bananas", genre: "Documentaire", duration: "1h13", badge: "VOST" },
    { title: "Sainte-Marie-aux-Mines", genre: "Drame", duration: "1h26", badge: "VF" },
    { title: "Urchin", genre: "Drame", duration: "1h39", badge: "VOST" },
    { title: "Nuremberg", genre: "Drame, Historique", duration: "2h05", badge: "VOST" },
    { title: "Des nimbes au monde", genre: "Documentaire", duration: "", badge: "VF" },
    { title: "Maigret et le mort amoureux", genre: "Policier", duration: "1h20", badge: "VF" },
    { title: "Tafiti", genre: "Animation, Famille", duration: "", badge: "VF" },
    { title: "Love on Trial", genre: "Drame, Romance", duration: "", badge: "VOST" },
    { title: "L'Ombre d'un mensonge", genre: "Drame", duration: "1h39", badge: "VOST" },
]

function getCss(t: typeof colors.dark) {
    return `
@keyframes alh-ns-fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-ns-root {
    width: 100%;
    min-height: 100vh;
    background: ${t.bgPrimary};
    color: ${t.textPrimary};
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.alh-ns-root *, .alh-ns-root *::before, .alh-ns-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.alh-ns-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 24px 100px;
}

/* --- Page Header --- */
.alh-ns-header {
    text-align: center;
    margin-bottom: 64px;
}

.alh-ns-header.alh-ns-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.alh-ns-header.alh-ns-visible {
    opacity: 1;
    transform: translateY(0);
}

.alh-ns-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${t.accent};
    margin-bottom: 16px;
    font-family: ${fonts.body};
}

.alh-ns-title {
    font-family: ${fonts.display};
    font-weight: 900;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    line-height: 1.1;
    color: ${t.textPrimary};
    margin-bottom: 16px;
}

.alh-ns-subtitle {
    font-size: 1.05rem;
    color: ${t.textSecondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
    font-family: ${fonts.body};
}

/* --- Film Grid --- */
.alh-ns-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
}

/* --- Film Card --- */
.alh-ns-card {
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 14px;
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
    cursor: pointer;
    opacity: 0;
    transform: translateY(30px);
}

.alh-ns-card.alh-ns-visible {
    animation: alh-ns-fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.alh-ns-card:hover {
    transform: translateY(-6px);
    box-shadow: ${t.cardHoverShadow};
    border-color: ${t.accent};
}

/* --- Poster --- */
.alh-ns-poster {
    position: relative;
    width: 100%;
    padding-top: 150%;
    background: linear-gradient(135deg, ${t.posterGradientA} 0%, ${t.posterGradientB} 100%);
    overflow: hidden;
}

.alh-ns-poster-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${t.textMuted};
    opacity: 0.35;
}

.alh-ns-poster-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: ${fonts.body};
}

.alh-ns-badge-vf {
    background: ${t.accent};
    color: #fff;
}

.alh-ns-badge-vost {
    background: rgba(255,255,255,0.1);
    color: ${t.textSecondary};
    border: 1px solid ${t.border};
}

/* --- Card Info --- */
.alh-ns-info {
    padding: 16px;
}

.alh-ns-film-title {
    font-family: ${fonts.display};
    font-weight: 700;
    font-size: 0.95rem;
    line-height: 1.3;
    color: ${t.textPrimary};
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.alh-ns-meta {
    font-size: 0.78rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
    line-height: 1.5;
}

.alh-ns-meta-sep {
    margin: 0 6px;
    opacity: 0.4;
}

/* --- Responsive --- */
@media (max-width: 1024px) {
    .alh-ns-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .alh-ns-container {
        padding: 60px 20px 80px;
    }
}

@media (max-width: 768px) {
    .alh-ns-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
    .alh-ns-header {
        margin-bottom: 40px;
    }
    .alh-ns-container {
        padding: 48px 16px 64px;
    }
    .alh-ns-title {
        font-size: clamp(1.8rem, 6vw, 2.5rem);
    }
    .alh-ns-subtitle {
        font-size: 0.95rem;
    }
    .alh-ns-info {
        padding: 12px;
    }
    .alh-ns-film-title {
        font-size: 0.88rem;
    }
}

@media (max-width: 480px) {
    .alh-ns-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .alh-ns-container {
        padding: 36px 12px 48px;
    }
    .alh-ns-title {
        font-size: clamp(1.6rem, 8vw, 2rem);
    }
    .alh-ns-subtitle {
        font-size: 0.88rem;
    }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function NowShowingPage(props) {
    const { theme, sectionTag, title, subtitle } = props
    const t = colors[theme] || colors.dark
    const headerRef = useRef<HTMLDivElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = headerRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-ns-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const grid = gridRef.current
        if (!grid) return
        const cards = grid.querySelectorAll(".alh-ns-card")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-ns-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.08 }
        )
        cards.forEach((card) => observer.observe(card))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="alh-ns-root" style={{ background: t.bgPrimary, color: t.textPrimary }}>
            <style>{getCss(t)}</style>
            <div className="alh-ns-container">
                {/* Page Header */}
                <div ref={headerRef} className="alh-ns-header alh-ns-reveal">
                    <span className="alh-ns-tag">{sectionTag}</span>
                    <h1 className="alh-ns-title">{title}</h1>
                    <p className="alh-ns-subtitle">{subtitle}</p>
                </div>

                {/* Film Grid */}
                <div ref={gridRef} className="alh-ns-grid">
                    {defaultFilms.map((film, i) => {
                        const delay = Math.min(i * 0.06, 0.5)
                        return (
                            <div
                                key={i}
                                className="alh-ns-card"
                                style={{ animationDelay: `${delay}s` }}
                            >
                                {/* Poster placeholder */}
                                <div className="alh-ns-poster">
                                    <svg
                                        className="alh-ns-poster-icon"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                    >
                                        <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
                                        <path d="M6 16h36M6 32h36" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                                        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
                                        <polygon points="22,21 28,24 22,27" fill="currentColor" />
                                    </svg>
                                    <span className={`alh-ns-poster-badge ${film.badge === "VF" ? "alh-ns-badge-vf" : "alh-ns-badge-vost"}`}>
                                        {film.badge}
                                    </span>
                                </div>

                                {/* Card info */}
                                <div className="alh-ns-info">
                                    <div className="alh-ns-film-title">{film.title}</div>
                                    <div className="alh-ns-meta">
                                        {film.genre}
                                        {film.duration && (
                                            <>
                                                <span className="alh-ns-meta-sep">&bull;</span>
                                                {film.duration}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

NowShowingPage.defaultProps = {
    theme: "dark",
    sectionTag: "Programmation",
    title: "\u00C0 l'affiche",
    subtitle: "D\u00e9couvrez les films actuellement projet\u00e9s au cin\u00e9ma Alhambra de Calais.",
}

addPropertyControls(NowShowingPage, {
    theme: {
        type: ControlType.Enum,
        title: "Th\u00e8me",
        options: ["dark", "light"],
        optionTitles: ["Sombre", "Clair"],
    },
    sectionTag: { type: ControlType.String, title: "Tag section" },
    title: { type: ControlType.String, title: "Titre" },
    subtitle: { type: ControlType.String, title: "Sous-titre" },
})
