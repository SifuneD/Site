import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef } from "react"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", bgCardHover: "#1c1c28", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", border: "rgba(255,255,255,0.06)", borderHover: "rgba(255,255,255,0.12)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", bgCardHover: "#f0ede8", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", border: "rgba(0,0,0,0.08)", borderHover: "rgba(0,0,0,0.15)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

function getStyles(t: typeof colors.dark) {
    return `
@keyframes alh-coming-reveal {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-coming-section {
    padding: 120px 0;
    background: ${t.bgPrimary};
    width: 100%;
}

.alh-coming-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.alh-coming-header {
    text-align: center;
    margin-bottom: 64px;
}

.alh-coming-tag {
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

.alh-coming-title {
    font-family: ${fonts.display};
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    margin: 0 0 16px;
    line-height: 1.15;
    color: ${t.textPrimary};
}

.alh-coming-desc {
    font-size: 1.1rem;
    color: ${t.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
    font-family: ${fonts.body};
    line-height: 1.7;
}

.alh-coming-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.alh-coming-item {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 24px 32px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 16px;
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                background 0.35s ease,
                border-color 0.35s ease,
                box-shadow 0.35s ease;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

.alh-coming-item:hover {
    transform: translateX(8px);
    background: ${t.bgCardHover};
    border-color: ${t.accent};
    box-shadow: 0 4px 24px rgba(194,54,54,0.08);
}

.alh-coming-date {
    flex-shrink: 0;
    text-align: center;
    min-width: 80px;
    font-family: ${fonts.heading};
    font-size: 1rem;
    font-weight: 700;
    color: ${t.accent};
}

.alh-coming-info {
    flex: 1;
    min-width: 0;
}

.alh-coming-item-title {
    font-family: ${fonts.heading};
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 4px;
    color: ${t.textPrimary};
}

.alh-coming-item-meta {
    font-size: 0.9rem;
    color: ${t.textSecondary};
    margin: 0;
    font-family: ${fonts.body};
}

.alh-coming-arrow {
    flex-shrink: 0;
    color: ${t.textMuted};
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                color 0.35s ease;
}

.alh-coming-item:hover .alh-coming-arrow {
    transform: translateX(6px);
    color: ${t.accent};
}

.alh-coming-cta-wrap {
    text-align: center;
    margin-top: 48px;
}

.alh-coming-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: ${t.accent};
    border: 1px solid ${t.accent};
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    font-family: ${fonts.body};
    transition: background 0.3s ease,
                color 0.3s ease,
                transform 0.3s cubic-bezier(0.16,1,0.3,1),
                box-shadow 0.3s ease;
    cursor: pointer;
}

.alh-coming-cta:hover {
    background: ${t.accent};
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(194,54,54,0.25);
}

.alh-coming-reveal {
    opacity: 0;
    transform: translateY(32px);
}

.alh-coming-reveal.alh-coming-visible {
    animation: alh-coming-reveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
}

.alh-coming-reveal-d1.alh-coming-visible { animation-delay: 0.1s; }
.alh-coming-reveal-d2.alh-coming-visible { animation-delay: 0.2s; }
.alh-coming-reveal-d3.alh-coming-visible { animation-delay: 0.3s; }
.alh-coming-reveal-d4.alh-coming-visible { animation-delay: 0.4s; }

@media (max-width: 768px) {
    .alh-coming-section { padding: 80px 0; }
    .alh-coming-header { margin-bottom: 40px; }
    .alh-coming-item { padding: 16px 20px; gap: 16px; }
    .alh-coming-date { min-width: 60px; font-size: 0.9rem; }
    .alh-coming-item-title { font-size: 1rem; }
    .alh-coming-list { gap: 8px; }
    .alh-coming-cta-wrap { margin-top: 32px; }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function ComingSoon(props) {
    const t = colors[props.theme]
    const sectionRef = useRef<HTMLElement>(null)

    const items = [
        { date: props.item1Date, title: props.item1Title, meta: props.item1Meta },
        { date: props.item2Date, title: props.item2Title, meta: props.item2Meta },
        { date: props.item3Date, title: props.item3Title, meta: props.item3Meta },
    ].filter((item) => item.title)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const targets = el.querySelectorAll(".alh-coming-reveal")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-coming-visible")
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
        <section ref={sectionRef} className="alh-coming-section">
            <style>{getStyles(t)}</style>
            <div className="alh-coming-container">
                <div className="alh-coming-header alh-coming-reveal">
                    <span className="alh-coming-tag">{props.sectionTag}</span>
                    <h2 className="alh-coming-title">{props.sectionTitle}</h2>
                    <p className="alh-coming-desc">{props.sectionDesc}</p>
                </div>
                <div className="alh-coming-list">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`alh-coming-item alh-coming-reveal alh-coming-reveal-d${i + 1}`}
                        >
                            <div className="alh-coming-date">{item.date}</div>
                            <div className="alh-coming-info">
                                <h3 className="alh-coming-item-title">{item.title}</h3>
                                <p className="alh-coming-item-meta">{item.meta}</p>
                            </div>
                            <svg className="alh-coming-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    ))}
                </div>
                <div className={`alh-coming-cta-wrap alh-coming-reveal alh-coming-reveal-d${Math.min(items.length + 1, 4)}`}>
                    <a href={props.ctaLink} className="alh-coming-cta">{props.ctaText}</a>
                </div>
            </div>
        </section>
    )
}

ComingSoon.defaultProps = {
    theme: "dark",
    sectionTag: "Bientôt",
    sectionTitle: "Prochainement",
    sectionDesc: "Les films qui arrivent bientôt sur nos écrans.",
    item1Date: "18 mars",
    item1Title: "L'Ombre d'un mensonge",
    item1Meta: "De Bouli Lanners • Drame, Romance • 1h39 • VOST",
    item2Date: "",
    item2Title: "",
    item2Meta: "",
    item3Date: "",
    item3Title: "",
    item3Meta: "",
    ctaText: "Voir tous les films à venir",
    ctaLink: "/prochainement",
}

addPropertyControls(ComingSoon, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    sectionTitle: { type: ControlType.String, title: "Titre" },
    sectionDesc: { type: ControlType.String, title: "Description" },
    item1Date: { type: ControlType.String, title: "Film 1 Date" },
    item1Title: { type: ControlType.String, title: "Film 1 Titre" },
    item1Meta: { type: ControlType.String, title: "Film 1 Meta" },
    item2Date: { type: ControlType.String, title: "Film 2 Date" },
    item2Title: { type: ControlType.String, title: "Film 2 Titre" },
    item2Meta: { type: ControlType.String, title: "Film 2 Meta" },
    item3Date: { type: ControlType.String, title: "Film 3 Date" },
    item3Title: { type: ControlType.String, title: "Film 3 Titre" },
    item3Meta: { type: ControlType.String, title: "Film 3 Meta" },
    ctaText: { type: ControlType.String, title: "CTA texte" },
    ctaLink: { type: ControlType.String, title: "CTA lien" },
})
