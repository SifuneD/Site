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
        accentLight: "#e04444",
        accentGlow: "rgba(194,54,54,0.15)",
        border: "rgba(255,255,255,0.06)",
        borderHover: "rgba(255,255,255,0.12)",
        cardShadow: "0 4px 24px rgba(0,0,0,0.4)",
        cardHoverShadow: "0 12px 40px rgba(0,0,0,0.6)",
    },
    light: {
        bgPrimary: "#f5f3ef",
        bgCard: "#ffffff",
        bgCardHover: "#f0ede8",
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
    },
}

const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'Space Grotesk', sans-serif",
}

const programs = [
    {
        level: "Primaire",
        title: "École et cinéma",
        desc: "3 films par an sélectionnés pour les élèves du primaire, avec ressources pédagogiques et formation pour les enseignants.",
    },
    {
        level: "Collège",
        title: "Collège au cinéma",
        desc: "Projections dédiées aux collégiens, 3 films par an issus du catalogue national, accompagnés de documents pédagogiques.",
    },
    {
        level: "Lycée",
        title: "Lycéens et apprentis au cinéma",
        desc: "Dispositif régional pour les lycéens, 3 films par an avec documents d'accompagnement et interventions de professionnels.",
    },
]

const icons = {
    book: (color: string) => (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    ),
    users: (color: string) => (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    film: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
            <line x1="17" y1="17" x2="22" y2="17" />
        </svg>
    ),
}

function getCss(t: typeof colors.dark) {
    return `
@keyframes alh-sch-fadeInUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-sch-root {
    width: 100%;
    min-height: 100vh;
    background: ${t.bgPrimary};
    color: ${t.textPrimary};
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.alh-sch-root *, .alh-sch-root *::before, .alh-sch-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.alh-sch-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 24px 100px;
}

/* --- Page Header --- */
.alh-sch-header {
    text-align: center;
    margin-bottom: 80px;
}

.alh-sch-reveal {
    opacity: 0;
    transform: translateY(32px);
}

.alh-sch-reveal.alh-sch-visible {
    animation: alh-sch-fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.alh-sch-reveal-d1.alh-sch-visible { animation-delay: 0.1s; }
.alh-sch-reveal-d2.alh-sch-visible { animation-delay: 0.2s; }
.alh-sch-reveal-d3.alh-sch-visible { animation-delay: 0.3s; }
.alh-sch-reveal-d4.alh-sch-visible { animation-delay: 0.4s; }
.alh-sch-reveal-d5.alh-sch-visible { animation-delay: 0.5s; }
.alh-sch-reveal-d6.alh-sch-visible { animation-delay: 0.6s; }
.alh-sch-reveal-d7.alh-sch-visible { animation-delay: 0.7s; }

.alh-sch-tag {
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

.alh-sch-title {
    font-family: ${fonts.display};
    font-weight: 900;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    line-height: 1.1;
    color: ${t.textPrimary};
    margin-bottom: 16px;
}

.alh-sch-subtitle {
    font-size: 1.05rem;
    color: ${t.textSecondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
    font-family: ${fonts.body};
}

/* --- Section Header --- */
.alh-sch-section-header {
    text-align: center;
    margin-bottom: 48px;
}

.alh-sch-section-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${t.accent};
    margin-bottom: 12px;
    font-family: ${fonts.body};
}

.alh-sch-section-title {
    font-family: ${fonts.display};
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: ${t.textPrimary};
    margin: 0 0 12px;
}

.alh-sch-section-desc {
    font-size: 0.95rem;
    color: ${t.textSecondary};
    max-width: 550px;
    margin: 0 auto;
    font-family: ${fonts.body};
    line-height: 1.6;
}

/* --- Content Block --- */
.alh-sch-content-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    margin-bottom: 100px;
}

.alh-sch-content-block.alh-sch-reversed {
    direction: rtl;
}

.alh-sch-content-block.alh-sch-reversed > * {
    direction: ltr;
}

.alh-sch-content-title {
    font-family: ${fonts.display};
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: ${t.textPrimary};
    margin: 0 0 20px;
}

.alh-sch-content-text {
    font-size: 0.95rem;
    color: ${t.textSecondary};
    line-height: 1.8;
    margin: 0 0 24px;
    font-family: ${fonts.body};
}

.alh-sch-content-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.alh-sch-content-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.92rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
    line-height: 1.6;
}

.alh-sch-content-list li::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${t.accent};
    flex-shrink: 0;
    margin-top: 7px;
}

.alh-sch-content-list strong {
    color: ${t.textPrimary};
    font-weight: 600;
}

.alh-sch-content-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 20px;
    aspect-ratio: 4 / 3;
    overflow: hidden;
}

.alh-sch-content-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: ${fonts.body};
    background: ${t.accent};
    color: #fff;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.35s ease;
}

.alh-sch-content-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(194,54,54,0.3);
}

/* --- Programs Grid --- */
.alh-sch-programs {
    margin-bottom: 100px;
}

.alh-sch-programs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.alh-sch-program-card {
    padding: 36px 28px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 20px;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.35s ease,
                box-shadow 0.35s ease;
    cursor: default;
}

.alh-sch-program-card:hover {
    transform: translateY(-6px);
    border-color: ${t.accent};
    box-shadow: ${t.cardHoverShadow};
}

.alh-sch-program-badge {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #fff;
    background: ${t.accent};
    padding: 5px 14px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-family: ${fonts.body};
}

.alh-sch-program-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: ${t.accentGlow};
    margin-bottom: 20px;
}

.alh-sch-program-title {
    font-family: ${fonts.display};
    font-size: 1.25rem;
    font-weight: 700;
    color: ${t.textPrimary};
    margin: 0 0 12px;
    line-height: 1.3;
}

.alh-sch-program-desc {
    font-size: 0.9rem;
    color: ${t.textSecondary};
    line-height: 1.7;
    margin: 0;
    font-family: ${fonts.body};
}

/* --- Responsive --- */
@media (max-width: 1024px) {
    .alh-sch-programs-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .alh-sch-content-block {
        gap: 48px;
    }
    .alh-sch-container {
        padding: 60px 20px 80px;
    }
}

@media (max-width: 768px) {
    .alh-sch-programs-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .alh-sch-header {
        margin-bottom: 48px;
    }
    .alh-sch-container {
        padding: 48px 16px 64px;
    }
    .alh-sch-title {
        font-size: clamp(1.8rem, 6vw, 2.5rem);
    }
    .alh-sch-subtitle {
        font-size: 0.95rem;
    }
    .alh-sch-content-block,
    .alh-sch-content-block.alh-sch-reversed {
        grid-template-columns: 1fr;
        gap: 32px;
        direction: ltr;
    }
    .alh-sch-programs,
    .alh-sch-content-block {
        margin-bottom: 64px;
    }
    .alh-sch-program-card {
        padding: 28px 24px;
    }
    .alh-sch-section-header {
        margin-bottom: 32px;
    }
}

@media (max-width: 480px) {
    .alh-sch-container {
        padding: 36px 12px 48px;
    }
    .alh-sch-title {
        font-size: clamp(1.6rem, 8vw, 2rem);
    }
    .alh-sch-subtitle {
        font-size: 0.88rem;
    }
    .alh-sch-program-card {
        padding: 24px 20px;
    }
    .alh-sch-content-visual {
        aspect-ratio: 3 / 2;
    }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function SchoolPage(props) {
    const { theme, pageTag, title, subtitle } = props
    const t = colors[theme] || colors.dark
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const targets = el.querySelectorAll(".alh-sch-reveal")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-sch-visible")
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
        <section ref={sectionRef} className="alh-sch-root" style={{ background: t.bgPrimary, color: t.textPrimary }}>
            <style>{getCss(t)}</style>
            <div className="alh-sch-container">

                {/* Page Header */}
                <div className="alh-sch-header alh-sch-reveal">
                    <span className="alh-sch-tag">{pageTag}</span>
                    <h1 className="alh-sch-title">{title}</h1>
                    <p className="alh-sch-subtitle">{subtitle}</p>
                </div>

                {/* Section 1 - Intro Content Block */}
                <div className="alh-sch-content-block alh-sch-reveal alh-sch-reveal-d1">
                    <div>
                        <h2 className="alh-sch-content-title">Le cinéma, outil pédagogique</h2>
                        <p className="alh-sch-content-text">
                            Le Cinéma Alhambra, labellisé Jeune Public, accueille les scolaires toute l'année
                            pour des séances adaptées et accompagnées. Un tarif préférentiel de 5€ par élève
                            est proposé, avec ouverture des portes 20 minutes avant la projection.
                        </p>
                        <ul className="alh-sch-content-list">
                            <li><span><strong>Label Jeune Public :</strong> Une programmation exigeante et adaptée aux jeunes spectateurs.</span></li>
                            <li><span><strong>Accompagnement :</strong> Dossiers pédagogiques et interventions en classe possibles.</span></li>
                            <li><span><strong>Tarif scolaire :</strong> 5€ par élève, groupe de 20 minimum.</span></li>
                        </ul>
                    </div>
                    <div className="alh-sch-content-visual">
                        {icons.book(t.textMuted)}
                    </div>
                </div>

                {/* Section 2 - Programs Grid */}
                <div className="alh-sch-programs">
                    <div className="alh-sch-section-header alh-sch-reveal alh-sch-reveal-d2">
                        <span className="alh-sch-section-tag">Dispositifs nationaux</span>
                        <h2 className="alh-sch-section-title">Nos programmes</h2>
                        <p className="alh-sch-section-desc">
                            Trois dispositifs soutenus par le CNC et l'Éducation nationale.
                        </p>
                    </div>

                    <div className="alh-sch-programs-grid">
                        {programs.map((prog, i) => (
                            <div
                                key={i}
                                className={`alh-sch-program-card alh-sch-reveal alh-sch-reveal-d${i + 3}`}
                            >
                                <span className="alh-sch-program-badge">{prog.level}</span>
                                <div className="alh-sch-program-icon">
                                    {icons.film(t.accent)}
                                </div>
                                <h3 className="alh-sch-program-title">{prog.title}</h3>
                                <p className="alh-sch-program-desc">{prog.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3 - Centres de loisirs (reversed) */}
                <div className="alh-sch-content-block alh-sch-reversed alh-sch-reveal alh-sch-reveal-d6">
                    <div>
                        <h2 className="alh-sch-content-title">Centres de loisirs</h2>
                        <p className="alh-sch-content-text">
                            Le Cinéma Alhambra accueille également les centres de loisirs avec un tarif
                            préférentiel et une programmation adaptée aux différentes tranches d'âge.
                            Contactez-nous pour organiser votre venue.
                        </p>
                        <ul className="alh-sch-content-list">
                            <li><span><strong>Tarif préférentiel :</strong> Conditions avantageuses pour les groupes.</span></li>
                            <li><span><strong>Programmation adaptée :</strong> Choix de films selon l'âge des enfants.</span></li>
                            <li><span><strong>Contact :</strong> 03 21 17 73 33 pour organiser votre séance.</span></li>
                        </ul>
                        <a href="/infos-pratiques" className="alh-sch-content-cta">
                            Voir les tarifs
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </div>
                    <div className="alh-sch-content-visual">
                        {icons.users(t.textMuted)}
                    </div>
                </div>

            </div>
        </section>
    )
}

SchoolPage.defaultProps = {
    theme: "dark",
    pageTag: "Éducation à l'image",
    title: "Scolaires & Centres de loisirs",
    subtitle: "Découvrir le cinéma autrement avec vos élèves.",
}

addPropertyControls(SchoolPage, {
    theme: {
        type: ControlType.Enum,
        title: "Thème",
        options: ["dark", "light"],
        optionTitles: ["Sombre", "Clair"],
    },
    pageTag: { type: ControlType.String, title: "Tag page" },
    title: { type: ControlType.String, title: "Titre" },
    subtitle: { type: ControlType.String, title: "Sous-titre" },
})
