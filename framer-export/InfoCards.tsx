import React from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", border: "rgba(255,255,255,0.06)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

const cardIcons = {
    mapPin: (color: string) => (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    phone: (color: string) => (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    mail: (color: string) => (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,4 12,13 2,4" />
        </svg>
    ),
    creditCard: (color: string) => (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
    ),
}

const iconKeys = ["mapPin", "phone", "mail", "creditCard"] as const

function getStyles(t: typeof colors.dark) {
    return `
@keyframes alh-info-reveal {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-info-section {
    padding: 120px 0;
    background: ${t.bgPrimary};
    width: 100%;
}

.alh-info-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.alh-info-header {
    text-align: center;
    margin-bottom: 64px;
    animation: alh-info-reveal 0.7s ease both;
}

.alh-info-tag {
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

.alh-info-title {
    font-family: ${fonts.display};
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    line-height: 1.15;
    color: ${t.textPrimary};
    margin: 0;
}

.alh-info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.alh-info-card {
    padding: 32px 24px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 20px;
    text-align: center;
    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
    animation: alh-info-reveal 0.7s ease both;
}

.alh-info-card:nth-child(1) { animation-delay: 0.1s; }
.alh-info-card:nth-child(2) { animation-delay: 0.2s; }
.alh-info-card:nth-child(3) { animation-delay: 0.3s; }
.alh-info-card:nth-child(4) { animation-delay: 0.4s; }

.alh-info-card:hover {
    transform: translateY(-4px);
    border-color: ${t.accent};
}

.alh-info-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: ${t.accentGlow};
}

.alh-info-card-title {
    font-family: ${fonts.heading};
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 8px;
    color: ${t.textPrimary};
}

.alh-info-card-text {
    font-size: 0.9rem;
    color: ${t.textSecondary};
    line-height: 1.5;
    margin: 0 0 8px;
    font-family: ${fonts.body};
}

.alh-info-card-detail {
    font-size: 0.8rem;
    color: ${t.textMuted};
    font-family: ${fonts.body};
}

.alh-info-card-link {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${t.accent};
    margin-top: 4px;
    text-decoration: none;
    font-family: ${fonts.body};
    transition: opacity 0.3s ease;
}

.alh-info-card-link:hover {
    opacity: 0.8;
}

@media (max-width: 1024px) {
    .alh-info-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .alh-info-grid {
        grid-template-columns: 1fr;
    }
    .alh-info-section {
        padding: 80px 0;
    }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function InfoCards(props) {
    const t = colors[props.theme]
    const cards = [
        { title: props.c1Title, text: props.c1Text, detail: props.c1Detail, link: undefined, linkText: undefined },
        { title: props.c2Title, text: props.c2Text, detail: props.c2Detail, link: undefined, linkText: undefined },
        { title: props.c3Title, text: props.c3Text, detail: props.c3Detail, link: undefined, linkText: undefined },
        { title: props.c4Title, text: props.c4Text, detail: undefined, link: props.c4Link, linkText: props.c4LinkText },
    ]

    return (
        <>
            <style>{getStyles(t)}</style>
            <section className="alh-info-section">
                <div className="alh-info-container">
                    <div className="alh-info-header">
                        <span className="alh-info-tag">{props.sectionTag}</span>
                        <h2 className="alh-info-title">{props.sectionTitle}</h2>
                    </div>
                    <div className="alh-info-grid">
                        {cards.map((card, i) => (
                            <div key={i} className="alh-info-card">
                                <div className="alh-info-icon">
                                    {cardIcons[iconKeys[i]](t.accent)}
                                </div>
                                <h3 className="alh-info-card-title">{card.title}</h3>
                                <p className="alh-info-card-text">{card.text}</p>
                                {card.detail && <span className="alh-info-card-detail">{card.detail}</span>}
                                {card.link && card.linkText && (
                                    <a href={card.link} className="alh-info-card-link">{card.linkText}</a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

InfoCards.defaultProps = {
    theme: "dark", sectionTag: "Venir au cinéma", sectionTitle: "Infos pratiques",
    c1Title: "Adresse", c1Text: "2 rue Jean Jaurès, 62100 Calais", c1Detail: "Centre-ville, suivre Hôtel de Ville",
    c2Title: "Téléphone", c2Text: "+33 (0)3 21 17 73 33", c2Detail: "Renseignements et réservations",
    c3Title: "Email", c3Text: "contact@cinema-alhambra.org", c3Detail: "Nous répondons sous 48h",
    c4Title: "Tarifs & Cartes", c4Text: "Cartes d'abonnement disponibles", c4Link: "/infos-pratiques", c4LinkText: "Voir les tarifs",
}

addPropertyControls(InfoCards, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    sectionTitle: { type: ControlType.String, title: "Titre" },
    c1Title: { type: ControlType.String, title: "Carte 1" },
    c1Text: { type: ControlType.String, title: "C1 Texte" },
    c1Detail: { type: ControlType.String, title: "C1 Détail" },
    c2Title: { type: ControlType.String, title: "Carte 2" },
    c2Text: { type: ControlType.String, title: "C2 Texte" },
    c2Detail: { type: ControlType.String, title: "C2 Détail" },
    c3Title: { type: ControlType.String, title: "Carte 3" },
    c3Text: { type: ControlType.String, title: "C3 Texte" },
    c3Detail: { type: ControlType.String, title: "C3 Détail" },
    c4Title: { type: ControlType.String, title: "Carte 4" },
    c4Text: { type: ControlType.String, title: "C4 Texte" },
    c4Link: { type: ControlType.String, title: "C4 Lien" },
    c4LinkText: { type: ControlType.String, title: "C4 Texte lien" },
})
