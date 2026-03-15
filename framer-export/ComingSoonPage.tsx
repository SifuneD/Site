import React, { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: {
        bgPrimary: "#0a0a0f",
        bgCard: "#16161f",
        bgCardHover: "#1c1c28",
        textPrimary: "#f0ece4",
        textSecondary: "#9a9aad",
        textMuted: "#5e5e72",
        accent: "#c23636",
        accentGlow: "rgba(194,54,54,0.15)",
        border: "rgba(255,255,255,0.06)",
        borderHover: "rgba(255,255,255,0.12)",
        cardHoverShadow: "0 12px 40px rgba(0,0,0,0.6)",
        posterGradientA: "#1e1e2e",
        posterGradientB: "#2a1a1a",
    },
    light: {
        bgPrimary: "#f5f3ef",
        bgCard: "#ffffff",
        bgCardHover: "#f0ede8",
        textPrimary: "#1a1a2e",
        textSecondary: "#555566",
        textMuted: "#8a8a9a",
        accent: "#b52e2e",
        accentGlow: "rgba(181,46,46,0.08)",
        border: "rgba(0,0,0,0.08)",
        borderHover: "rgba(0,0,0,0.15)",
        cardHoverShadow: "0 8px 30px rgba(0,0,0,0.12)",
        posterGradientA: "#e8e4de",
        posterGradientB: "#e0d8d0",
    },
}

const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, sans-serif",
    heading: "'Space Grotesk', sans-serif",
}

const comingSoonItems = [
    {
        day: "18",
        month: "Mars",
        title: "L'Ombre d'un mensonge",
        description: "De Bouli Lanners \u2022 Drame, Romance \u2022 1h39 \u2022 VOST",
        cast: "Avec Bouli Lanners, Michelle Fairley",
        synopsis:
            "Phil vit dans une petite communaut\u00e9 sur l'\u00cele de Lewis, en \u00c9cosse. Apr\u00e8s une attaque qui provoque une perte de m\u00e9moire, Millie, une presbyt\u00e9rienne, pr\u00e9tend qu'ils s'aimaient en secret avant son accident\u2026",
    },
    {
        day: "25",
        month: "Mars",
        title: "Biscuit le chien fantastique",
        description: "Animation, Famille \u2022 VF",
        cast: "",
        synopsis: "Un film d'animation enchanteur pour toute la famille.",
    },
    {
        day: "01",
        month: "Avril",
        title: "EPiC",
        description: "Documentaire, Musique \u2022 VOST",
        cast: "",
        synopsis:
            "Un documentaire sur Elvis Presley, entre archives rares et t\u00e9moignages in\u00e9dits.",
    },
]

const afficheFilms = [
    { title: "Alter Ego", badge: "VF", duration: "1h39" },
    { title: "The Mastermind", badge: "VOST", duration: "1h50" },
    { title: "L'Affaire Bojarski", badge: "VF", duration: "2h08" },
    { title: "Soundtrack to a Coup d'\u00c9tat", badge: "VOST", duration: "2h30" },
]

function getStyles(t: typeof colors.dark) {
    return `
@keyframes alh-csp-reveal {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-csp-section {
    width: 100%;
    min-height: 100vh;
    padding: 120px 0;
    background: ${t.bgPrimary};
    color: ${t.textPrimary};
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

.alh-csp-section *, .alh-csp-section *::before, .alh-csp-section *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.alh-csp-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* --- Page Header --- */
.alh-csp-header {
    text-align: center;
    margin-bottom: 64px;
}

.alh-csp-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${t.accent};
    margin-bottom: 16px;
    padding: 6px 16px;
    border: 1px solid rgba(194,54,54,0.25);
    border-radius: 100px;
    background: rgba(194,54,54,0.06);
    font-family: ${fonts.body};
}

.alh-csp-title {
    font-family: ${fonts.display};
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 900;
    margin: 0 0 16px;
    line-height: 1.1;
    color: ${t.textPrimary};
}

.alh-csp-desc {
    font-size: 1.05rem;
    color: ${t.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
    font-family: ${fonts.body};
    line-height: 1.6;
}

/* --- Coming Soon List --- */
.alh-csp-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 80px;
}

.alh-csp-item {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 28px 32px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-left: 3px solid transparent;
    border-radius: 16px;
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                background 0.35s ease,
                border-color 0.35s ease,
                box-shadow 0.35s ease;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

.alh-csp-item:hover {
    transform: translateX(8px);
    background: ${t.bgCardHover};
    border-left-color: ${t.accent};
    box-shadow: 0 4px 24px rgba(194,54,54,0.08);
}

/* --- Date Badge --- */
.alh-csp-date-badge {
    flex-shrink: 0;
    width: 72px;
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: ${t.accent};
    color: #fff;
}

.alh-csp-date-day {
    font-family: ${fonts.display};
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1;
}

.alh-csp-date-month {
    font-family: ${fonts.body};
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 2px;
    opacity: 0.9;
}

/* --- Film Info --- */
.alh-csp-info {
    flex: 1;
    min-width: 0;
}

.alh-csp-item-title {
    font-family: ${fonts.heading};
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0 0 6px;
    color: ${t.textPrimary};
    line-height: 1.3;
}

.alh-csp-item-desc {
    font-size: 0.9rem;
    color: ${t.textSecondary};
    margin: 0 0 4px;
    font-family: ${fonts.body};
    line-height: 1.5;
}

.alh-csp-item-cast {
    font-size: 0.82rem;
    color: ${t.textMuted};
    margin: 0 0 8px;
    font-family: ${fonts.body};
    font-style: italic;
}

.alh-csp-item-synopsis {
    font-size: 0.85rem;
    color: ${t.textSecondary};
    margin: 0;
    font-family: ${fonts.body};
    line-height: 1.6;
    opacity: 0.85;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* --- Arrow --- */
.alh-csp-arrow {
    flex-shrink: 0;
    color: ${t.textMuted};
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                color 0.35s ease;
}

.alh-csp-item:hover .alh-csp-arrow {
    transform: translateX(6px);
    color: ${t.accent};
}

/* --- Toujours a l'affiche --- */
.alh-csp-affiche-header {
    margin-bottom: 32px;
}

.alh-csp-affiche-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${t.accent};
    margin-bottom: 12px;
    font-family: ${fonts.body};
}

.alh-csp-affiche-title {
    font-family: ${fonts.display};
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: ${t.textPrimary};
    margin: 0;
}

.alh-csp-affiche-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.alh-csp-film-card {
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 14px;
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.35s ease,
                border-color 0.35s ease;
    cursor: pointer;
}

.alh-csp-film-card:hover {
    transform: translateY(-6px);
    box-shadow: ${t.cardHoverShadow};
    border-color: ${t.accent};
}

.alh-csp-film-poster {
    position: relative;
    width: 100%;
    padding-top: 140%;
    background: linear-gradient(135deg, ${t.posterGradientA} 0%, ${t.posterGradientB} 100%);
    overflow: hidden;
}

.alh-csp-film-poster-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${t.textMuted};
    opacity: 0.35;
}

.alh-csp-film-poster-badge {
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

.alh-csp-badge-vf {
    background: ${t.accent};
    color: #fff;
}

.alh-csp-badge-vost {
    background: rgba(255,255,255,0.1);
    color: ${t.textSecondary};
    border: 1px solid ${t.border};
}

.alh-csp-film-card-info {
    padding: 14px 16px;
}

.alh-csp-film-card-title {
    font-family: ${fonts.display};
    font-weight: 700;
    font-size: 0.92rem;
    line-height: 1.3;
    color: ${t.textPrimary};
    margin-bottom: 6px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.alh-csp-film-card-meta {
    font-size: 0.78rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
}

/* --- Reveal Animations --- */
.alh-csp-reveal {
    opacity: 0;
    transform: translateY(32px);
}

.alh-csp-reveal.alh-csp-visible {
    animation: alh-csp-reveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
}

.alh-csp-reveal-d1.alh-csp-visible { animation-delay: 0.1s; }
.alh-csp-reveal-d2.alh-csp-visible { animation-delay: 0.2s; }
.alh-csp-reveal-d3.alh-csp-visible { animation-delay: 0.3s; }
.alh-csp-reveal-d4.alh-csp-visible { animation-delay: 0.4s; }
.alh-csp-reveal-d5.alh-csp-visible { animation-delay: 0.5s; }
.alh-csp-reveal-d6.alh-csp-visible { animation-delay: 0.6s; }
.alh-csp-reveal-d7.alh-csp-visible { animation-delay: 0.7s; }
.alh-csp-reveal-d8.alh-csp-visible { animation-delay: 0.8s; }
.alh-csp-reveal-d9.alh-csp-visible { animation-delay: 0.9s; }

/* --- Responsive 1024px --- */
@media (max-width: 1024px) {
    .alh-csp-affiche-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .alh-csp-container {
        padding: 0 20px;
    }
}

/* --- Responsive 768px --- */
@media (max-width: 768px) {
    .alh-csp-section { padding: 80px 0; }
    .alh-csp-header { margin-bottom: 40px; }
    .alh-csp-title { font-size: clamp(1.8rem, 6vw, 2.5rem); }
    .alh-csp-desc { font-size: 0.95rem; }
    .alh-csp-item { padding: 20px; gap: 16px; flex-wrap: wrap; }
    .alh-csp-date-badge { width: 60px; height: 60px; }
    .alh-csp-date-day { font-size: 1.4rem; }
    .alh-csp-date-month { font-size: 0.65rem; }
    .alh-csp-item-title { font-size: 1rem; }
    .alh-csp-item-synopsis { -webkit-line-clamp: 2; }
    .alh-csp-list { gap: 12px; margin-bottom: 60px; }
    .alh-csp-affiche-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
}

/* --- Responsive 480px --- */
@media (max-width: 480px) {
    .alh-csp-section { padding: 60px 0; }
    .alh-csp-container { padding: 0 12px; }
    .alh-csp-title { font-size: clamp(1.6rem, 8vw, 2rem); }
    .alh-csp-desc { font-size: 0.88rem; }
    .alh-csp-item { padding: 16px; gap: 12px; }
    .alh-csp-date-badge { width: 52px; height: 52px; }
    .alh-csp-date-day { font-size: 1.2rem; }
    .alh-csp-date-month { font-size: 0.6rem; }
    .alh-csp-item-title { font-size: 0.95rem; }
    .alh-csp-item-desc { font-size: 0.82rem; }
    .alh-csp-item-synopsis { font-size: 0.8rem; -webkit-line-clamp: 2; }
    .alh-csp-arrow { display: none; }
    .alh-csp-affiche-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .alh-csp-list { margin-bottom: 48px; }
    .alh-csp-film-card-info { padding: 10px 12px; }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function ComingSoonPage(props) {
    const t = colors[props.theme] || colors.dark
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const targets = el.querySelectorAll(".alh-csp-reveal")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-csp-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        )
        targets.forEach((t) => observer.observe(t))
        return () => observer.disconnect()
    }, [props.theme])

    return (
        <section ref={sectionRef} className="alh-csp-section">
            <style>{getStyles(t)}</style>
            <div className="alh-csp-container">
                {/* Page Header */}
                <div className="alh-csp-header alh-csp-reveal">
                    <span className="alh-csp-tag">{props.sectionTag}</span>
                    <h1 className="alh-csp-title">{props.title}</h1>
                    <p className="alh-csp-desc">{props.subtitle}</p>
                </div>

                {/* Coming Soon List */}
                <div className="alh-csp-list">
                    {comingSoonItems.map((item, i) => (
                        <div
                            key={i}
                            className={`alh-csp-item alh-csp-reveal alh-csp-reveal-d${i + 1}`}
                        >
                            <div className="alh-csp-date-badge">
                                <span className="alh-csp-date-day">{item.day}</span>
                                <span className="alh-csp-date-month">{item.month}</span>
                            </div>
                            <div className="alh-csp-info">
                                <h3 className="alh-csp-item-title">{item.title}</h3>
                                <p className="alh-csp-item-desc">{item.description}</p>
                                {item.cast && (
                                    <p className="alh-csp-item-cast">{item.cast}</p>
                                )}
                                {item.synopsis && (
                                    <p className="alh-csp-item-synopsis">{item.synopsis}</p>
                                )}
                            </div>
                            <svg className="alh-csp-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Toujours a l'affiche */}
                <div className="alh-csp-affiche-header alh-csp-reveal alh-csp-reveal-d4">
                    <span className="alh-csp-affiche-tag">Programmation</span>
                    <h2 className="alh-csp-affiche-title">Toujours {"\u00e0"} l{"\u2019"}affiche</h2>
                </div>

                <div className="alh-csp-affiche-grid">
                    {afficheFilms.map((film, i) => (
                        <div
                            key={i}
                            className={`alh-csp-film-card alh-csp-reveal alh-csp-reveal-d${i + 5}`}
                        >
                            <div className="alh-csp-film-poster">
                                <svg
                                    className="alh-csp-film-poster-icon"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                >
                                    <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
                                    <path d="M6 16h36M6 32h36" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                                    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
                                    <polygon points="22,21 28,24 22,27" fill="currentColor" />
                                </svg>
                                <span
                                    className={`alh-csp-film-poster-badge ${
                                        film.badge === "VF" ? "alh-csp-badge-vf" : "alh-csp-badge-vost"
                                    }`}
                                >
                                    {film.badge}
                                </span>
                            </div>
                            <div className="alh-csp-film-card-info">
                                <div className="alh-csp-film-card-title">{film.title}</div>
                                <div className="alh-csp-film-card-meta">
                                    {film.badge}
                                    <span style={{ margin: "0 6px", opacity: 0.4 }}>&bull;</span>
                                    {film.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

ComingSoonPage.defaultProps = {
    theme: "dark",
    sectionTag: "Bient\u00f4t",
    title: "Prochainement",
    subtitle: "Les films qui arrivent bient\u00f4t sur nos \u00e9crans.",
}

addPropertyControls(ComingSoonPage, {
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
