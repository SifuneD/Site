import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", border: "rgba(255,255,255,0.06)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function ComingSoon(props) {
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
                    <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: t.accent, marginBottom: 16, padding: "6px 16px", border: "1px solid rgba(194,54,54,0.25)", borderRadius: 100, background: "rgba(194,54,54,0.06)", fontFamily: fonts.body }}>{props.sectionTag}</span>
                    <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.15, color: t.textPrimary }}>{props.sectionTitle}</h2>
                    <p style={{ fontSize: "1.1rem", color: t.textSecondary, maxWidth: 600, margin: "0 auto", fontWeight: 300, fontFamily: fonts.body }}>{props.sectionDesc}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {items.map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 24, padding: "24px 32px", background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16 }}>
                            <div style={{ flexShrink: 0, textAlign: "center", minWidth: 80 }}>
                                <span style={{ fontFamily: fonts.heading, fontSize: "1rem", fontWeight: 700, color: t.accent }}>{item.date}</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontFamily: fonts.heading, fontSize: "1.1rem", fontWeight: 600, marginBottom: 4, color: t.textPrimary, margin: 0 }}>{item.title}</h3>
                                <p style={{ fontSize: "0.9rem", color: t.textSecondary, margin: 0, fontFamily: fonts.body }}>{item.meta}</p>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: t.textMuted }}><path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: 48 }}>
                    <a href={props.ctaLink} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: t.accent, border: `1px solid ${t.accent}`, padding: "12px 24px", borderRadius: 12, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", fontFamily: fonts.body }}>{props.ctaText}</a>
                </div>
            </div>
        </section>
    )
}

ComingSoon.defaultProps = {
    theme: "dark", sectionTag: "Bient\u00f4t", sectionTitle: "Prochainement", sectionDesc: "Les films qui arrivent bient\u00f4t sur nos \u00e9crans.",
    item1Date: "18 mars", item1Title: "L'Ombre d'un mensonge", item1Meta: "De Bouli Lanners \u2022 Drame, Romance \u2022 1h39 \u2022 VOST",
    item2Date: "", item2Title: "", item2Meta: "", item3Date: "", item3Title: "", item3Meta: "",
    ctaText: "Voir tous les films \u00e0 venir", ctaLink: "/prochainement",
}

addPropertyControls(ComingSoon, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" }, sectionTitle: { type: ControlType.String, title: "Titre" }, sectionDesc: { type: ControlType.String, title: "Description" },
    item1Date: { type: ControlType.String, title: "Film 1 Date" }, item1Title: { type: ControlType.String, title: "Film 1 Titre" }, item1Meta: { type: ControlType.String, title: "Film 1 Meta" },
    item2Date: { type: ControlType.String, title: "Film 2 Date" }, item2Title: { type: ControlType.String, title: "Film 2 Titre" }, item2Meta: { type: ControlType.String, title: "Film 2 Meta" },
    item3Date: { type: ControlType.String, title: "Film 3 Date" }, item3Title: { type: ControlType.String, title: "Film 3 Titre" }, item3Meta: { type: ControlType.String, title: "Film 3 Meta" },
    ctaText: { type: ControlType.String, title: "CTA texte" }, ctaLink: { type: ControlType.String, title: "CTA lien" },
})
