import React, { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

// — Design tokens —

const colors = {
    dark: {
        bgPrimary: "#0a0a0f",
        bgCard: "#16161f",
        bgCardHover: "#1c1c28",
        textPrimary: "#f0ece4",
        textSecondary: "#9a9aad",
        textMuted: "#5e5e72",
        accent: "#c23636",
        accentLight: "#e04444",
        accentGlow: "rgba(194,54,54,0.15)",
        border: "rgba(255,255,255,0.06)",
        borderHover: "rgba(255,255,255,0.12)",
    },
    light: {
        bgPrimary: "#f5f3ef",
        bgCard: "#ffffff",
        bgCardHover: "#f0ede8",
        textPrimary: "#1a1a2e",
        textSecondary: "#555566",
        textMuted: "#8a8a9a",
        accent: "#b52e2e",
        accentLight: "#d03a3a",
        accentGlow: "rgba(181,46,46,0.08)",
        border: "rgba(0,0,0,0.08)",
        borderHover: "rgba(0,0,0,0.15)",
    },
}

const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, sans-serif",
    heading: "'Space Grotesk', sans-serif",
}

// — Scoped CSS —

const scopedCSS = `
@keyframes alh-today-fadeInUp {
    from {
        opacity: 0;
        transform: translateY(32px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.alh-today-section {
    padding: 120px 0;
    width: 100%;
}

.alh-today-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.alh-today-header {
    text-align: center;
    margin-bottom: 64px;
    opacity: 0;
    transform: translateY(32px);
    transition: none;
}

.alh-today-header.alh-today-revealed {
    animation: alh-today-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.alh-today-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 16px;
    padding: 6px 16px;
    border: 1px solid rgba(194, 54, 54, 0.25);
    border-radius: 100px;
    background: rgba(194, 54, 54, 0.06);
}

.alh-today-title {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    margin: 0 0 16px 0;
    line-height: 1.15;
}

.alh-today-desc {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
}

.alh-today-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.alh-today-card {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    border-width: 1px;
    border-style: solid;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                border-color 0.35s ease;
    opacity: 0;
    transform: translateY(32px);
}

.alh-today-card.alh-today-revealed {
    animation: alh-today-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.alh-today-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
}

.alh-today-poster-wrap {
    position: relative;
    aspect-ratio: 2 / 3;
    overflow: hidden;
}

.alh-today-poster-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.alh-today-card:hover .alh-today-poster-img {
    transform: scale(1.05);
}

.alh-today-info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.alh-today-film-title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
}

.alh-today-film-meta {
    font-size: 0.8rem;
    margin: 0;
}

.alh-today-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 8px;
    align-self: flex-start;
}

.alh-today-badge-vf {
    background: rgba(194, 54, 54, 0.15);
    color: #e04444;
}

.alh-today-badge-vost {
    background: rgba(100, 100, 255, 0.12);
    color: #8888ff;
}

.alh-today-times {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    flex-wrap: wrap;
}

.alh-today-time-pill {
    padding: 6px 14px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #fff;
}

.alh-today-time-pill.alh-today-no-seance {
    padding: 6px 10px;
    background: transparent !important;
    font-size: 0.75rem;
}

.alh-today-cta-wrap {
    text-align: center;
    margin-top: 48px;
    opacity: 0;
    transform: translateY(32px);
}

.alh-today-cta-wrap.alh-today-revealed {
    animation: alh-today-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.alh-today-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
}

.alh-today-cta:hover {
    color: #fff !important;
}

/* — Responsive — */

@media (max-width: 900px) {
    .alh-today-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 500px) {
    .alh-today-grid {
        grid-template-columns: 1fr;
    }
    .alh-today-card {
        flex-direction: row;
    }
    .alh-today-poster-wrap {
        aspect-ratio: auto;
        width: 120px;
        min-height: 160px;
        flex-shrink: 0;
    }
    .alh-today-info {
        flex: 1;
        justify-content: center;
    }
    .alh-today-section {
        padding: 72px 0;
    }
}
`

// — Sub-components —

function FilmCard({
    title,
    meta,
    badge,
    time,
    poster,
    noSeance,
    theme,
    index,
    revealed,
}: {
    title: string
    meta: string
    badge: string
    time: string
    poster: string
    noSeance: boolean
    theme: "dark" | "light"
    index: number
    revealed: boolean
}) {
    const t = colors[theme]
    const isVOST = badge.toUpperCase() === "VOST"
    const badgeClass = isVOST ? "alh-today-badge-vost" : "alh-today-badge-vf"

    return (
        <div
            className={`alh-today-card${revealed ? " alh-today-revealed" : ""}`}
            style={{
                background: t.bgCard,
                borderColor: t.border,
                animationDelay: revealed ? `${index * 0.1}s` : undefined,
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = t.borderHover
                el.style.background = t.bgCardHover
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = t.border
                el.style.background = t.bgCard
            }}
        >
            {poster && (
                <div
                    className="alh-today-poster-wrap"
                    style={{ background: t.bgCard }}
                >
                    <img
                        className="alh-today-poster-img"
                        src={poster}
                        alt={title}
                    />
                </div>
            )}
            <div className="alh-today-info">
                <h3
                    className="alh-today-film-title"
                    style={{
                        fontFamily: fonts.heading,
                        color: t.textPrimary,
                    }}
                >
                    {title}
                </h3>
                <p
                    className="alh-today-film-meta"
                    style={{
                        fontFamily: fonts.body,
                        color: t.textSecondary,
                    }}
                >
                    {meta}
                </p>
                {badge && (
                    <span className={`alh-today-badge ${badgeClass}`}>
                        {badge}
                    </span>
                )}
                <div className="alh-today-times">
                    <span
                        className={`alh-today-time-pill${noSeance ? " alh-today-no-seance" : ""}`}
                        style={{
                            background: noSeance ? "transparent" : t.accent,
                            color: noSeance ? t.textMuted : "#fff",
                            fontFamily: fonts.heading,
                        }}
                    >
                        {time}
                    </span>
                </div>
            </div>
        </div>
    )
}

// — Main component —

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function TodayScreenings(props: Record<string, any>) {
    const t = colors[props.theme as "dark" | "light"] ?? colors.dark
    const sectionRef = useRef<HTMLElement>(null)
    const revealedRef = useRef(false)
    const [revealed, setRevealed] = React.useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !revealedRef.current) {
                    revealedRef.current = true
                    setRevealed(true)
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const films = [
        {
            title: props.film1Title,
            meta: props.film1Meta,
            badge: props.film1Badge,
            time: props.film1Time,
            poster: props.film1Poster,
            noSeance: props.film1NoSeance,
        },
        {
            title: props.film2Title,
            meta: props.film2Meta,
            badge: props.film2Badge,
            time: props.film2Time,
            poster: props.film2Poster,
            noSeance: props.film2NoSeance,
        },
        {
            title: props.film3Title,
            meta: props.film3Meta,
            badge: props.film3Badge,
            time: props.film3Time,
            poster: props.film3Poster,
            noSeance: props.film3NoSeance,
        },
        {
            title: props.film4Title,
            meta: props.film4Meta,
            badge: props.film4Badge,
            time: props.film4Time,
            poster: props.film4Poster,
            noSeance: props.film4NoSeance,
        },
    ].filter((f) => f.title)

    return (
        <section
            ref={sectionRef}
            className="alh-today-section"
            style={{ background: t.bgPrimary }}
        >
            <style>{scopedCSS}</style>

            <div className="alh-today-container">
                {/* Section header */}
                <div
                    className={`alh-today-header${revealed ? " alh-today-revealed" : ""}`}
                >
                    <span
                        className="alh-today-tag"
                        style={{
                            fontFamily: fonts.body,
                            color: t.accent,
                        }}
                    >
                        {props.sectionTag}
                    </span>
                    <h2
                        className="alh-today-title"
                        style={{
                            fontFamily: fonts.display,
                            color: t.textPrimary,
                        }}
                    >
                        {props.sectionTitle}
                    </h2>
                    <p
                        className="alh-today-desc"
                        style={{
                            fontFamily: fonts.body,
                            color: t.textSecondary,
                        }}
                    >
                        {props.sectionDesc}
                    </p>
                </div>

                {/* Film cards grid */}
                <div className="alh-today-grid">
                    {films.map((film, i) => (
                        <FilmCard
                            key={i}
                            {...film}
                            theme={props.theme}
                            index={i}
                            revealed={revealed}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div
                    className={`alh-today-cta-wrap${revealed ? " alh-today-revealed" : ""}`}
                    style={{
                        animationDelay: revealed
                            ? `${films.length * 0.1 + 0.2}s`
                            : undefined,
                    }}
                >
                    <a
                        href={props.ctaLink}
                        className="alh-today-cta"
                        style={{
                            color: t.accent,
                            borderColor: t.accent,
                            fontFamily: fonts.body,
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement
                            el.style.background = t.accent
                            el.style.color = "#fff"
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement
                            el.style.background = "transparent"
                            el.style.color = t.accent
                        }}
                    >
                        {props.ctaText}
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

// — Default props —

TodayScreenings.defaultProps = {
    theme: "dark",
    sectionTag: "Aujourd'hui \u2014 Dimanche 15 mars",
    sectionTitle: "S\u00e9ances du jour",
    sectionDesc: "Les films projet\u00e9s aujourd'hui au Cin\u00e9ma Alhambra.",
    film1Title: "Soundtrack to a Coup d'\u00c9tat",
    film1Meta: "Documentaire, Musique \u2022 2h30",
    film1Badge: "VOST",
    film1Time: "14:00",
    film1Poster: "",
    film1NoSeance: false,
    film2Title: "Alter Ego",
    film2Meta: "Com\u00e9die, Thriller \u2022 1h39",
    film2Badge: "VF",
    film2Time: "17:00",
    film2Poster: "",
    film2NoSeance: false,
    film3Title: "The Mastermind",
    film3Meta: "Policier, Drame \u2022 1h50",
    film3Badge: "VOST",
    film3Time: "19:00",
    film3Poster: "",
    film3NoSeance: false,
    film4Title: "L'Affaire Bojarski",
    film4Meta: "Drame, Policier \u2022 2h08",
    film4Badge: "VF",
    film4Time: "Pas de s\u00e9ance aujourd'hui",
    film4Poster: "",
    film4NoSeance: true,
    ctaText: "Tous les horaires de la semaine",
    ctaLink: "/horaires",
}

// — Property controls —

addPropertyControls(TodayScreenings, {
    theme: {
        type: ControlType.Enum,
        title: "Th\u00e8me",
        options: ["dark", "light"],
        optionTitles: ["Sombre", "Clair"],
    },
    sectionTag: { type: ControlType.String, title: "Tag" },
    sectionTitle: { type: ControlType.String, title: "Titre" },
    sectionDesc: { type: ControlType.String, title: "Description" },

    // Film 1
    film1Title: { type: ControlType.String, title: "Film 1 Titre" },
    film1Meta: { type: ControlType.String, title: "Film 1 Meta" },
    film1Badge: {
        type: ControlType.Enum,
        title: "Film 1 Badge",
        options: ["VF", "VOST"],
        optionTitles: ["VF", "VOST"],
    },
    film1Time: { type: ControlType.String, title: "Film 1 Horaire" },
    film1Poster: { type: ControlType.Image, title: "Film 1 Affiche" },
    film1NoSeance: {
        type: ControlType.Boolean,
        title: "Film 1 Pas de s\u00e9ance",
        defaultValue: false,
    },

    // Film 2
    film2Title: { type: ControlType.String, title: "Film 2 Titre" },
    film2Meta: { type: ControlType.String, title: "Film 2 Meta" },
    film2Badge: {
        type: ControlType.Enum,
        title: "Film 2 Badge",
        options: ["VF", "VOST"],
        optionTitles: ["VF", "VOST"],
    },
    film2Time: { type: ControlType.String, title: "Film 2 Horaire" },
    film2Poster: { type: ControlType.Image, title: "Film 2 Affiche" },
    film2NoSeance: {
        type: ControlType.Boolean,
        title: "Film 2 Pas de s\u00e9ance",
        defaultValue: false,
    },

    // Film 3
    film3Title: { type: ControlType.String, title: "Film 3 Titre" },
    film3Meta: { type: ControlType.String, title: "Film 3 Meta" },
    film3Badge: {
        type: ControlType.Enum,
        title: "Film 3 Badge",
        options: ["VF", "VOST"],
        optionTitles: ["VF", "VOST"],
    },
    film3Time: { type: ControlType.String, title: "Film 3 Horaire" },
    film3Poster: { type: ControlType.Image, title: "Film 3 Affiche" },
    film3NoSeance: {
        type: ControlType.Boolean,
        title: "Film 3 Pas de s\u00e9ance",
        defaultValue: false,
    },

    // Film 4
    film4Title: { type: ControlType.String, title: "Film 4 Titre" },
    film4Meta: { type: ControlType.String, title: "Film 4 Meta" },
    film4Badge: {
        type: ControlType.Enum,
        title: "Film 4 Badge",
        options: ["VF", "VOST"],
        optionTitles: ["VF", "VOST"],
    },
    film4Time: { type: ControlType.String, title: "Film 4 Horaire" },
    film4Poster: { type: ControlType.Image, title: "Film 4 Affiche" },
    film4NoSeance: {
        type: ControlType.Boolean,
        title: "Film 4 Pas de s\u00e9ance",
        defaultValue: false,
    },

    // CTA
    ctaText: { type: ControlType.String, title: "CTA texte" },
    ctaLink: { type: ControlType.String, title: "CTA lien" },
})
