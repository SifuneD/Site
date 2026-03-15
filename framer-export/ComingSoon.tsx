// Coming Soon Section — Framer Code Component
// Editable: section header, coming soon items

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    theme: "dark" | "light"
    sectionTag: string
    sectionTitle: string
    sectionDesc: string
    item1Date: string
    item1Title: string
    item1Meta: string
    item2Date: string
    item2Title: string
    item2Meta: string
    item3Date: string
    item3Title: string
    item3Meta: string
    ctaText: string
    ctaLink: string
}

function ComingItem({ date, title, meta, t }: { date: string; title: string; meta: string; t: typeof colors.dark }) {
    return (
        <div style={{
            display: "flex", alignItems: "center", gap: 24,
            padding: "24px 32px", background: t.bgCard,
            border: `1px solid ${t.border}`, borderRadius: 16,
        }}>
            <div style={{ flexShrink: 0, textAlign: "center", minWidth: 80 }}>
                <span style={{
                    fontFamily: fonts.heading, fontSize: "1rem",
                    fontWeight: 700, color: t.accent,
                }}>
                    {date}
                </span>
            </div>
            <div style={{ flex: 1 }}>
                <h3 style={{
                    fontFamily: fonts.heading, fontSize: "1.1rem",
                    fontWeight: 600, marginBottom: 4, color: t.textPrimary,
                    margin: 0,
                }}>
                    {title}
                </h3>
                <p style={{
                    fontSize: "0.9rem", color: t.textSecondary,
                    margin: 0, fontFamily: fonts.body,
                }}>
                    {meta}
                </p>
            </div>
            <div style={{ flexShrink: 0, color: t.textMuted }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default function ComingSoon(props: Props) {
    const t = colors[props.theme]

    const items = [
        { date: props.item1Date, title: props.item1Title, meta: props.item1Meta },
        { date: props.item2Date, title: props.item2Title, meta: props.item2Meta },
        { date: props.item3Date, title: props.item3Title, meta: props.item3Meta },
    ].filter((item) => item.title)

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
                        fontWeight: 700, marginBottom: 16, lineHeight: 1.15, color: t.textPrimary,
                    }}>
                        {props.sectionTitle}
                    </h2>
                    <p style={{
                        fontSize: "1.1rem", color: t.textSecondary, maxWidth: 600,
                        margin: "0 auto", fontWeight: 300, fontFamily: fonts.body,
                    }}>
                        {props.sectionDesc}
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {items.map((item, i) => (
                        <ComingItem key={i} {...item} t={t} />
                    ))}
                </div>

                <div style={{ textAlign: "center", marginTop: 48 }}>
                    <a href={props.ctaLink} style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "transparent", color: t.accent,
                        border: `1px solid ${t.accent}`, padding: "12px 24px",
                        borderRadius: 12, fontSize: "0.9rem", fontWeight: 600,
                        textDecoration: "none", fontFamily: fonts.body,
                    }}>
                        {props.ctaText}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
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
    item1Meta: "De Bouli Lanners \u2022 Drame, Romance \u2022 1h39 \u2022 VOST",
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
    item1Date: { type: ControlType.String, title: "Film 1 — Date" },
    item1Title: { type: ControlType.String, title: "Film 1 — Titre" },
    item1Meta: { type: ControlType.String, title: "Film 1 — Meta" },
    item2Date: { type: ControlType.String, title: "Film 2 — Date" },
    item2Title: { type: ControlType.String, title: "Film 2 — Titre" },
    item2Meta: { type: ControlType.String, title: "Film 2 — Meta" },
    item3Date: { type: ControlType.String, title: "Film 3 — Date" },
    item3Title: { type: ControlType.String, title: "Film 3 — Titre" },
    item3Meta: { type: ControlType.String, title: "Film 3 — Meta" },
    ctaText: { type: ControlType.String, title: "CTA texte" },
    ctaLink: { type: ControlType.String, title: "CTA lien" },
})
