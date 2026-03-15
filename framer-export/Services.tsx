// Services Section — Framer Code Component
// Editable: section header, up to 4 service cards

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    theme: "dark" | "light"
    sectionTag: string
    sectionTitle: string
    service1Title: string
    service1Desc: string
    service1Link: string
    service2Title: string
    service2Desc: string
    service2Link: string
    service3Title: string
    service3Desc: string
    service3Link: string
    service4Title: string
    service4Desc: string
    service4Link: string
}

function ServiceCard({ title, desc, link, t, theme }: { title: string; desc: string; link: string; t: typeof colors.dark; theme: string }) {
    return (
        <div style={{
            padding: "36px 28px", background: t.bgCard,
            border: `1px solid ${t.border}`, borderRadius: 20,
            boxShadow: theme === "light" ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        }}>
            <div style={{
                width: 56, height: 56, display: "flex", alignItems: "center",
                justifyContent: "center", borderRadius: 14,
                background: t.accentGlow, color: t.accent, marginBottom: 20,
            }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
            </div>
            <h3 style={{
                fontFamily: fonts.heading, fontSize: "1.15rem",
                fontWeight: 600, marginBottom: 12, color: t.textPrimary,
            }}>
                {title}
            </h3>
            <p style={{
                fontSize: "0.9rem", color: t.textSecondary,
                lineHeight: 1.6, marginBottom: 20, fontFamily: fonts.body,
            }}>
                {desc}
            </p>
            <a href={link} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: "0.85rem", fontWeight: 600, color: t.accent,
                textDecoration: "none", fontFamily: fonts.body,
            }}>
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>
    )
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Services(props: Props) {
    const t = colors[props.theme]

    const services = [
        { title: props.service1Title, desc: props.service1Desc, link: props.service1Link },
        { title: props.service2Title, desc: props.service2Desc, link: props.service2Link },
        { title: props.service3Title, desc: props.service3Desc, link: props.service3Link },
        { title: props.service4Title, desc: props.service4Desc, link: props.service4Link },
    ].filter((s) => s.title)

    return (
        <section style={{ padding: "120px 0", background: t.bgPrimary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span style={{
                        display: "inline-block", fontSize: "0.75rem", fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: "0.2em", color: t.accent,
                        marginBottom: 16, padding: "6px 16px",
                        border: "1px solid rgba(194,54,54,0.25)", borderRadius: 100,
                        background: "rgba(194,54,54,0.06)", fontFamily: fonts.body,
                    }}>
                        {props.sectionTag}
                    </span>
                    <h2 style={{
                        fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 700, lineHeight: 1.15, color: t.textPrimary,
                    }}>
                        {props.sectionTitle}
                    </h2>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${Math.min(services.length, 4)}, 1fr)`,
                    gap: 24,
                }}>
                    {services.map((s, i) => (
                        <ServiceCard key={i} {...s} t={t} theme={props.theme} />
                    ))}
                </div>
            </div>
        </section>
    )
}

Services.defaultProps = {
    theme: "dark",
    sectionTag: "Nos services",
    sectionTitle: "Plus qu'un cinéma",
    service1Title: "Anniversaires",
    service1Desc: "Les mercredis et samedis après-midi, organisez l'anniversaire de votre enfant au cinéma. Projection + goûter, 10\u20AC par enfant.",
    service1Link: "/infos-pratiques",
    service2Title: "Scolaires",
    service2Desc: "Séances scolaires toute l'année. École et cinéma, Collège au cinéma, Lycéens et apprentis au cinéma. 5\u20AC par élève.",
    service2Link: "/scolaires",
    service3Title: "Séances privées",
    service3Desc: "Toute l'année, nous pouvons organiser des séances privées avec les films de notre catalogue.",
    service3Link: "/infos-pratiques",
    service4Title: "Accessibilité",
    service4Desc: "2 salles accessibles aux personnes à mobilité réduite. Navette gratuite Balad'In avec arrêt \"Alhambra\".",
    service4Link: "/infos-pratiques",
}

addPropertyControls(Services, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    sectionTitle: { type: ControlType.String, title: "Titre" },
    service1Title: { type: ControlType.String, title: "Service 1 — Titre" },
    service1Desc: { type: ControlType.String, title: "Service 1 — Desc" },
    service1Link: { type: ControlType.String, title: "Service 1 — Lien" },
    service2Title: { type: ControlType.String, title: "Service 2 — Titre" },
    service2Desc: { type: ControlType.String, title: "Service 2 — Desc" },
    service2Link: { type: ControlType.String, title: "Service 2 — Lien" },
    service3Title: { type: ControlType.String, title: "Service 3 — Titre" },
    service3Desc: { type: ControlType.String, title: "Service 3 — Desc" },
    service3Link: { type: ControlType.String, title: "Service 3 — Lien" },
    service4Title: { type: ControlType.String, title: "Service 4 — Titre" },
    service4Desc: { type: ControlType.String, title: "Service 4 — Desc" },
    service4Link: { type: ControlType.String, title: "Service 4 — Lien" },
})
