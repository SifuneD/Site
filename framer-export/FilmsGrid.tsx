import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef, useState } from "react"

const colors = {
    dark: {
        bgSecondary: "#111118",
        bgCard: "#16161f",
        textPrimary: "#f0ece4",
        textSecondary: "#9a9aad",
        textMuted: "#5e5e72",
        accent: "#c23636",
        accentLight: "#e04444",
        accentGlow: "rgba(194,54,54,0.15)",
        border: "rgba(255,255,255,0.06)",
    },
    light: {
        bgSecondary: "#eae7e1",
        bgCard: "#ffffff",
        textPrimary: "#1a1a2e",
        textSecondary: "#555566",
        textMuted: "#8a8a9a",
        accent: "#b52e2e",
        accentLight: "#d03a3a",
        accentGlow: "rgba(181,46,46,0.08)",
        border: "rgba(0,0,0,0.08)",
    },
}

const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, sans-serif",
    heading: "'Space Grotesk', sans-serif",
}

function getStyles(t: typeof colors.dark) {
    return `
        /* ---- Reveal animation ---- */
        .alh-films-section {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .alh-films-section.alh-films-visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* ---- Grid ---- */
        .alh-films-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
        }

        /* ---- Staggered card reveal ---- */
        .alh-films-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                        border-color 0.35s ease,
                        box-shadow 0.35s ease;
            border-radius: 16px;
            overflow: hidden;
            background: ${t.bgCard};
            border: 1px solid ${t.border};
            cursor: pointer;
            position: relative;
        }
        .alh-films-visible .alh-films-card:nth-child(1) { transition-delay: 0.1s; }
        .alh-films-visible .alh-films-card:nth-child(2) { transition-delay: 0.2s; }
        .alh-films-visible .alh-films-card:nth-child(3) { transition-delay: 0.3s; }
        .alh-films-visible .alh-films-card:nth-child(4) { transition-delay: 0.4s; }
        .alh-films-visible .alh-films-card {
            opacity: 1;
            transform: translateY(0);
        }

        /* ---- Card hover ---- */
        .alh-films-card:hover {
            transform: translateY(-8px);
            border-color: ${t.accent};
            box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${t.accentGlow};
        }

        /* ---- Poster ---- */
        .alh-films-poster {
            position: relative;
            aspect-ratio: 2 / 3;
            overflow: hidden;
            background: ${t.bgCard};
        }
        .alh-films-poster img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .alh-films-card:hover .alh-films-poster img {
            transform: scale(1.05);
        }

        /* ---- Poster overlay with CTA ---- */
        .alh-films-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 24px 16px;
            background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, transparent 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
        }
        .alh-films-card:hover .alh-films-overlay {
            opacity: 1;
        }
        .alh-films-overlay-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 0.8rem;
            font-weight: 600;
            font-family: ${fonts.body};
            background: ${t.accent};
            color: #fff;
            text-decoration: none;
            letter-spacing: 0.02em;
            transform: translateY(8px);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .alh-films-card:hover .alh-films-overlay-cta {
            transform: translateY(0);
        }

        /* ---- Poster placeholder ---- */
        .alh-films-placeholder {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${t.textMuted};
            opacity: 0.3;
            font-size: 3rem;
        }

        /* ---- Card info ---- */
        .alh-films-info {
            padding: 16px 20px;
        }
        .alh-films-title {
            font-family: ${fonts.heading};
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.3;
            color: ${t.textPrimary};
            margin: 0;
        }
        .alh-films-meta {
            font-size: 0.8rem;
            color: ${t.textMuted};
            margin: 4px 0 0 0;
            font-family: ${fonts.body};
        }

        /* ---- VF / VOST badges ---- */
        .alh-films-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-top: 8;
            letter-spacing: 0.04em;
        }
        .alh-films-badge-vf {
            background: rgba(194,54,54,0.15);
            color: ${t.accentLight};
        }
        .alh-films-badge-vost {
            background: rgba(100,100,255,0.12);
            color: #8888ff;
        }

        /* ---- Section header ---- */
        .alh-films-header {
            text-align: center;
            margin-bottom: 64px;
        }
        .alh-films-tag {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: ${t.accent};
            margin-bottom: 16px;
            padding: 6px 16px;
            border: 1px solid rgba(194,54,54,0.25);
            border-radius: 100px;
            background: rgba(194,54,54,0.06);
            font-family: ${fonts.body};
        }
        .alh-films-heading {
            font-family: ${fonts.display};
            font-size: clamp(2rem, 4vw, 3.5rem);
            font-weight: 700;
            margin-bottom: 16px;
            line-height: 1.15;
            color: ${t.textPrimary};
        }
        .alh-films-desc {
            font-size: 1.1rem;
            color: ${t.textSecondary};
            max-width: 600px;
            margin: 0 auto;
            font-weight: 300;
            font-family: ${fonts.body};
        }

        /* ---- CTA button ---- */
        .alh-films-cta-wrap {
            text-align: center;
            margin-top: 48px;
        }
        .alh-films-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            color: ${t.accent};
            border: 1px solid ${t.accent};
            padding: 14px 28px;
            border-radius: 12px;
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            font-family: ${fonts.body};
            letter-spacing: 0.01em;
            transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }
        .alh-films-cta:hover {
            background: ${t.accent};
            color: #fff;
            box-shadow: 0 8px 30px ${t.accentGlow};
        }
        .alh-films-cta svg {
            transition: transform 0.3s ease;
        }
        .alh-films-cta:hover svg {
            transform: translateX(4px);
        }

        /* ---- Media queries ---- */
        @media (max-width: 1024px) {
            .alh-films-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 768px) {
            .alh-films-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
            }
            .alh-films-header {
                margin-bottom: 40px;
            }
        }
        @media (max-width: 480px) {
            .alh-films-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
            }
            .alh-films-title {
                font-size: 0.85rem;
            }
            .alh-films-meta {
                font-size: 0.7rem;
            }
            .alh-films-info {
                padding: 12px 14px;
            }
            .alh-films-badge {
                font-size: 0.6rem;
            }
            .alh-films-overlay-cta {
                font-size: 0.7rem;
                padding: 8px 14px;
            }
        }
    `
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function FilmsGrid(props) {
    const {
        theme,
        sectionTag,
        sectionTitle,
        sectionDesc,
        f1Title, f1Meta, f1Badge, f1Poster, f1Link,
        f2Title, f2Meta, f2Badge, f2Poster, f2Link,
        f3Title, f3Meta, f3Badge, f3Poster, f3Link,
        f4Title, f4Meta, f4Badge, f4Poster, f4Link,
        ctaText,
        ctaLink,
    } = props

    const t = colors[theme]
    const sectionRef = useRef<HTMLElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.15 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const films = [
        { title: f1Title, meta: f1Meta, badge: f1Badge, poster: f1Poster, link: f1Link },
        { title: f2Title, meta: f2Meta, badge: f2Badge, poster: f2Poster, link: f2Link },
        { title: f3Title, meta: f3Meta, badge: f3Badge, poster: f3Poster, link: f3Link },
        { title: f4Title, meta: f4Meta, badge: f4Badge, poster: f4Poster, link: f4Link },
    ].filter((f) => f.title)

    return (
        <>
            <style>{getStyles(t)}</style>
            <section
                ref={sectionRef}
                className={`alh-films-section${visible ? " alh-films-visible" : ""}`}
                style={{ padding: "120px 0", background: t.bgSecondary, width: "100%" }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    {/* Header */}
                    <div className="alh-films-header">
                        <span className="alh-films-tag">{sectionTag}</span>
                        <h2 className="alh-films-heading">{sectionTitle}</h2>
                        <p className="alh-films-desc">{sectionDesc}</p>
                    </div>

                    {/* Film grid */}
                    <div className="alh-films-grid">
                        {films.map((film, i) => {
                            const isVOST = film.badge?.toUpperCase() === "VOST"
                            const cardContent = (
                                <div className="alh-films-card" key={i}>
                                    {/* Poster */}
                                    <div className="alh-films-poster">
                                        {film.poster ? (
                                            <img src={film.poster} alt={film.title} />
                                        ) : (
                                            <div className="alh-films-placeholder">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                                                    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
                                                    <circle cx="24" cy="24" r="3" fill="currentColor" />
                                                </svg>
                                            </div>
                                        )}
                                        {/* Hover overlay */}
                                        <div className="alh-films-overlay">
                                            <span className="alh-films-overlay-cta">
                                                Voir les s&eacute;ances
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="alh-films-info">
                                        <h3 className="alh-films-title">{film.title}</h3>
                                        {film.meta && <p className="alh-films-meta">{film.meta}</p>}
                                        {film.badge && (
                                            <span className={`alh-films-badge ${isVOST ? "alh-films-badge-vost" : "alh-films-badge-vf"}`}>
                                                {film.badge}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )

                            return film.link ? (
                                <a
                                    key={i}
                                    href={film.link}
                                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                                >
                                    {cardContent}
                                </a>
                            ) : (
                                cardContent
                            )
                        })}
                    </div>

                    {/* CTA */}
                    <div className="alh-films-cta-wrap">
                        <a href={ctaLink} className="alh-films-cta">
                            {ctaText}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

FilmsGrid.defaultProps = {
    theme: "dark",
    sectionTag: "Cette semaine",
    sectionTitle: "\u00C0 l\u2019affiche",
    sectionDesc: "D\u00e9couvrez notre s\u00e9lection de films \u00e0 l\u2019affiche cette semaine au Cin\u00e9ma Alhambra.",
    f1Title: "Alter Ego",
    f1Meta: "Com\u00e9die \u2022 1h39",
    f1Badge: "VF",
    f1Poster: "",
    f1Link: "/film/alter-ego",
    f2Title: "The Mastermind",
    f2Meta: "Policier \u2022 1h50",
    f2Badge: "VOST",
    f2Poster: "",
    f2Link: "/film/the-mastermind",
    f3Title: "L\u2019Affaire Bojarski",
    f3Meta: "Drame, Policier \u2022 2h08",
    f3Badge: "VF",
    f3Poster: "",
    f3Link: "/film/laffaire-bojarski",
    f4Title: "Soundtrack to a Coup d\u2019\u00c9tat",
    f4Meta: "Documentaire \u2022 2h30",
    f4Badge: "VOST",
    f4Poster: "",
    f4Link: "/film/soundtrack-coup-etat",
    ctaText: "Toute la programmation",
    ctaLink: "/a-laffiche",
}

addPropertyControls(FilmsGrid, {
    theme: {
        type: ControlType.Enum,
        title: "Th\u00e8me",
        options: ["dark", "light"],
        optionTitles: ["Sombre", "Clair"],
    },
    sectionTag: { type: ControlType.String, title: "Tag" },
    sectionTitle: { type: ControlType.String, title: "Titre" },
    sectionDesc: { type: ControlType.String, title: "Description" },
    f1Title: { type: ControlType.String, title: "Film 1 \u2014 Titre" },
    f1Meta: { type: ControlType.String, title: "Film 1 \u2014 Meta" },
    f1Badge: { type: ControlType.Enum, title: "Film 1 \u2014 Badge", options: ["VF", "VOST"], optionTitles: ["VF", "VOST"] },
    f1Poster: { type: ControlType.Image, title: "Film 1 \u2014 Affiche" },
    f1Link: { type: ControlType.String, title: "Film 1 \u2014 Lien" },
    f2Title: { type: ControlType.String, title: "Film 2 \u2014 Titre" },
    f2Meta: { type: ControlType.String, title: "Film 2 \u2014 Meta" },
    f2Badge: { type: ControlType.Enum, title: "Film 2 \u2014 Badge", options: ["VF", "VOST"], optionTitles: ["VF", "VOST"] },
    f2Poster: { type: ControlType.Image, title: "Film 2 \u2014 Affiche" },
    f2Link: { type: ControlType.String, title: "Film 2 \u2014 Lien" },
    f3Title: { type: ControlType.String, title: "Film 3 \u2014 Titre" },
    f3Meta: { type: ControlType.String, title: "Film 3 \u2014 Meta" },
    f3Badge: { type: ControlType.Enum, title: "Film 3 \u2014 Badge", options: ["VF", "VOST"], optionTitles: ["VF", "VOST"] },
    f3Poster: { type: ControlType.Image, title: "Film 3 \u2014 Affiche" },
    f3Link: { type: ControlType.String, title: "Film 3 \u2014 Lien" },
    f4Title: { type: ControlType.String, title: "Film 4 \u2014 Titre" },
    f4Meta: { type: ControlType.String, title: "Film 4 \u2014 Meta" },
    f4Badge: { type: ControlType.Enum, title: "Film 4 \u2014 Badge", options: ["VF", "VOST"], optionTitles: ["VF", "VOST"] },
    f4Poster: { type: ControlType.Image, title: "Film 4 \u2014 Affiche" },
    f4Link: { type: ControlType.String, title: "Film 4 \u2014 Lien" },
    ctaText: { type: ControlType.String, title: "CTA texte" },
    ctaLink: { type: ControlType.String, title: "CTA lien" },
})
