import { addPropertyControls, ControlType } from "framer"
import React, { useEffect, useRef } from "react"

// --- Design Tokens ---
const colors = {
    dark: {
        bgPrimary: "#0a0a0f",
        bgCard: "#16161f",
        textPrimary: "#f0ece4",
        textSecondary: "#9a9aad",
        accent: "#c23636",
        border: "rgba(255,255,255,0.06)",
    },
    light: {
        bgPrimary: "#f5f3ef",
        bgCard: "#ffffff",
        textPrimary: "#1a1a2e",
        textSecondary: "#555566",
        accent: "#b52e2e",
        border: "rgba(0,0,0,0.08)",
    },
}
const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, sans-serif",
}

// --- SVG Icons ---
const iconCamera = `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`
const iconScreen = `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
const iconGlobe = `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`

// --- Scoped Styles ---
function getStyles(t: typeof colors.dark) {
    return `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

@keyframes alh-cin-fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
}

.alh-cin-page {
    width: 100%;
    min-height: 100vh;
    background: ${t.bgPrimary};
    color: ${t.textPrimary};
    font-family: ${fonts.body};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

/* --- Reveal --- */
.alh-cin-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1);
}
.alh-cin-reveal.alh-cin-visible {
    opacity: 1;
    transform: translateY(0);
}

/* --- Page Header --- */
.alh-cin-header {
    text-align: center;
    padding: 140px 24px 100px;
    position: relative;
}
.alh-cin-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${t.accent}, transparent);
}
.alh-cin-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: ${t.accent};
    margin-bottom: 24px;
    padding: 7px 20px;
    border: 1px solid rgba(194,54,54,0.25);
    border-radius: 100px;
    background: rgba(194,54,54,0.06);
    font-family: ${fonts.body};
}
.alh-cin-page-title {
    font-family: ${fonts.display};
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.12;
    margin: 0 0 24px;
    color: ${t.textPrimary};
}
.alh-cin-accent {
    color: ${t.accent};
}
.alh-cin-subtitle {
    font-size: 1.15rem;
    color: ${t.textSecondary};
    line-height: 1.7;
    margin: 0 auto;
    max-width: 600px;
    font-family: ${fonts.body};
    font-weight: 300;
}

/* --- Content Blocks --- */
.alh-cin-blocks {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}
.alh-cin-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    padding: 100px 0;
    border-bottom: 1px solid ${t.border};
}
.alh-cin-block:last-child {
    border-bottom: none;
}
.alh-cin-block--reversed .alh-cin-block-text {
    order: 2;
}
.alh-cin-block--reversed .alh-cin-block-visual {
    order: 1;
}
.alh-cin-block-tag {
    display: inline-block;
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${t.accent};
    margin-bottom: 16px;
    font-family: ${fonts.body};
}
.alh-cin-block-title {
    font-family: ${fonts.display};
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 20px;
    color: ${t.textPrimary};
}
.alh-cin-block-desc {
    font-size: 1rem;
    color: ${t.textSecondary};
    line-height: 1.8;
    margin: 0 0 32px;
    font-family: ${fonts.body};
    font-weight: 300;
}
.alh-cin-labels {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.alh-cin-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    font-weight: 500;
    color: ${t.textPrimary};
    padding: 8px 18px;
    border-radius: 100px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    font-family: ${fonts.body};
    transition: border-color 0.3s ease, transform 0.3s ease;
}
.alh-cin-label:hover {
    border-color: ${t.accent};
    transform: translateY(-2px);
}
.alh-cin-label-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${t.accent};
    flex-shrink: 0;
}

/* --- Block Visual --- */
.alh-cin-block-visual {
    display: flex;
    align-items: center;
    justify-content: center;
}
.alh-cin-visual-frame {
    width: 100%;
    max-width: 420px;
    aspect-ratio: 4/3;
    border-radius: 16px;
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.alh-cin-visual-frame:hover {
    border-color: rgba(194,54,54,0.25);
    box-shadow: 0 20px 60px rgba(194,54,54,0.08);
}
.alh-cin-visual-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(194,54,54,0.05) 0%, transparent 70%);
    pointer-events: none;
}
.alh-cin-visual-icon {
    color: ${t.accent};
    opacity: 0.7;
    transition: opacity 0.4s ease, transform 0.4s ease;
}
.alh-cin-visual-frame:hover .alh-cin-visual-icon {
    opacity: 1;
    transform: scale(1.08);
}

/* --- Stats Section --- */
.alh-cin-stats {
    padding: 100px 24px 120px;
    max-width: 1200px;
    margin: 0 auto;
}
.alh-cin-stats-title {
    text-align: center;
    font-family: ${fonts.display};
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 700;
    margin: 0 0 60px;
    color: ${t.textPrimary};
}
.alh-cin-stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}
.alh-cin-stat-card {
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 16px;
    padding: 48px 32px;
    text-align: center;
    transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.4s ease, box-shadow 0.4s ease;
    cursor: default;
}
.alh-cin-stat-card:hover {
    transform: translateY(-8px);
    border-color: rgba(194,54,54,0.3);
    box-shadow: 0 24px 64px rgba(194,54,54,0.1);
}
.alh-cin-stat-value {
    font-family: ${fonts.display};
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    color: ${t.accent};
    margin: 0 0 12px;
    line-height: 1;
}
.alh-cin-stat-label {
    font-size: 0.9rem;
    color: ${t.textSecondary};
    font-weight: 400;
    font-family: ${fonts.body};
    margin: 0;
}

/* --- Responsive 1024px --- */
@media (max-width: 1024px) {
    .alh-cin-block {
        gap: 48px;
        padding: 80px 0;
    }
    .alh-cin-header {
        padding: 120px 24px 80px;
    }
    .alh-cin-stats {
        padding: 80px 24px 100px;
    }
}

/* --- Responsive 768px --- */
@media (max-width: 768px) {
    .alh-cin-block {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 64px 0;
    }
    .alh-cin-block--reversed .alh-cin-block-text {
        order: 1;
    }
    .alh-cin-block--reversed .alh-cin-block-visual {
        order: 2;
    }
    .alh-cin-stats-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .alh-cin-stat-card {
        padding: 36px 24px;
    }
    .alh-cin-header {
        padding: 100px 20px 64px;
    }
    .alh-cin-stats {
        padding: 64px 20px 80px;
    }
}

/* --- Responsive 480px --- */
@media (max-width: 480px) {
    .alh-cin-header {
        padding: 80px 16px 48px;
    }
    .alh-cin-blocks {
        padding: 0 16px;
    }
    .alh-cin-block {
        padding: 48px 0;
        gap: 32px;
    }
    .alh-cin-labels {
        gap: 8px;
    }
    .alh-cin-label {
        font-size: 0.75rem;
        padding: 6px 14px;
    }
    .alh-cin-stats {
        padding: 48px 16px 64px;
    }
    .alh-cin-stat-card {
        padding: 32px 20px;
    }
}
`
}

// --- Component ---

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function CinemaPage({
    theme = "dark",
    pageTag = "Notre histoire",
    pageTitle = "Le Cinéma Alhambra",
    pageSubtitle = "LE cinéma de Calais. De proximité. De qualité.",
}: {
    theme?: "dark" | "light"
    pageTag?: string
    pageTitle?: string
    pageSubtitle?: string
}) {
    const t = colors[theme]
    const containerRef = useRef<HTMLDivElement>(null)

    // IntersectionObserver reveal
    useEffect(() => {
        const root = containerRef.current
        if (!root) return
        const els = root.querySelectorAll(".alh-cin-reveal")
        if (!els.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        ;(entry.target as HTMLElement).classList.add(
                            "alh-cin-visible"
                        )
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        )

        els.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [theme])

    // Split title to accent "Alhambra"
    const renderTitle = () => {
        const parts = pageTitle.split(/(Alhambra)/i)
        return parts.map((part, i) =>
            /alhambra/i.test(part) ? (
                <span key={i} className="alh-cin-accent">
                    {part}
                </span>
            ) : (
                <React.Fragment key={i}>{part}</React.Fragment>
            )
        )
    }

    // Content blocks data
    const blocks = [
        {
            tag: "Label Art et Essai",
            title: "Un cinéma Art et Essai",
            description:
                "L'Alhambra est classé Art et Essai avec trois labels décernés par le CNC, témoignant de notre engagement pour une programmation exigeante, diversifiée et ouverte à tous les publics.",
            labels: ["Recherche", "Patrimoine", "Jeune Public"],
            icon: iconCamera,
            reversed: false,
        },
        {
            tag: "Nos équipements",
            title: "Nos 3 salles",
            description:
                "Trois salles entièrement équipées en projection numérique, dont deux accessibles aux personnes à mobilité réduite. Un confort optimal pour une expérience cinématographique immersive.",
            labels: ["3 salles", "2 PMR", "Numérique"],
            icon: iconScreen,
            reversed: true,
        },
        {
            tag: "Partenaires",
            title: "Nos réseaux",
            description:
                "Membre du réseau Europa Cinémas et de l'association De la suite dans les images, l'Alhambra participe activement aux dispositifs scolaires d'éducation à l'image sur le territoire.",
            labels: [
                "Europa Cinémas",
                "De la suite dans les images",
                "Dispositifs scolaires",
            ],
            icon: iconGlobe,
            reversed: false,
        },
    ]

    const stats = [
        { value: "3", label: "Salles" },
        { value: "Art & Essai", label: "Classement CNC" },
        { value: "3", label: "Labels CNC" },
    ]

    return (
        <div className="alh-cin-page" ref={containerRef}>
            <style>{getStyles(t)}</style>

            {/* Page Header */}
            <header className="alh-cin-header alh-cin-reveal">
                <span className="alh-cin-tag">{pageTag}</span>
                <h1 className="alh-cin-page-title">{renderTitle()}</h1>
                <p className="alh-cin-subtitle">{pageSubtitle}</p>
            </header>

            {/* Content Blocks */}
            <section className="alh-cin-blocks">
                {blocks.map((block, index) => (
                    <div
                        key={index}
                        className={`alh-cin-block alh-cin-reveal${
                            block.reversed ? " alh-cin-block--reversed" : ""
                        }`}
                    >
                        <div className="alh-cin-block-text">
                            <span className="alh-cin-block-tag">
                                {block.tag}
                            </span>
                            <h2 className="alh-cin-block-title">
                                {block.title}
                            </h2>
                            <p className="alh-cin-block-desc">
                                {block.description}
                            </p>
                            <div className="alh-cin-labels">
                                {block.labels.map((label, li) => (
                                    <span key={li} className="alh-cin-label">
                                        <span className="alh-cin-label-dot" />
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="alh-cin-block-visual">
                            <div className="alh-cin-visual-frame">
                                <div
                                    className="alh-cin-visual-icon"
                                    dangerouslySetInnerHTML={{
                                        __html: block.icon,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Stats Section */}
            <section className="alh-cin-stats alh-cin-reveal">
                <h2 className="alh-cin-stats-title">
                    L'<span className="alh-cin-accent">Alhambra</span> en
                    chiffres
                </h2>
                <div className="alh-cin-stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="alh-cin-stat-card">
                            <p className="alh-cin-stat-value">{stat.value}</p>
                            <p className="alh-cin-stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

addPropertyControls(CinemaPage, {
    theme: {
        type: ControlType.Enum,
        title: "Theme",
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        defaultValue: "dark",
    },
    pageTag: {
        type: ControlType.String,
        title: "Tag",
        defaultValue: "Notre histoire",
    },
    pageTitle: {
        type: ControlType.String,
        title: "Title",
        defaultValue: "Le Cinéma Alhambra",
    },
    pageSubtitle: {
        type: ControlType.String,
        title: "Subtitle",
        defaultValue: "LE cinéma de Calais. De proximité. De qualité.",
    },
})
