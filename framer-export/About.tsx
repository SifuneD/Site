import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef } from "react"

const colors = {
    dark: { bgSecondary: "#111118", bgCard: "#16161f", bgCardHover: "#1c1c28", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", border: "rgba(255,255,255,0.06)", borderHover: "rgba(255,255,255,0.12)" },
    light: { bgSecondary: "#eae7e1", bgCard: "#ffffff", bgCardHover: "#f0ede8", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", border: "rgba(0,0,0,0.08)", borderHover: "rgba(0,0,0,0.15)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

const iconSearch = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
const iconLayers = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
const iconUsers = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`

function getStyles(t: typeof colors.dark) {
    return `
@keyframes alh-about-reveal {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-about-section {
    padding: 120px 0;
    background: ${t.bgSecondary};
    width: 100%;
}

.alh-about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.alh-about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.alh-about-tag {
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

.alh-about-title {
    font-family: ${fonts.display};
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    margin: 0 0 16px;
    line-height: 1.15;
    color: ${t.textPrimary};
}

.alh-about-title-accent {
    color: ${t.accent};
}

.alh-about-description {
    font-size: 1.05rem;
    color: ${t.textSecondary};
    line-height: 1.8;
    margin: 0 0 32px;
    font-family: ${fonts.body};
}

.alh-about-labels {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
}

.alh-about-label {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    background: ${t.bgCard};
    border-radius: 12px;
    border: 1px solid ${t.border};
    transition: border-color 0.35s ease,
                background 0.35s ease,
                transform 0.35s cubic-bezier(0.16,1,0.3,1);
}

.alh-about-label:hover {
    border-color: ${t.accent};
    background: ${t.bgCardHover};
    transform: translateX(4px);
}

.alh-about-label-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: ${t.accentGlow};
    color: ${t.accent};
    flex-shrink: 0;
}

.alh-about-label-title {
    display: block;
    font-family: ${fonts.heading};
    font-size: 0.95rem;
    font-weight: 600;
    color: ${t.textPrimary};
}

.alh-about-label-sub {
    font-size: 0.8rem;
    color: ${t.textMuted};
    font-family: ${fonts.body};
}

.alh-about-cta {
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
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                box-shadow 0.35s ease;
}

.alh-about-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(194,54,54,0.3);
}

.alh-about-image-wrap {
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid ${t.border};
    background: ${t.bgCard};
    aspect-ratio: 4 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
}

.alh-about-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.alh-about-placeholder {
    text-align: center;
    color: ${t.textMuted};
    padding: 40px;
}

.alh-about-placeholder-name {
    font-family: ${fonts.display};
    font-size: 1.25rem;
    color: ${t.textSecondary};
    margin: 0 0 4px;
}

.alh-about-placeholder-addr {
    font-size: 0.85rem;
}

.alh-about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 24px;
}

.alh-about-stat {
    text-align: center;
    padding: 20px 16px;
    background: ${t.bgCard};
    border-radius: 12px;
    border: 1px solid ${t.border};
    transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1);
}

.alh-about-stat:hover {
    border-color: ${t.borderHover};
    transform: translateY(-2px);
}

.alh-about-stat-number {
    display: block;
    font-family: ${fonts.display};
    font-size: 2rem;
    font-weight: 700;
    color: ${t.accent};
    line-height: 1;
    margin-bottom: 4px;
}

.alh-about-stat-label {
    font-size: 0.8rem;
    color: ${t.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: ${fonts.body};
}

.alh-about-reveal {
    opacity: 0;
    transform: translateY(32px);
}

.alh-about-reveal.alh-about-visible {
    animation: alh-about-reveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
}

.alh-about-reveal-d1.alh-about-visible { animation-delay: 0.1s; }
.alh-about-reveal-d2.alh-about-visible { animation-delay: 0.2s; }
.alh-about-reveal-d3.alh-about-visible { animation-delay: 0.3s; }
.alh-about-reveal-d4.alh-about-visible { animation-delay: 0.4s; }
.alh-about-reveal-d5.alh-about-visible { animation-delay: 0.5s; }

@media (max-width: 1024px) {
    .alh-about-grid {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}

@media (max-width: 480px) {
    .alh-about-section { padding: 80px 0; }
    .alh-about-stat { padding: 14px 10px; }
    .alh-about-stat-number { font-size: 1.5rem; }
    .alh-about-stat-label { font-size: 0.7rem; }
    .alh-about-stats { gap: 10px; }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function About(props) {
    const t = colors[props.theme]
    const sectionRef = useRef<HTMLElement>(null)

    const labels = [
        { title: props.label1Title, sub: props.label1Sub, icon: iconSearch },
        { title: props.label2Title, sub: props.label2Sub, icon: iconLayers },
        { title: props.label3Title, sub: props.label3Sub, icon: iconUsers },
    ]
    const stats = [
        { number: props.stat1Number, label: props.stat1Label },
        { number: props.stat2Number, label: props.stat2Label },
        { number: props.stat3Number, label: props.stat3Label },
    ]

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const targets = el.querySelectorAll(".alh-about-reveal")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-about-visible")
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
        <section ref={sectionRef} className="alh-about-section">
            <style>{getStyles(t)}</style>
            <div className="alh-about-container">
                <div className="alh-about-grid">
                    {/* Left column */}
                    <div>
                        <div className="alh-about-reveal">
                            <span className="alh-about-tag">{props.sectionTag}</span>
                            <h2 className="alh-about-title">
                                {props.titleLine1}
                                <br />
                                <span className="alh-about-title-accent">{props.titleLine2}</span>
                            </h2>
                            <p className="alh-about-description">{props.description}</p>
                        </div>
                        <div className="alh-about-labels alh-about-reveal alh-about-reveal-d1">
                            {labels.map((label, i) => (
                                <div key={i} className="alh-about-label">
                                    <div
                                        className="alh-about-label-icon"
                                        dangerouslySetInnerHTML={{ __html: label.icon }}
                                    />
                                    <div>
                                        <strong className="alh-about-label-title">{label.title}</strong>
                                        <span className="alh-about-label-sub">{label.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="alh-about-reveal alh-about-reveal-d2">
                            <a href={props.ctaLink} className="alh-about-cta">{props.ctaText}</a>
                        </div>
                    </div>

                    {/* Right column */}
                    <div>
                        <div className="alh-about-reveal alh-about-reveal-d3">
                            <div className="alh-about-image-wrap">
                                {props.cinemaImage ? (
                                    <img src={props.cinemaImage} alt="Cinéma" />
                                ) : (
                                    <div className="alh-about-placeholder">
                                        <p className="alh-about-placeholder-name">Cinéma Alhambra</p>
                                        <span className="alh-about-placeholder-addr">2 rue Jean Jaurès, Calais</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="alh-about-stats alh-about-reveal alh-about-reveal-d4">
                            {stats.map((stat, i) => (
                                <div key={i} className="alh-about-stat">
                                    <span className="alh-about-stat-number">{stat.number}</span>
                                    <span className="alh-about-stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

About.defaultProps = {
    theme: "dark",
    sectionTag: "Notre histoire",
    titleLine1: "Le Cinéma",
    titleLine2: "Alhambra",
    description: "Situé au coeur de Calais, le Cinéma Alhambra est un cinéma de proximité classé Art et Essai avec les labels Recherche-Découverte, Patrimoine-Répertoire et Jeune Public.",
    label1Title: "Recherche",
    label1Sub: "Découverte",
    label2Title: "Patrimoine",
    label2Sub: "Répertoire",
    label3Title: "Jeune Public",
    label3Sub: "Familles",
    stat1Number: "3",
    stat1Label: "Salles",
    stat2Number: "Art",
    stat2Label: "& Essai",
    stat3Number: "3",
    stat3Label: "Labels",
    ctaText: "En savoir plus",
    ctaLink: "/le-cinema",
    cinemaImage: "",
}

addPropertyControls(About, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    titleLine1: { type: ControlType.String, title: "Titre L1" },
    titleLine2: { type: ControlType.String, title: "Titre L2" },
    description: { type: ControlType.String, title: "Description" },
    label1Title: { type: ControlType.String, title: "Label 1" },
    label1Sub: { type: ControlType.String, title: "Label 1 sous" },
    label2Title: { type: ControlType.String, title: "Label 2" },
    label2Sub: { type: ControlType.String, title: "Label 2 sous" },
    label3Title: { type: ControlType.String, title: "Label 3" },
    label3Sub: { type: ControlType.String, title: "Label 3 sous" },
    stat1Number: { type: ControlType.String, title: "Stat 1" },
    stat1Label: { type: ControlType.String, title: "Stat 1 label" },
    stat2Number: { type: ControlType.String, title: "Stat 2" },
    stat2Label: { type: ControlType.String, title: "Stat 2 label" },
    stat3Number: { type: ControlType.String, title: "Stat 3" },
    stat3Label: { type: ControlType.String, title: "Stat 3 label" },
    ctaText: { type: ControlType.String, title: "CTA" },
    ctaLink: { type: ControlType.String, title: "CTA lien" },
    cinemaImage: { type: ControlType.Image, title: "Photo" },
})
