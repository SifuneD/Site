import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", border: "rgba(255,255,255,0.06)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

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
        <section style={{ padding: "120px 0", background: t.bgPrimary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: t.accent, marginBottom: 16, padding: "6px 16px", border: "1px solid rgba(194,54,54,0.25)", borderRadius: 100, background: "rgba(194,54,54,0.06)", fontFamily: fonts.body }}>{props.sectionTag}</span>
                    <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, color: t.textPrimary }}>{props.sectionTitle}</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(services.length, 4)}, 1fr)`, gap: 24 }}>
                    {services.map((s, i) => (
                        <div key={i} style={{ padding: "36px 28px", background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 20 }}>
                            <div style={{ width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14, background: t.accentGlow, color: t.accent, marginBottom: 20, fontSize: "1.5rem" }}>✦</div>
                            <h3 style={{ fontFamily: fonts.heading, fontSize: "1.15rem", fontWeight: 600, marginBottom: 12, color: t.textPrimary }}>{s.title}</h3>
                            <p style={{ fontSize: "0.9rem", color: t.textSecondary, lineHeight: 1.6, marginBottom: 20, fontFamily: fonts.body }}>{s.desc}</p>
                            <a href={s.link} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", fontWeight: 600, color: t.accent, textDecoration: "none", fontFamily: fonts.body }}>En savoir plus →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

Services.defaultProps = {
    theme: "dark", sectionTag: "Nos services", sectionTitle: "Plus qu'un cin\u00e9ma",
    s1Title: "Anniversaires", s1Desc: "Les mercredis et samedis apr\u00e8s-midi, organisez l'anniversaire de votre enfant au cin\u00e9ma. Projection + go\u00fbter, 10\u20AC par enfant.", s1Link: "/infos-pratiques",
    s2Title: "Scolaires", s2Desc: "S\u00e9ances scolaires toute l'ann\u00e9e. \u00c9cole et cin\u00e9ma, Coll\u00e8ge au cin\u00e9ma. 5\u20AC par \u00e9l\u00e8ve.", s2Link: "/scolaires",
    s3Title: "S\u00e9ances priv\u00e9es", s3Desc: "Toute l'ann\u00e9e, nous pouvons organiser des s\u00e9ances priv\u00e9es avec les films de notre catalogue.", s3Link: "/infos-pratiques",
    s4Title: "Accessibilit\u00e9", s4Desc: "2 salles accessibles aux personnes \u00e0 mobilit\u00e9 r\u00e9duite. Navette gratuite Balad'In.", s4Link: "/infos-pratiques",
}

addPropertyControls(Services, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" }, sectionTitle: { type: ControlType.String, title: "Titre" },
    s1Title: { type: ControlType.String, title: "Service 1" }, s1Desc: { type: ControlType.String, title: "S1 Desc" }, s1Link: { type: ControlType.String, title: "S1 Lien" },
    s2Title: { type: ControlType.String, title: "Service 2" }, s2Desc: { type: ControlType.String, title: "S2 Desc" }, s2Link: { type: ControlType.String, title: "S2 Lien" },
    s3Title: { type: ControlType.String, title: "Service 3" }, s3Desc: { type: ControlType.String, title: "S3 Desc" }, s3Link: { type: ControlType.String, title: "S3 Lien" },
    s4Title: { type: ControlType.String, title: "Service 4" }, s4Desc: { type: ControlType.String, title: "S4 Desc" }, s4Link: { type: ControlType.String, title: "S4 Lien" },
})
