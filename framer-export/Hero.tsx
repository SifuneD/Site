import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", borderHover: "rgba(255,255,255,0.12)", navBg: "rgba(10,10,15,0.85)", border: "rgba(255,255,255,0.06)" },
    light: { bgPrimary: "#f5f3ef", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", borderHover: "rgba(0,0,0,0.15)", navBg: "rgba(245,243,239,0.92)", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif" }

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Hero(props) {
    const { badgeText, titleLine1, titleLine2, subtitle, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink, theme, logoName, logoSub, link1Text, link1Url, link2Text, link2Url, link3Text, link3Url, link4Text, link4Url, link5Text, link5Url, link6Text, link6Url } = props
    const t = colors[theme]
    const links = [
        { text: link1Text, url: link1Url },
        { text: link2Text, url: link2Url },
        { text: link3Text, url: link3Url },
        { text: link4Text, url: link4Url },
        { text: link5Text, url: link5Url },
        { text: link6Text, url: link6Url },
    ].filter((l) => l.text)

    return (
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", background: t.bgPrimary, width: "100%" }}>
            {/* Navbar */}
            <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, padding: "0 24px", background: t.navBg, backdropFilter: "blur(20px)", boxShadow: `0 1px 0 ${t.border}` }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
                    <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}>
                        <svg viewBox="0 0 48 48" fill="none" width="40" height="40" style={{ color: t.accent }}>
                            <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
                            <circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="12" cy="24" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="12" cy="34" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="36" cy="14" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="36" cy="24" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="36" cy="34" r="3" fill="currentColor" opacity="0.6" />
                            <rect x="18" y="14" width="12" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.1, color: t.textPrimary }}>{logoName}</span>
                            <span style={{ fontSize: "0.7rem", color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500 }}>{logoSub}</span>
                        </div>
                    </a>
                    <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
                        {links.map((link, i) => (
                            <a key={i} href={link.url} style={{ fontSize: "0.875rem", fontWeight: 500, color: t.textSecondary, textDecoration: "none", fontFamily: fonts.body }}>{link.text}</a>
                        ))}
                    </nav>
                </div>
            </header>
            {/* Background glow */}
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${t.accentGlow}, transparent 60%), linear-gradient(180deg, ${t.bgPrimary}, ${t.bgPrimary})` }} />
            {/* Hero content */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            </div>
        </section>
    )
}

Hero.defaultProps = {
    theme: "dark",
    logoName: "Alhambra", logoSub: "Cin\u00e9ma Calais",
    link1Text: "\u00C0 l'affiche", link1Url: "/a-laffiche",
    link2Text: "Horaires", link2Url: "/horaires",
    link3Text: "Prochainement", link3Url: "/prochainement",
    link4Text: "Le cin\u00e9ma", link4Url: "/le-cinema",
    link5Text: "Infos pratiques", link5Url: "/infos-pratiques",
    link6Text: "Scolaires", link6Url: "/scolaires",
    badgeText: "Art et Essai \u2014 Calais Centre-Ville", titleLine1: "LE cin\u00e9ma", titleLine2: "de Calais",
    subtitle: "De proximit\u00e9. De qualit\u00e9. Recherche \u2022 Patrimoine \u2022 R\u00e9pertoire \u2022 Jeune Public",
    primaryBtnText: "Voir le programme", primaryBtnLink: "/a-laffiche",
    secondaryBtnText: "Horaires des s\u00e9ances", secondaryBtnLink: "/horaires",
}

addPropertyControls(Hero, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    logoName: { type: ControlType.String, title: "Logo nom" },
    logoSub: { type: ControlType.String, title: "Logo sous-titre" },
    link1Text: { type: ControlType.String, title: "Lien 1" }, link1Url: { type: ControlType.String, title: "URL 1" },
    link2Text: { type: ControlType.String, title: "Lien 2" }, link2Url: { type: ControlType.String, title: "URL 2" },
    link3Text: { type: ControlType.String, title: "Lien 3" }, link3Url: { type: ControlType.String, title: "URL 3" },
    link4Text: { type: ControlType.String, title: "Lien 4" }, link4Url: { type: ControlType.String, title: "URL 4" },
    link5Text: { type: ControlType.String, title: "Lien 5" }, link5Url: { type: ControlType.String, title: "URL 5" },
    link6Text: { type: ControlType.String, title: "Lien 6" }, link6Url: { type: ControlType.String, title: "URL 6" },
    badgeText: { type: ControlType.String, title: "Badge" },
    titleLine1: { type: ControlType.String, title: "Titre ligne 1" },
    titleLine2: { type: ControlType.String, title: "Titre ligne 2" },
    subtitle: { type: ControlType.String, title: "Sous-titre" },
    primaryBtnText: { type: ControlType.String, title: "Bouton principal" },
    primaryBtnLink: { type: ControlType.String, title: "Lien principal" },
    secondaryBtnText: { type: ControlType.String, title: "Bouton secondaire" },
    secondaryBtnLink: { type: ControlType.String, title: "Lien secondaire" },
})
