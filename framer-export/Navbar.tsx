// Navbar — Framer Code Component
// Editable: logo text, navigation links

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    theme: "dark" | "light"
    logoName: string
    logoSub: string
    link1Text: string
    link1Url: string
    link2Text: string
    link2Url: string
    link3Text: string
    link3Url: string
    link4Text: string
    link4Url: string
    link5Text: string
    link5Url: string
    link6Text: string
    link6Url: string
}

export default function Navbar(props: Props) {
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
        <header style={{
            position: "relative", width: "100%", padding: "0 24px",
            background: props.theme === "dark" ? "rgba(10,10,15,0.85)" : "rgba(245,243,239,0.92)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            boxShadow: `0 1px 0 ${t.border}`,
        }}>
            <div style={{
                maxWidth: 1200, margin: "0 auto",
                display: "flex", alignItems: "center",
                justifyContent: "space-between", height: 80,
            }}>
                {/* Logo */}
                <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}>
                    <div style={{ width: 40, height: 40, color: t.accent }}>
                        <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
                            <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
                            <circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="12" cy="24" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="12" cy="34" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="36" cy="14" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="36" cy="24" r="3" fill="currentColor" opacity="0.6" />
                            <circle cx="36" cy="34" r="3" fill="currentColor" opacity="0.6" />
                            <rect x="18" y="14" width="12" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{
                            fontFamily: fonts.display, fontWeight: 700,
                            fontSize: "1.25rem", letterSpacing: "0.02em",
                            lineHeight: 1.1, color: t.textPrimary,
                        }}>
                            {props.logoName}
                        </span>
                        <span style={{
                            fontSize: "0.7rem", color: t.textSecondary,
                            textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500,
                        }}>
                            {props.logoSub}
                        </span>
                    </div>
                </a>

                {/* Nav Links */}
                <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
                    {links.map((link, i) => (
                        <a key={i} href={link.url} style={{
                            fontSize: "0.875rem", fontWeight: 500,
                            color: t.textSecondary, textDecoration: "none",
                            letterSpacing: "0.01em", fontFamily: fonts.body,
                        }}>
                            {link.text}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

Navbar.defaultProps = {
    theme: "dark",
    logoName: "Alhambra",
    logoSub: "Cinéma Calais",
    link1Text: "À l'affiche", link1Url: "/a-laffiche",
    link2Text: "Horaires", link2Url: "/horaires",
    link3Text: "Prochainement", link3Url: "/prochainement",
    link4Text: "Le cinéma", link4Url: "/le-cinema",
    link5Text: "Infos pratiques", link5Url: "/infos-pratiques",
    link6Text: "Scolaires", link6Url: "/scolaires",
}

addPropertyControls(Navbar, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    logoName: { type: ControlType.String, title: "Logo nom" },
    logoSub: { type: ControlType.String, title: "Logo sous-titre" },
    link1Text: { type: ControlType.String, title: "Lien 1" },
    link1Url: { type: ControlType.String, title: "URL 1" },
    link2Text: { type: ControlType.String, title: "Lien 2" },
    link2Url: { type: ControlType.String, title: "URL 2" },
    link3Text: { type: ControlType.String, title: "Lien 3" },
    link3Url: { type: ControlType.String, title: "URL 3" },
    link4Text: { type: ControlType.String, title: "Lien 4" },
    link4Url: { type: ControlType.String, title: "URL 4" },
    link5Text: { type: ControlType.String, title: "Lien 5" },
    link5Url: { type: ControlType.String, title: "URL 5" },
    link6Text: { type: ControlType.String, title: "Lien 6" },
    link6Url: { type: ControlType.String, title: "URL 6" },
})
