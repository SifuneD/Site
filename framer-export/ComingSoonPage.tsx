import React from "react"
import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef } from "react"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", bgCardHover: "#1c1c28", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", border: "rgba(255,255,255,0.06)", borderHover: "rgba(255,255,255,0.12)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", bgCardHover: "#f0ede8", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", border: "rgba(0,0,0,0.08)", borderHover: "rgba(0,0,0,0.15)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

function getStyles(t: typeof colors.dark) {
    return `
@keyframes alh-csp-reveal {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-csp-section {
    padding: 120px 0;
    background: ${t.bgPrimary};
    width: 100%;
}

.alh-csp-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

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
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    margin: 0 0 16px;
    line-height: 1.15;
    color: ${t.textPrimary};
}

.alh-csp-desc {
    font-size: 1.1rem;
    color: ${t.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
    font-family: ${fonts.body};
    line-height: 1.7;
}

/* Coming soon list */
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
}

.alh-csp-item:hover {
    transform: translateX(8px);
    background: ${t.bgCardHover};
    border-left-color: ${t.accent};
    box-shadow: 0 4px 24px rgba(194,54,54,0.08);
}

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
}

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
}

.alh-csp-item-meta {
    font-size: 0.9rem;
    color: ${t.textSecondary};
    margin: 0 0 8px;
    font-family: ${fonts.body};
    line-height: 1.5;
}

.alh-csp-item-synopsis {
    font-size: 0.85rem;
    color: ${t.textMuted};
    margin: 0;
    font-family: ${fonts.body};
    line-height: 1.6;
    font-style: italic;
}

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

/* Toujours a l'affiche section */
.alh-csp-affiche {
    margin-top: 0;
}

.alh-csp-affiche-title {
    font-family: ${fonts.display};
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: ${t.textPrimary};
    margin: 0 0 32px;
    text-align: center;
}

.alh-csp-affiche-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.alh-csp-film-card {
    padding: 28px 20px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 16px;
    text-align: center;
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                border-color 0.35s ease,
                box-shadow 0.35s ease;
    cursor: pointer;
}

.alh-csp-film-card:hover {
    transform: translateY(-6px);
    border-color: ${t.accent};
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}

.alh-csp-film-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: ${t.accentGlow};
    color: ${t.accent};
    margin: 0 auto 16px;
}

.alh-csp-film-title {
    font-family: ${fonts.heading};
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 6px;
    color: ${t.textPrimary};
}

.alh-csp-film-meta {
    font-size: 0.8rem;
    color: ${t.textSecondary};
    margin: 0;
    font-family: ${fonts.body};
}

/* Reveal animations */
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

@media (max-width: 1024px) {
    .alh-csp-affiche-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .alh-csp-section { padding: 80px 0; }
    .alh-csp-header { margin-bottom: 40px; }
    .alh-csp-item { padding: 20px; gap: 16px; flex-wrap: wrap; }
    .alh-csp-date-badge { width: 60px; height: 60px; }
    .alh-csp-date-day { font-size: 1.4rem; }
    .alh-csp-date-month { font-size: 0.65rem; }
    .alh-csp-item-title { font-size: 1rem; }
    .alh-csp-list { gap: 12px; margin-bottom: 60px; }
    .alh-csp-affiche-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
}

@media (max-width: 480px) {
    .alh-csp-section { padding: 60px 0; }
    .alh-csp-item { padding: 16px; gap: 12px; }
    .alh-csp-date-badge { width: 52px; height: 52px; }
    .alh-csp-date-day { font-size: 1.2rem; }
    .alh-csp-arrow { display: none; }
    .alh-csp-affiche-grid { grid-template-columns: 1fr; }
    .alh-csp-film-card { padding: 20px 16px; }
}
`
}

const comingSoonItems = [
    {
        day: "18",
        month: "Mars",
        title: "L'Ombre d'un mensonge",
        meta: "De Bouli Lanners \u2022 Drame, Romance \u2022 1h39 \u2022 VOST \u2022 Avec Bouli Lanners, Michelle Fairley",
        synopsis: "Phil vit dans une petite communaut\u00e9 sur l'\u00cele de Lewis, en \u00c9cosse. Apr\u00e8s une attaque qui provoque une perte de m\u00e9moire, Millie, une presbyt\u00e9rienne, pr\u00e9tend qu'ils s'aimaient en secret avant son accident..."
    },
    {
        day: "25",
        month: "Mars",
        title: "Biscuit le chien fantastique",
        meta: "Animation, Famille \u2022 VF",
        synopsis: "Un film d'animation enchanteur pour toute la famille."
    },
    {
        day: "01",
        month: "Avril",
        title: "EPiC",
        meta: "Documentaire, Musique \u2022 VOST",
        synopsis: "Un documentaire sur Elvis Presley, entre archives rares et t\u00e9moignages in\u00e9dits."
    },
]

const afficheFilms = [
    { title: "Alter Ego", meta: "VF \u2022 1h39" },
    { title: "The Mastermind", meta: "VOST \u2022 1h50" },
    { title: "L'Affaire Bojarski", meta: "VF \u2022 2h08" },
    { title: "Soundtrack", meta: "VOST \u2022 2h30" },
]

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function ComingSoonPage(props) {
    const t = colors[props.theme]
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
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        )
        targets.forEach((t) => observer.observe(t))
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="alh-csp-section">
            <style>{getStyles(t)}</style>
            <div className="alh-csp-container">
                {/* Page header */}
                <div className="alh-csp-header alh-csp-reveal">
                    <span className="alh-csp-tag">{props.sectionTag}</span>
                    <h2 className="alh-csp-title">{props.title}</h2>
                    <p className="alh-csp-desc">{props.subtitle}</p>
                </div>

                {/* Coming soon list */}
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
                                <p className="alh-csp-item-meta">{item.meta}</p>
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
                <div className="alh-csp-affiche alh-csp-reveal alh-csp-reveal-d5">
                    <h3 className="alh-csp-affiche-title">Toujours \u00e0 l\u2019affiche</h3>
                    <div className="alh-csp-affiche-grid">
                        {afficheFilms.map((film, i) => (
                            <div
                                key={i}
                                className={`alh-csp-film-card alh-csp-reveal alh-csp-reveal-d${i + 6}`}
                            >
                                <div className="alh-csp-film-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                                        <line x1="7" y1="2" x2="7" y2="22" />
                                        <line x1="17" y1="2" x2="17" y2="22" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <line x1="2" y1="7" x2="7" y2="7" />
                                        <line x1="2" y1="17" x2="7" y2="17" />
                                        <line x1="17" y1="7" x2="22" y2="7" />
                                        <line x1="17" y1="17" x2="22" y2="17" />
                                    </svg>
                                </div>
                                <h4 className="alh-csp-film-title">{film.title}</h4>
                                <p className="alh-csp-film-meta">{film.meta}</p>
                            </div>
                        ))}
                    </div>
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
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    title: { type: ControlType.String, title: "Titre" },
    subtitle: { type: ControlType.String, title: "Sous-titre" },
})