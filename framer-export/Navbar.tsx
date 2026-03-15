import React, { useState, useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", accent: "#c23636", border: "rgba(255,255,255,0.06)", overlay: "rgba(10,10,15,0.92)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", accent: "#b52e2e", border: "rgba(0,0,0,0.08)", overlay: "rgba(245,243,239,0.96)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif" }

const uid = "alh-nav"

const css = (t: any, theme: string) => `
    .${uid}-desktop { display: flex; }
    .${uid}-burger { display: none; }
    .${uid}-mobile-overlay { display: none; }

    .${uid}-link {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${t.textSecondary};
        text-decoration: none;
        font-family: ${fonts.body};
        position: relative;
        transition: color 0.3s ease;
    }
    .${uid}-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: ${t.accent};
        transition: width 0.3s ease;
    }
    .${uid}-link:hover {
        color: ${t.textPrimary};
    }
    .${uid}-link:hover::after {
        width: 100%;
    }

    /* Burger button */
    .${uid}-burger {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        background: none;
        border: 1px solid ${t.border};
        border-radius: 8px;
        cursor: pointer;
        gap: 5px;
        padding: 0;
        z-index: 1001;
        position: relative;
        transition: border-color 0.3s ease;
    }
    .${uid}-burger:hover {
        border-color: ${t.accent};
    }
    .${uid}-burger span {
        display: block;
        width: 20px;
        height: 2px;
        background: ${t.textPrimary};
        border-radius: 2px;
        transition: transform 0.35s ease, opacity 0.25s ease, background 0.3s ease;
        transform-origin: center;
    }
    .${uid}-burger.open span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
        background: ${t.accent};
    }
    .${uid}-burger.open span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
    }
    .${uid}-burger.open span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
        background: ${t.accent};
    }

    /* Mobile overlay */
    .${uid}-mobile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: ${t.overlay};
        backdrop-filter: blur(24px);
        z-index: 1000;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
    }
    .${uid}-mobile-overlay.open {
        opacity: 1;
        pointer-events: auto;
    }
    .${uid}-mobile-link {
        font-family: ${fonts.display};
        font-size: 1.75rem;
        font-weight: 600;
        color: ${t.textPrimary};
        text-decoration: none;
        padding: 16px 32px;
        position: relative;
        opacity: 0;
        transform: translateY(20px);
        transition: color 0.3s ease, opacity 0.45s ease, transform 0.45s ease;
    }
    .${uid}-mobile-overlay.open .${uid}-mobile-link {
        opacity: 1;
        transform: translateY(0);
    }
    .${uid}-mobile-link:hover {
        color: ${t.accent};
    }
    .${uid}-mobile-link::after {
        content: '';
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: ${t.accent};
        transition: width 0.3s ease;
    }
    .${uid}-mobile-link:hover::after {
        width: 40%;
    }

    /* Stagger delays for mobile links */
    .${uid}-mobile-link:nth-child(1) { transition-delay: 0.08s; }
    .${uid}-mobile-link:nth-child(2) { transition-delay: 0.14s; }
    .${uid}-mobile-link:nth-child(3) { transition-delay: 0.20s; }
    .${uid}-mobile-link:nth-child(4) { transition-delay: 0.26s; }
    .${uid}-mobile-link:nth-child(5) { transition-delay: 0.32s; }
    .${uid}-mobile-link:nth-child(6) { transition-delay: 0.38s; }

    @media (max-width: 900px) {
        .${uid}-desktop { display: none !important; }
        .${uid}-burger { display: flex !important; }
        .${uid}-mobile-overlay { display: flex !important; }
    }
`

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const t = colors[props.theme] || colors.dark

    const links = [
        { text: props.link1Text, url: props.link1Url },
        { text: props.link2Text, url: props.link2Url },
        { text: props.link3Text, url: props.link3Url },
        { text: props.link4Text, url: props.link4Url },
        { text: props.link5Text, url: props.link5Url },
        { text: props.link6Text, url: props.link6Url },
    ].filter((l) => l.text)

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "" }
    }, [menuOpen])

    return (
        <>
            <style>{css(t, props.theme)}</style>
            <header style={{
                width: "100%",
                padding: "0 24px",
                background: props.theme === "dark" ? "rgba(10,10,15,0.85)" : "rgba(245,243,239,0.92)",
                backdropFilter: "blur(20px)",
                boxShadow: `0 1px 0 ${t.border}`,
                position: "relative",
                zIndex: 1002,
            }}>
                <div style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 80,
                }}>
                    {/* Logo */}
                    <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit", zIndex: 1002 }}>
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

                    {/* Desktop nav */}
                    <nav className={`${uid}-desktop`} style={{ alignItems: "center", gap: 32 }}>
                        {links.map((link, i) => (
                            <a key={i} href={link.url} className={`${uid}-link`}>{link.text}</a>
                        ))}
                    </nav>

                    {/* Burger button */}
                    <button
                        className={`${uid}-burger${menuOpen ? " open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* Mobile overlay */}
            <div className={`${uid}-mobile-overlay${menuOpen ? " open" : ""}`}>
                {links.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        className={`${uid}-mobile-link`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        </>
    )
}

Navbar.defaultProps = {
    theme: "dark", logoName: "Alhambra", logoSub: "Cinéma Calais",
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
    link1Text: { type: ControlType.String, title: "Lien 1" }, link1Url: { type: ControlType.String, title: "URL 1" },
    link2Text: { type: ControlType.String, title: "Lien 2" }, link2Url: { type: ControlType.String, title: "URL 2" },
    link3Text: { type: ControlType.String, title: "Lien 3" }, link3Url: { type: ControlType.String, title: "URL 3" },
    link4Text: { type: ControlType.String, title: "Lien 4" }, link4Url: { type: ControlType.String, title: "URL 4" },
    link5Text: { type: ControlType.String, title: "Lien 5" }, link5Url: { type: ControlType.String, title: "URL 5" },
    link6Text: { type: ControlType.String, title: "Lien 6" }, link6Url: { type: ControlType.String, title: "URL 6" },
})
