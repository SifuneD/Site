import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", accent: "#c23636", border: "rgba(255,255,255,0.06)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", accent: "#b52e2e", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif" }

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Navbar(props) {
    const t = colors[props.theme]
    const links = [
        { text: props.link1Text, url: props.link1Url },
        { text: props.link2Text, url: props.link2Url },
        { text: props.link3Text, url: props.link3Url },
        { text: props.link4Text, url: props.link4Url },
        { text: props.link5Text, url: props.link5Url },
        { text: props.link6Text, url: props.link6Url },
    ].filter((l) => l.text)

    return (
        <header style={{ width: "100%", padding: "0 24px", background: props.theme === "dark" ? "rgba(10,10,15,0.85)" : "rgba(245,243,239,0.92)", backdropFilter: "blur(20px)", boxShadow: `0 1px 0 ${t.border}` }}>
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
                        <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.1, color: t.textPrimary }}>{props.logoName}</span>
                        <span style={{ fontSize: "0.7rem", color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500 }}>{props.logoSub}</span>
                    </div>
                </a>
                <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
                    {links.map((link, i) => (
                        <a key={i} href={link.url} style={{ fontSize: "0.875rem", fontWeight: 500, color: t.textSecondary, textDecoration: "none", fontFamily: fonts.body }}>{link.text}</a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

Navbar.defaultProps = {
    theme: "dark", logoName: "Alhambra", logoSub: "Cin\u00e9ma Calais",
    link1Text: "\u00C0 l'affiche", link1Url: "/a-laffiche",
    link2Text: "Horaires", link2Url: "/horaires",
    link3Text: "Prochainement", link3Url: "/prochainement",
    link4Text: "Le cin\u00e9ma", link4Url: "/le-cinema",
    link5Text: "Infos pratiques", link5Url: "/infos-pratiques",
    link6Text: "Scolaires", link6Url: "/scolaires",
}

addPropertyControls(Navbar, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    logoName: { type: ControlType.String, title: "Logo nom" },
    logoSub: { type: ControlType.String, title: "Logo sous-titre" },
    link1Text: { type: ControlType.String, title: "Lien 1" }, link1Url: { type: ControlType.String, title: "URL 1" },
    link2Text: { type: ControlType.String, title: "Lien 2" }, link2Url: { type: ControlType.String, title: "URL 2" },
    link3Text: { type: ControlType.String, title: "Lien 3" }, link3Url: { type: ControlType.String, title: "URL 3" },
    link4Text: { type: ControlType.String, title: "Lien 4" }, link4Url: { type: ControlType.String, title: "URL 4" },
    link5Text: { type: ControlType.String, title: "Lien 5" }, link5Url: { type: ControlType.String, title: "URL 5" },
    link6Text: { type: ControlType.String, title: "Lien 6" }, link6Url: { type: ControlType.String, title: "URL 6" },
})
