import React, { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: {
        bgPrimary: "#0a0a0f",
        bgCard: "#16161f",
        bgCardHover: "#1c1c28",
        bgRowAlt: "rgba(255,255,255,0.02)",
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
        bgRowAlt: "rgba(0,0,0,0.02)",
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

const infoCards = [
    {
        label: "Adresse",
        value: "2 rue Jean Jaurès, 62100 Calais",
        detail: "Centre-ville, suivre Hôtel de Ville",
        icon: "mapPin",
    },
    {
        label: "Téléphone",
        value: "03 21 17 73 33",
        detail: "Renseignements et réservations",
        icon: "phone",
    },
    {
        label: "Email",
        value: "contact@cinema-alhambra.org",
        detail: "Nous répondons sous 48h",
        icon: "mail",
    },
    {
        label: "Ouverture",
        value: "20 min avant la 1re séance",
        detail: "Tous les jours sauf lundi (sauf vacances scolaires)",
        icon: "clock",
    },
]

const tarifs = [
    { cat: "Plein tarif", prix: "7,50€", cond: "" },
    { cat: "Tarif réduit", prix: "6,00€", cond: "Étudiants, demandeurs d'emploi, familles nombreuses" },
    { cat: "Moins de 14 ans", prix: "4,50€", cond: "" },
    { cat: "Carte 10 places", prix: "55,00€", cond: "Nominative, valable 1 an" },
    { cat: "Carte 10 places réduit", prix: "45,00€", cond: "Nominative, valable 1 an" },
    { cat: "Séance scolaire", prix: "5,00€", cond: "Par élève, groupe de 20 minimum" },
    { cat: "Anniversaire", prix: "10,00€", cond: "Par enfant (projection + goûter), 5 à 12 enfants" },
    { cat: "Séance privée", prix: "Sur devis", cond: "Contactez-nous" },
]

const icons = {
    mapPin: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    phone: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    mail: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    ),
    clock: (color: string) => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    ),
    mapPinLarge: (color: string) => (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    gift: (color: string) => (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
    ),
}

function getCss(t: typeof colors.dark) {
    return `
@keyframes alh-pip-fadeInUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-pip-root {
    width: 100%;
    min-height: 100vh;
    background: ${t.bgPrimary};
    color: ${t.textPrimary};
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.alh-pip-root *, .alh-pip-root *::before, .alh-pip-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.alh-pip-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 24px 100px;
}

/* --- Page Header --- */
.alh-pip-header {
    text-align: center;
    margin-bottom: 80px;
}

.alh-pip-reveal {
    opacity: 0;
    transform: translateY(32px);
}

.alh-pip-reveal.alh-pip-visible {
    animation: alh-pip-fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.alh-pip-reveal-d1.alh-pip-visible { animation-delay: 0.1s; }
.alh-pip-reveal-d2.alh-pip-visible { animation-delay: 0.2s; }
.alh-pip-reveal-d3.alh-pip-visible { animation-delay: 0.3s; }
.alh-pip-reveal-d4.alh-pip-visible { animation-delay: 0.4s; }
.alh-pip-reveal-d5.alh-pip-visible { animation-delay: 0.5s; }
.alh-pip-reveal-d6.alh-pip-visible { animation-delay: 0.6s; }
.alh-pip-reveal-d7.alh-pip-visible { animation-delay: 0.7s; }
.alh-pip-reveal-d8.alh-pip-visible { animation-delay: 0.8s; }

.alh-pip-tag {
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

.alh-pip-title {
    font-family: ${fonts.display};
    font-weight: 900;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    line-height: 1.1;
    color: ${t.textPrimary};
    margin-bottom: 16px;
}

.alh-pip-subtitle {
    font-size: 1.05rem;
    color: ${t.textSecondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
    font-family: ${fonts.body};
}

/* --- Section Title --- */
.alh-pip-section-title {
    font-family: ${fonts.display};
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: ${t.textPrimary};
    margin: 0 0 40px;
    text-align: center;
}

/* --- Info Cards Grid --- */
.alh-pip-info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 100px;
}

.alh-pip-info-card {
    padding: 32px 28px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.35s ease,
                box-shadow 0.35s ease;
    cursor: default;
}

.alh-pip-info-card:hover {
    transform: translateY(-6px);
    border-color: ${t.accent};
    box-shadow: ${t.cardHoverShadow};
}

.alh-pip-info-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: ${t.accentGlow};
    flex-shrink: 0;
}

.alh-pip-info-label {
    font-family: ${fonts.heading};
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${t.accent};
    margin-bottom: 6px;
}

.alh-pip-info-value {
    font-family: ${fonts.heading};
    font-size: 1.1rem;
    font-weight: 600;
    color: ${t.textPrimary};
    margin-bottom: 4px;
}

.alh-pip-info-detail {
    font-size: 0.85rem;
    color: ${t.textMuted};
    font-family: ${fonts.body};
    line-height: 1.5;
}

/* --- Tarifs Table --- */
.alh-pip-tarifs {
    margin-bottom: 100px;
}

.alh-pip-table {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid ${t.border};
    background: ${t.bgCard};
}

.alh-pip-table-header {
    display: grid;
    grid-template-columns: 1fr 120px 1fr;
    gap: 0;
    padding: 18px 28px;
    background: ${t.accent};
    color: #fff;
    font-family: ${fonts.heading};
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.alh-pip-table-row {
    display: grid;
    grid-template-columns: 1fr 120px 1fr;
    gap: 0;
    padding: 18px 28px;
    align-items: center;
    transition: background 0.2s ease;
    border-bottom: 1px solid ${t.border};
}

.alh-pip-table-row:last-child {
    border-bottom: none;
}

.alh-pip-table-row:nth-child(even) {
    background: ${t.bgRowAlt};
}

.alh-pip-table-row:hover {
    background: ${t.accentGlow};
}

.alh-pip-table-cat {
    font-family: ${fonts.heading};
    font-weight: 600;
    font-size: 0.95rem;
    color: ${t.textPrimary};
}

.alh-pip-table-price {
    font-family: ${fonts.display};
    font-weight: 700;
    font-size: 1.1rem;
    color: ${t.accent};
}

.alh-pip-table-cond {
    font-size: 0.85rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
    line-height: 1.4;
}

/* Mobile tarif cards */
.alh-pip-tarif-cards {
    display: none;
    flex-direction: column;
    gap: 12px;
}

.alh-pip-tarif-card {
    padding: 20px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 16px;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.35s ease;
}

.alh-pip-tarif-card:hover {
    transform: translateY(-3px);
    border-color: ${t.accent};
}

.alh-pip-tarif-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.alh-pip-tarif-card-cat {
    font-family: ${fonts.heading};
    font-weight: 600;
    font-size: 0.95rem;
    color: ${t.textPrimary};
}

.alh-pip-tarif-card-price {
    font-family: ${fonts.display};
    font-weight: 700;
    font-size: 1.15rem;
    color: ${t.accent};
}

.alh-pip-tarif-card-cond {
    font-size: 0.82rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
    line-height: 1.4;
}

/* --- Content Block --- */
.alh-pip-content-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    margin-bottom: 100px;
}

.alh-pip-content-block.alh-pip-reversed {
    direction: rtl;
}

.alh-pip-content-block.alh-pip-reversed > * {
    direction: ltr;
}

.alh-pip-content-title {
    font-family: ${fonts.display};
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: ${t.textPrimary};
    margin: 0 0 20px;
}

.alh-pip-content-text {
    font-size: 0.95rem;
    color: ${t.textSecondary};
    line-height: 1.8;
    margin: 0 0 24px;
    font-family: ${fonts.body};
}

.alh-pip-content-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.alh-pip-content-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.92rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
    line-height: 1.6;
}

.alh-pip-content-list li::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${t.accent};
    flex-shrink: 0;
    margin-top: 7px;
}

.alh-pip-content-list strong {
    color: ${t.textPrimary};
    font-weight: 600;
}

.alh-pip-content-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 20px;
    aspect-ratio: 4 / 3;
    overflow: hidden;
}

.alh-pip-content-cta {
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

.alh-pip-content-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(194,54,54,0.3);
}

/* --- Responsive --- */
@media (max-width: 1024px) {
    .alh-pip-content-block {
        gap: 48px;
    }
    .alh-pip-container {
        padding: 60px 20px 80px;
    }
}

@media (max-width: 768px) {
    .alh-pip-info-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .alh-pip-header {
        margin-bottom: 48px;
    }
    .alh-pip-container {
        padding: 48px 16px 64px;
    }
    .alh-pip-title {
        font-size: clamp(1.8rem, 6vw, 2.5rem);
    }
    .alh-pip-subtitle {
        font-size: 0.95rem;
    }
    .alh-pip-table {
        display: none;
    }
    .alh-pip-tarif-cards {
        display: flex;
    }
    .alh-pip-content-block,
    .alh-pip-content-block.alh-pip-reversed {
        grid-template-columns: 1fr;
        gap: 32px;
        direction: ltr;
    }
    .alh-pip-info-card {
        padding: 24px 20px;
    }
    .alh-pip-info-value {
        font-size: 1rem;
    }
    .alh-pip-section-title {
        margin-bottom: 28px;
    }
    .alh-pip-tarifs,
    .alh-pip-content-block {
        margin-bottom: 64px;
    }
}

@media (max-width: 480px) {
    .alh-pip-container {
        padding: 36px 12px 48px;
    }
    .alh-pip-title {
        font-size: clamp(1.6rem, 8vw, 2rem);
    }
    .alh-pip-subtitle {
        font-size: 0.88rem;
    }
    .alh-pip-info-card {
        padding: 20px 16px;
        gap: 14px;
    }
    .alh-pip-info-icon {
        width: 48px;
        height: 48px;
    }
    .alh-pip-content-visual {
        aspect-ratio: 3 / 2;
    }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function PracticalInfoPage(props) {
    const { theme, pageTag, title, subtitle } = props
    const t = colors[theme] || colors.dark
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const targets = el.querySelectorAll(".alh-pip-reveal")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-pip-visible")
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
        <section ref={sectionRef} className="alh-pip-root" style={{ background: t.bgPrimary, color: t.textPrimary }}>
            <style>{getCss(t)}</style>
            <div className="alh-pip-container">

                {/* Page Header */}
                <div className="alh-pip-header alh-pip-reveal">
                    <span className="alh-pip-tag">{pageTag}</span>
                    <h1 className="alh-pip-title">{title}</h1>
                    <p className="alh-pip-subtitle">{subtitle}</p>
                </div>

                {/* Section 1 - Info Cards */}
                <div className="alh-pip-info-grid">
                    {infoCards.map((card, i) => (
                        <div
                            key={i}
                            className={`alh-pip-info-card alh-pip-reveal alh-pip-reveal-d${i + 1}`}
                            style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                        >
                            <div className="alh-pip-info-icon">
                                {icons[card.icon](t.accent)}
                            </div>
                            <div>
                                <div className="alh-pip-info-label">{card.label}</div>
                                <div className="alh-pip-info-value">{card.value}</div>
                                <div className="alh-pip-info-detail">{card.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section 2 - Tarifs */}
                <div className="alh-pip-tarifs alh-pip-reveal alh-pip-reveal-d5">
                    <h2 className="alh-pip-section-title">Nos tarifs</h2>

                    {/* Desktop table */}
                    <div className="alh-pip-table">
                        <div className="alh-pip-table-header">
                            <span>Catégorie</span>
                            <span>Tarif</span>
                            <span>Conditions</span>
                        </div>
                        {tarifs.map((row, i) => (
                            <div key={i} className="alh-pip-table-row">
                                <span className="alh-pip-table-cat">{row.cat}</span>
                                <span className="alh-pip-table-price">{row.prix}</span>
                                <span className="alh-pip-table-cond">{row.cond || "—"}</span>
                            </div>
                        ))}
                    </div>

                    {/* Mobile stacked cards */}
                    <div className="alh-pip-tarif-cards">
                        {tarifs.map((row, i) => (
                            <div key={i} className="alh-pip-tarif-card">
                                <div className="alh-pip-tarif-card-header">
                                    <span className="alh-pip-tarif-card-cat">{row.cat}</span>
                                    <span className="alh-pip-tarif-card-price">{row.prix}</span>
                                </div>
                                {row.cond && (
                                    <div className="alh-pip-tarif-card-cond">{row.cond}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3 - Comment venir */}
                <div className="alh-pip-content-block alh-pip-reveal alh-pip-reveal-d6">
                    <div>
                        <h2 className="alh-pip-content-title">Comment venir</h2>
                        <p className="alh-pip-content-text">
                            Le Cinéma Alhambra est situé en plein centre-ville de Calais, à deux pas de l'Hôtel de Ville.
                        </p>
                        <ul className="alh-pip-content-list">
                            <li><span><strong>En voiture :</strong> Suivre Centre-ville / Hôtel de Ville. Le cinéma se situe 2 rue Jean Jaurès.</span></li>
                            <li><span><strong>En bus :</strong> Navette Balad'In arrêt "Alhambra", lignes Imago réseau urbain.</span></li>
                            <li><span><strong>Stationnement :</strong> Parking gratuit Hôtel de Ville à 100m du cinéma.</span></li>
                            <li><span><strong>Accessibilité :</strong> 2 salles sur 3 sont accessibles aux personnes à mobilité réduite (PMR).</span></li>
                        </ul>
                    </div>
                    <div className="alh-pip-content-visual">
                        {icons.mapPinLarge(t.textMuted)}
                    </div>
                </div>

                {/* Section 4 - Anniversaires (reversed) */}
                <div className="alh-pip-content-block alh-pip-reversed alh-pip-reveal alh-pip-reveal-d7">
                    <div>
                        <h2 className="alh-pip-content-title">Anniversaires au cinéma</h2>
                        <p className="alh-pip-content-text">
                            Offrez à votre enfant un anniversaire inoubliable au cinéma Alhambra !
                        </p>
                        <ul className="alh-pip-content-list">
                            <li><span><strong>Quand :</strong> Mercredis et samedis après-midi</span></li>
                            <li><span><strong>Formule :</strong> Projection privée + goûter</span></li>
                            <li><span><strong>Tarif :</strong> 10€ par enfant, de 5 à 12 enfants</span></li>
                            <li><span><strong>Réservation :</strong> 03 21 17 73 33 / contact@cinema-alhambra.org</span></li>
                        </ul>
                        <a href="tel:0321177333" className="alh-pip-content-cta">
                            Réserver
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </div>
                    <div className="alh-pip-content-visual">
                        {icons.gift(t.textMuted)}
                    </div>
                </div>

            </div>
        </section>
    )
}

PracticalInfoPage.defaultProps = {
    theme: "dark",
    pageTag: "Venir au cinéma",
    title: "Infos pratiques",
    subtitle: "Tout ce qu'il faut savoir pour votre venue au Cinéma Alhambra.",
}

addPropertyControls(PracticalInfoPage, {
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
