import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", borderHover: "rgba(255,255,255,0.12)" },
    light: { bgPrimary: "#f5f3ef", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", borderHover: "rgba(0,0,0,0.15)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif" }

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Hero(props) {
    const { badgeText, titleLine1, titleLine2, subtitle, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink, theme } = props
    const t = colors[theme]
    return (
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: t.bgPrimary, width: "100%" }}>
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${t.accentGlow}, transparent 60%), linear-gradient(180deg, ${t.bgPrimary}, ${t.bgPrimary})` }} />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px", maxWidth: 900 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", border: `1px solid ${t.borderHover}`, borderRadius: 100, fontSize: "0.8rem", fontWeight: 500, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 32, fontFamily: fonts.body }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.accent }} />
                    {badgeText}
                </div>
                <h1 style={{ fontFamily: fonts.display, fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
                    <span style={{ display: "block", fontSize: "clamp(3rem, 8vw, 6.5rem)", color: t.textPrimary }}>{titleLine1}</span>
                    <span style={{ display: "block", fontSize: "clamp(3rem, 8vw, 6.5rem)", color: t.accent, fontStyle: "italic" }}>{titleLine2}</span>
                </h1>
                <p style={{ fontSize: "1.15rem", color: t.textSecondary, lineHeight: 1.7, marginBottom: 48, fontWeight: 300, fontFamily: fonts.body }}>{subtitle}</p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                    <a href={primaryBtnLink} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 28px", borderRadius: 12, fontSize: "0.95rem", fontWeight: 600, fontFamily: fonts.body, background: t.accent, color: "#fff", textDecoration: "none" }}>{primaryBtnText}</a>
                    <a href={secondaryBtnLink} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 28px", borderRadius: 12, fontSize: "0.95rem", fontWeight: 600, fontFamily: fonts.body, background: "rgba(255,255,255,0.06)", color: t.textPrimary, border: `1px solid ${t.borderHover}`, textDecoration: "none" }}>{secondaryBtnText}</a>
                </div>
            </div>
        </section>
    )
}

Hero.defaultProps = {
    badgeText: "Art et Essai \u2014 Calais Centre-Ville", titleLine1: "LE cin\u00e9ma", titleLine2: "de Calais",
    subtitle: "De proximit\u00e9. De qualit\u00e9. Recherche \u2022 Patrimoine \u2022 R\u00e9pertoire \u2022 Jeune Public",
    primaryBtnText: "Voir le programme", primaryBtnLink: "/a-laffiche",
    secondaryBtnText: "Horaires des s\u00e9ances", secondaryBtnLink: "/horaires", theme: "dark",
}

addPropertyControls(Hero, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    badgeText: { type: ControlType.String, title: "Badge" },
    titleLine1: { type: ControlType.String, title: "Titre ligne 1" },
    titleLine2: { type: ControlType.String, title: "Titre ligne 2" },
    subtitle: { type: ControlType.String, title: "Sous-titre" },
    primaryBtnText: { type: ControlType.String, title: "Bouton principal" },
    primaryBtnLink: { type: ControlType.String, title: "Lien principal" },
    secondaryBtnText: { type: ControlType.String, title: "Bouton secondaire" },
    secondaryBtnLink: { type: ControlType.String, title: "Lien secondaire" },
})
