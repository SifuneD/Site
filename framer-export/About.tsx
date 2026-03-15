import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgSecondary: "#111118", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", border: "rgba(255,255,255,0.06)" },
    light: { bgSecondary: "#eae7e1", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function About(props) {
    const t = colors[props.theme]
    const labels = [{ title: props.label1Title, sub: props.label1Sub }, { title: props.label2Title, sub: props.label2Sub }, { title: props.label3Title, sub: props.label3Sub }]
    const stats = [{ number: props.stat1Number, label: props.stat1Label }, { number: props.stat2Number, label: props.stat2Label }, { number: props.stat3Number, label: props.stat3Label }]

    return (
        <section style={{ padding: "120px 0", background: t.bgSecondary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                    <div>
                        <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: t.accent, marginBottom: 16, padding: "6px 16px", border: "1px solid rgba(194,54,54,0.25)", borderRadius: 100, background: "rgba(194,54,54,0.06)", fontFamily: fonts.body }}>{props.sectionTag}</span>
                        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.15, color: t.textPrimary }}>{props.titleLine1}<br /><span style={{ color: t.accent }}>{props.titleLine2}</span></h2>
                        <p style={{ fontSize: "1.05rem", color: t.textSecondary, lineHeight: 1.8, marginBottom: 32, fontFamily: fonts.body }}>{props.description}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                            {labels.map((label, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: t.bgCard, borderRadius: 12, border: `1px solid ${t.border}` }}>
                                    <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: t.accentGlow, color: t.accent, flexShrink: 0, fontSize: "1.2rem" }}>✦</div>
                                    <div>
                                        <strong style={{ display: "block", fontFamily: fonts.heading, fontSize: "0.95rem", color: t.textPrimary }}>{label.title}</strong>
                                        <span style={{ fontSize: "0.8rem", color: t.textMuted }}>{label.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href={props.ctaLink} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 28px", borderRadius: 12, fontSize: "0.95rem", fontWeight: 600, fontFamily: fonts.body, background: t.accent, color: "#fff", textDecoration: "none" }}>{props.ctaText}</a>
                    </div>
                    <div>
                        <div style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${t.border}`, background: t.bgCard, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {props.cinemaImage ? <img src={props.cinemaImage} alt="Cin\u00e9ma" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div style={{ textAlign: "center", color: t.textMuted, padding: 40 }}><p style={{ fontFamily: fonts.display, fontSize: "1.25rem", color: t.textSecondary }}>Cin\u00e9ma Alhambra</p><span style={{ fontSize: "0.85rem" }}>2 rue Jean Jaur\u00e8s, Calais</span></div>}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
                            {stats.map((stat, i) => (
                                <div key={i} style={{ textAlign: "center", padding: "20px 16px", background: t.bgCard, borderRadius: 12, border: `1px solid ${t.border}` }}>
                                    <span style={{ display: "block", fontFamily: fonts.display, fontSize: "2rem", fontWeight: 700, color: t.accent, lineHeight: 1, marginBottom: 4 }}>{stat.number}</span>
                                    <span style={{ fontSize: "0.8rem", color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.label}</span>
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
    theme: "dark", sectionTag: "Notre histoire", titleLine1: "Le Cin\u00e9ma", titleLine2: "Alhambra",
    description: "Situ\u00e9 au coeur de Calais, le Cin\u00e9ma Alhambra est un cin\u00e9ma de proximit\u00e9 class\u00e9 Art et Essai avec les labels Recherche-D\u00e9couverte, Patrimoine-R\u00e9pertoire et Jeune Public.",
    label1Title: "Recherche", label1Sub: "D\u00e9couverte", label2Title: "Patrimoine", label2Sub: "R\u00e9pertoire", label3Title: "Jeune Public", label3Sub: "Familles",
    stat1Number: "3", stat1Label: "Salles", stat2Number: "Art", stat2Label: "& Essai", stat3Number: "3", stat3Label: "Labels",
    ctaText: "En savoir plus", ctaLink: "/le-cinema", cinemaImage: "",
}

addPropertyControls(About, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" }, titleLine1: { type: ControlType.String, title: "Titre L1" }, titleLine2: { type: ControlType.String, title: "Titre L2" },
    description: { type: ControlType.String, title: "Description" },
    label1Title: { type: ControlType.String, title: "Label 1" }, label1Sub: { type: ControlType.String, title: "Label 1 sous" },
    label2Title: { type: ControlType.String, title: "Label 2" }, label2Sub: { type: ControlType.String, title: "Label 2 sous" },
    label3Title: { type: ControlType.String, title: "Label 3" }, label3Sub: { type: ControlType.String, title: "Label 3 sous" },
    stat1Number: { type: ControlType.String, title: "Stat 1" }, stat1Label: { type: ControlType.String, title: "Stat 1 label" },
    stat2Number: { type: ControlType.String, title: "Stat 2" }, stat2Label: { type: ControlType.String, title: "Stat 2 label" },
    stat3Number: { type: ControlType.String, title: "Stat 3" }, stat3Label: { type: ControlType.String, title: "Stat 3 label" },
    ctaText: { type: ControlType.String, title: "CTA" }, ctaLink: { type: ControlType.String, title: "CTA lien" },
    cinemaImage: { type: ControlType.Image, title: "Photo" },
})
