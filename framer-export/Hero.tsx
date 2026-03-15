import React from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: {
        bgPrimary: "#0a0a0f",
        textPrimary: "#f0ece4",
        textSecondary: "#9a9aad",
        textMuted: "#5e5e72",
        accent: "#c23636",
        accentLight: "#e04444",
        accentGlow: "rgba(194,54,54,0.15)",
        borderHover: "rgba(255,255,255,0.12)",
        border: "rgba(255,255,255,0.06)",
        navBg: "rgba(10,10,15,0.85)",
        secondaryBtnBg: "rgba(255,255,255,0.06)",
        secondaryBtnHoverBg: "rgba(255,255,255,0.1)",
        secondaryBtnHoverBorder: "rgba(255,255,255,0.2)",
        badgeBg: "rgba(255,255,255,0.02)",
        filmStripOpacity: "0.04",
    },
    light: {
        bgPrimary: "#f5f3ef",
        textPrimary: "#1a1a2e",
        textSecondary: "#555566",
        textMuted: "#8a8a9a",
        accent: "#b52e2e",
        accentLight: "#d03a3a",
        accentGlow: "rgba(181,46,46,0.08)",
        borderHover: "rgba(0,0,0,0.15)",
        border: "rgba(0,0,0,0.08)",
        navBg: "rgba(245,243,239,0.92)",
        secondaryBtnBg: "rgba(0,0,0,0.06)",
        secondaryBtnHoverBg: "rgba(0,0,0,0.1)",
        secondaryBtnHoverBorder: "rgba(0,0,0,0.2)",
        badgeBg: "rgba(0,0,0,0.02)",
        filmStripOpacity: "0.06",
    },
}

const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}

function getCssString(t: typeof colors.dark) {
    return `
@keyframes alh-hero-pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
}

@keyframes alh-hero-scroll-pulse {
    0%, 100% { opacity: 1; height: 48px; }
    50% { opacity: 0.3; height: 32px; }
}

@keyframes alh-hero-fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.alh-hero-root {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.alh-hero-root *, .alh-hero-root *::before, .alh-hero-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.alh-hero-root a {
    color: inherit;
    text-decoration: none;
}

/* --- Navbar --- */
.alh-hero-navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 0 24px;
    background: ${t.navBg};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 ${t.border};
}

.alh-hero-navbar-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

.alh-hero-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: inherit;
}

.alh-hero-logo-icon {
    width: 40px;
    height: 40px;
    color: ${t.accent};
    flex-shrink: 0;
}

.alh-hero-logo-text {
    display: flex;
    flex-direction: column;
}

.alh-hero-logo-name {
    font-family: ${fonts.display};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.1;
    letter-spacing: 0.02em;
    color: ${t.textPrimary};
}

.alh-hero-logo-sub {
    font-size: 0.7rem;
    color: ${t.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 500;
}

.alh-hero-nav {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-left: auto;
    margin-right: auto;
}

.alh-hero-nav-link {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${t.textSecondary};
    text-decoration: none;
    font-family: ${fonts.body};
    position: relative;
    transition: color 0.3s ease;
    letter-spacing: 0.01em;
    padding-bottom: 4px;
}

.alh-hero-nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${t.accent};
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.alh-hero-nav-link:hover {
    color: ${t.textPrimary};
}

.alh-hero-nav-link:hover::after {
    width: 100%;
}

/* --- Background --- */
.alh-hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.alh-hero-gradient {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse 80% 60% at 50% 40%, ${t.accentGlow} 0%, transparent 60%),
        radial-gradient(ellipse 60% 80% at 20% 80%, ${t.accent === "#c23636" ? "rgba(194,54,54,0.05)" : "rgba(181,46,46,0.04)"} 0%, transparent 50%),
        linear-gradient(180deg, ${t.bgPrimary} 0%, ${t.bgPrimary}cc 50%, ${t.bgPrimary} 100%);
}

/* --- Film Strips --- */
.alh-hero-film-strip {
    position: absolute;
    top: 0;
    width: 48px;
    height: 100%;
    opacity: ${t.filmStripOpacity};
    background:
        repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 8px,
            ${t.textPrimary} 8px,
            ${t.textPrimary} 10px,
            transparent 10px,
            transparent 40px
        );
}

.alh-hero-film-strip::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
        repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 12px,
            ${t.textPrimary} 12px,
            ${t.textPrimary} 28px,
            transparent 28px,
            transparent 40px
        );
    opacity: 0.3;
}

.alh-hero-film-strip-left {
    left: 5%;
}

.alh-hero-film-strip-right {
    right: 5%;
}

/* --- Hero Content --- */
.alh-hero-content-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.alh-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 0 24px;
    max-width: 900px;
}

.alh-hero-content.alh-hero-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.alh-hero-content.alh-hero-visible {
    opacity: 1;
    transform: translateY(0);
}

/* --- Badge --- */
.alh-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border: 1px solid ${t.borderHover};
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${t.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 32px;
    background: ${t.badgeBg};
    font-family: ${fonts.body};
}

.alh-hero-badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${t.accent};
    animation: alh-hero-pulse-dot 2s ease-in-out infinite;
    flex-shrink: 0;
}

/* --- Title --- */
.alh-hero-title {
    font-family: ${fonts.display};
    font-weight: 900;
    line-height: 1.05;
    margin-bottom: 24px;
}

.alh-hero-title-line {
    display: block;
    font-size: clamp(3rem, 8vw, 6.5rem);
    color: ${t.textPrimary};
}

.alh-hero-title-accent {
    display: block;
    font-size: clamp(3rem, 8vw, 6.5rem);
    color: ${t.accent};
    font-style: italic;
}

/* --- Subtitle --- */
.alh-hero-subtitle {
    font-size: 1.15rem;
    color: ${t.textSecondary};
    line-height: 1.7;
    margin-bottom: 48px;
    font-weight: 300;
    font-family: ${fonts.body};
}

/* --- Actions --- */
.alh-hero-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

.alh-hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: ${fonts.body};
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
}

.alh-hero-btn-primary {
    background: ${t.accent};
    color: #fff;
}

.alh-hero-btn-primary:hover {
    background: ${t.accentLight};
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(194, 54, 54, 0.35);
}

.alh-hero-btn-secondary {
    background: ${t.secondaryBtnBg};
    color: ${t.textPrimary};
    border: 1px solid ${t.borderHover};
}

.alh-hero-btn-secondary:hover {
    background: ${t.secondaryBtnHoverBg};
    border-color: ${t.secondaryBtnHoverBorder};
    transform: translateY(-2px);
}

/* --- Scroll Indicator --- */
.alh-hero-scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: ${t.textMuted};
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-family: ${fonts.body};
    z-index: 1;
}

.alh-hero-scroll-line {
    width: 1px;
    height: 48px;
    background: linear-gradient(180deg, ${t.accent} 0%, transparent 100%);
    animation: alh-hero-scroll-pulse 2s ease-in-out infinite;
}

/* --- Media Queries --- */
@media (max-width: 1024px) {
    .alh-hero-nav {
        display: none;
    }
}

@media (max-width: 768px) {
    .alh-hero-title-line,
    .alh-hero-title-accent {
        font-size: clamp(2.2rem, 7vw, 4rem);
    }

    .alh-hero-actions {
        flex-direction: column;
        align-items: center;
    }

    .alh-hero-btn {
        width: 100%;
        max-width: 320px;
        justify-content: center;
    }

    .alh-hero-subtitle {
        font-size: 1rem;
        margin-bottom: 36px;
    }

    .alh-hero-badge {
        font-size: 0.7rem;
        padding: 6px 16px;
    }

    .alh-hero-film-strip {
        display: none;
    }

    .alh-hero-scroll-indicator {
        bottom: 24px;
    }
}

@media (max-width: 480px) {
    .alh-hero-title-line,
    .alh-hero-title-accent {
        font-size: clamp(1.8rem, 9vw, 3rem);
    }

    .alh-hero-subtitle {
        font-size: 0.9rem;
        margin-bottom: 28px;
    }

    .alh-hero-badge {
        font-size: 0.65rem;
        padding: 6px 12px;
        letter-spacing: 0.08em;
    }

    .alh-hero-btn {
        padding: 12px 24px;
        font-size: 0.9rem;
    }

    .alh-hero-navbar-inner {
        height: 64px;
    }

    .alh-hero-logo-name {
        font-size: 1.1rem;
    }

    .alh-hero-logo-sub {
        font-size: 0.6rem;
    }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Hero(props) {
    const {
        theme,
        logoName,
        logoSub,
        link1Text,
        link1Url,
        link2Text,
        link2Url,
        link3Text,
        link3Url,
        link4Text,
        link4Url,
        link5Text,
        link5Url,
        link6Text,
        link6Url,
        badgeText,
        titleLine1,
        titleLine2,
        subtitle,
        primaryBtnText,
        primaryBtnLink,
        secondaryBtnText,
        secondaryBtnLink,
    } = props

    const t = colors[theme] || colors.dark
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const el = contentRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-hero-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15 }
        )

        observer.observe(el)

        return () => {
            observer.disconnect()
        }
    }, [])

    const links = [
        { text: link1Text, url: link1Url },
        { text: link2Text, url: link2Url },
        { text: link3Text, url: link3Url },
        { text: link4Text, url: link4Url },
        { text: link5Text, url: link5Url },
        { text: link6Text, url: link6Url },
    ].filter((l) => l.text)

    const cssString = getCssString(t)

    return (
        <section
            className="alh-hero-root"
            style={{ background: t.bgPrimary, color: t.textPrimary }}
        >
            <style>{cssString}</style>

            {/* Navbar */}
            <header className="alh-hero-navbar">
                <div className="alh-hero-navbar-inner">
                    <a href="/" className="alh-hero-logo">
                        <svg
                            className="alh-hero-logo-icon"
                            viewBox="0 0 48 48"
                            fill="none"
                        >
                            <rect
                                x="4"
                                y="8"
                                width="40"
                                height="32"
                                rx="4"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            />
                            <circle
                                cx="12"
                                cy="14"
                                r="3"
                                fill="currentColor"
                                opacity="0.6"
                            />
                            <circle
                                cx="12"
                                cy="24"
                                r="3"
                                fill="currentColor"
                                opacity="0.6"
                            />
                            <circle
                                cx="12"
                                cy="34"
                                r="3"
                                fill="currentColor"
                                opacity="0.6"
                            />
                            <circle
                                cx="36"
                                cy="14"
                                r="3"
                                fill="currentColor"
                                opacity="0.6"
                            />
                            <circle
                                cx="36"
                                cy="24"
                                r="3"
                                fill="currentColor"
                                opacity="0.6"
                            />
                            <circle
                                cx="36"
                                cy="34"
                                r="3"
                                fill="currentColor"
                                opacity="0.6"
                            />
                            <rect
                                x="18"
                                y="14"
                                width="12"
                                height="20"
                                rx="1"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                        <div className="alh-hero-logo-text">
                            <span className="alh-hero-logo-name">
                                {logoName}
                            </span>
                            <span className="alh-hero-logo-sub">
                                {logoSub}
                            </span>
                        </div>
                    </a>
                    <nav className="alh-hero-nav">
                        {links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                className="alh-hero-nav-link"
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Background */}
            <div className="alh-hero-bg">
                <div className="alh-hero-gradient" />
                <div className="alh-hero-film-strip alh-hero-film-strip-left" />
                <div className="alh-hero-film-strip alh-hero-film-strip-right" />
            </div>

            {/* Hero Content */}
            <div className="alh-hero-content-wrapper">
                <div
                    ref={contentRef}
                    className="alh-hero-content alh-hero-reveal"
                >
                    <div className="alh-hero-badge">
                        <span className="alh-hero-badge-dot" />
                        {badgeText}
                    </div>
                    <h1 className="alh-hero-title">
                        <span className="alh-hero-title-line">
                            {titleLine1}
                        </span>
                        <span className="alh-hero-title-accent">
                            {titleLine2}
                        </span>
                    </h1>
                    <p className="alh-hero-subtitle">{subtitle}</p>
                    <div className="alh-hero-actions">
                        <a
                            href={primaryBtnLink}
                            className="alh-hero-btn alh-hero-btn-primary"
                        >
                            <span>{primaryBtnText}</span>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M4 10h12m0 0l-4-4m4 4l-4 4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <a
                            href={secondaryBtnLink}
                            className="alh-hero-btn alh-hero-btn-secondary"
                        >
                            <span>{secondaryBtnText}</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="alh-hero-scroll-indicator">
                <div className="alh-hero-scroll-line" />
                <span>D&eacute;couvrir</span>
            </div>
        </section>
    )
}

Hero.defaultProps = {
    theme: "dark",
    logoName: "Alhambra",
    logoSub: "Cin\u00e9ma Calais",
    link1Text: "\u00C0 l'affiche",
    link1Url: "/a-laffiche",
    link2Text: "Horaires",
    link2Url: "/horaires",
    link3Text: "Prochainement",
    link3Url: "/prochainement",
    link4Text: "Le cin\u00e9ma",
    link4Url: "/le-cinema",
    link5Text: "Infos pratiques",
    link5Url: "/infos-pratiques",
    link6Text: "Scolaires",
    link6Url: "/scolaires",
    badgeText: "Art et Essai \u2014 Calais Centre-Ville",
    titleLine1: "LE cin\u00e9ma",
    titleLine2: "de Calais",
    subtitle:
        "De proximit\u00e9. De qualit\u00e9. Recherche \u2022 Patrimoine \u2022 R\u00e9pertoire \u2022 Jeune Public",
    primaryBtnText: "Voir le programme",
    primaryBtnLink: "/a-laffiche",
    secondaryBtnText: "Horaires des s\u00e9ances",
    secondaryBtnLink: "/horaires",
}

addPropertyControls(Hero, {
    theme: {
        type: ControlType.Enum,
        title: "Th\u00e8me",
        options: ["dark", "light"],
        optionTitles: ["Sombre", "Clair"],
    },
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
    badgeText: { type: ControlType.String, title: "Badge" },
    titleLine1: { type: ControlType.String, title: "Titre ligne 1" },
    titleLine2: { type: ControlType.String, title: "Titre ligne 2" },
    subtitle: { type: ControlType.String, title: "Sous-titre" },
    primaryBtnText: { type: ControlType.String, title: "Bouton principal" },
    primaryBtnLink: { type: ControlType.String, title: "Lien principal" },
    secondaryBtnText: {
        type: ControlType.String,
        title: "Bouton secondaire",
    },
    secondaryBtnLink: {
        type: ControlType.String,
        title: "Lien secondaire",
    },
})
