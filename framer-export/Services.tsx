import React from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", border: "rgba(255,255,255,0.06)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

const serviceIcons = {
    person: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </svg>
    ),
    book: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    ),
    calendar: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    ),
    heartbeat: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            <polyline points="3 12 7 12 9 8 12 16 15 12 21 12" />
        </svg>
    ),
}

const iconKeys = ["person", "book", "calendar", "heartbeat"] as const

function getStyles(t: typeof colors.dark) {
    return `
@keyframes alh-svc-reveal {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-svc-section {
    padding: 120px 0;
    background: ${t.bgPrimary};
    width: 100%;
}

.alh-svc-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.alh-svc-header {
    text-align: center;
    margin-bottom: 64px;
    animation: alh-svc-reveal 0.7s ease both;
}

.alh-svc-tag {
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

.alh-svc-title {
    font-family: ${fonts.display};
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    line-height: 1.15;
    color: ${t.textPrimary};
    margin: 0;
}

.alh-svc-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.alh-svc-card {
    padding: 36px 28px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 20px;
    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
    animation: alh-svc-reveal 0.7s ease both;
}

.alh-svc-card:nth-child(1) { animation-delay: 0.1s; }
.alh-svc-card:nth-child(2) { animation-delay: 0.2s; }
.alh-svc-card:nth-child(3) { animation-delay: 0.3s; }
.alh-svc-card:nth-child(4) { animation-delay: 0.4s; }

.alh-svc-card:hover {
    transform: translateY(-6px);
    border-color: ${t.accent};
    box-shadow: 0 16px 48px rgba(0,0,0,0.3);
}

.alh-svc-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: ${t.accentGlow};
    margin-bottom: 20px;
}

.alh-svc-card-title {
    font-family: ${fonts.heading};
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0 0 12px;
    color: ${t.textPrimary};
}

.alh-svc-card-desc {
    font-size: 0.9rem;
    color: ${t.textSecondary};
    line-height: 1.6;
    margin: 0 0 20px;
    font-family: ${fonts.body};
}

.alh-svc-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${t.accent};
    text-decoration: none;
    font-family: ${fonts.body};
    transition: gap 0.3s ease;
}

.alh-svc-link:hover {
    gap: 10px;
}

@media (max-width: 1024px) {
    .alh-svc-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .alh-svc-grid {
        grid-template-columns: 1fr;
    }
    .alh-svc-section {
        padding: 80px 0;
    }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Services(props) {
    const t = colors[props.theme]
    const services = [
        { title: props.s1Title, desc: props.s1Desc, link: props.s1Link },
        { title: props.s2Title, desc: props.s2Desc, link: props.s2Link },
        { title: props.s3Title, desc: props.s3Desc, link: props.s3Link },
        { title: props.s4Title, desc: props.s4Desc, link: props.s4Link },
    ].filter((s) => s.title)

    return (
        <>
            <style>{getStyles(t)}</style>
            <section className="alh-svc-section">
                <div className="alh-svc-container">
                    <div className="alh-svc-header">
                        <span className="alh-svc-tag">{props.sectionTag}</span>
                        <h2 className="alh-svc-title">{props.sectionTitle}</h2>
                    </div>
                    <div className="alh-svc-grid">
                        {services.map((s, i) => (
                            <div key={i} className="alh-svc-card">
                                <div className="alh-svc-icon">
                                    {serviceIcons[iconKeys[i % iconKeys.length]](t.accent)}
                                </div>
                                <h3 className="alh-svc-card-title">{s.title}</h3>
                                <p className="alh-svc-card-desc">{s.desc}</p>
                                <a href={s.link} className="alh-svc-link">
                                    En savoir plus
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

Services.defaultProps = {
    theme: "dark", sectionTag: "Nos services", sectionTitle: "Plus qu'un cinéma",
    s1Title: "Anniversaires", s1Desc: "Les mercredis et samedis après-midi, organisez l'anniversaire de votre enfant au cinéma. Projection + goûter, 10€ par enfant.", s1Link: "/infos-pratiques",
    s2Title: "Scolaires", s2Desc: "Séances scolaires toute l'année. École et cinéma, Collège au cinéma. 5€ par élève.", s2Link: "/scolaires",
    s3Title: "Séances privées", s3Desc: "Toute l'année, nous pouvons organiser des séances privées avec les films de notre catalogue.", s3Link: "/infos-pratiques",
    s4Title: "Accessibilité", s4Desc: "2 salles accessibles aux personnes à mobilité réduite. Navette gratuite Balad'In.", s4Link: "/infos-pratiques",
}

addPropertyControls(Services, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    sectionTitle: { type: ControlType.String, title: "Titre" },
    s1Title: { type: ControlType.String, title: "Service 1" },
    s1Desc: { type: ControlType.String, title: "S1 Desc" },
    s1Link: { type: ControlType.String, title: "S1 Lien" },
    s2Title: { type: ControlType.String, title: "Service 2" },
    s2Desc: { type: ControlType.String, title: "S2 Desc" },
    s2Link: { type: ControlType.String, title: "S2 Lien" },
    s3Title: { type: ControlType.String, title: "Service 3" },
    s3Desc: { type: ControlType.String, title: "S3 Desc" },
    s3Link: { type: ControlType.String, title: "S3 Lien" },
    s4Title: { type: ControlType.String, title: "Service 4" },
    s4Desc: { type: ControlType.String, title: "S4 Desc" },
    s4Link: { type: ControlType.String, title: "S4 Lien" },
})
