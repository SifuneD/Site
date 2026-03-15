// Today's Screenings — Framer Code Component
// Editable: section title, date, films (title, genre, duration, badge, time, poster)

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    theme: "dark" | "light"
    sectionTag: string
    sectionTitle: string
    sectionDesc: string
    film1Title: string
    film1Meta: string
    film1Badge: string
    film1Time: string
    film1Poster: string
    film2Title: string
    film2Meta: string
    film2Badge: string
    film2Time: string
    film2Poster: string
    film3Title: string
    film3Meta: string
    film3Badge: string
    film3Time: string
    film3Poster: string
    film4Title: string
    film4Meta: string
    film4Badge: string
    film4Time: string
    film4Poster: string
    ctaText: string
    ctaLink: string
}

function FilmCard({
    title,
    meta,
    badge,
    time,
    poster,
    t,
}: {
    title: string
    meta: string
    badge: string
    time: string
    poster: string
    t: typeof colors.dark
}) {
    const isVOST = badge.toUpperCase() === "VOST"
    const isNoSeance = time.toLowerCase().includes("pas de")

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                background: t.bgCard,
                borderRadius: 12,
                overflow: "hidden",
                border: `1px solid ${t.border}`,
            }}
        >
            {poster && (
                <div
                    style={{
                        position: "relative",
                        aspectRatio: "2/3",
                        overflow: "hidden",
                        background: t.bgCard,
                    }}
                >
                    <img
                        src={poster}
                        alt={title}
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            )}
            <div
                style={{
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                }}
            >
                <h3
                    style={{
                        fontFamily: fonts.heading,
                        fontSize: "1rem",
                        fontWeight: 600,
                        lineHeight: 1.3,
                        color: t.textPrimary,
                        margin: 0,
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontSize: "0.8rem",
                        color: t.textSecondary,
                        margin: 0,
                        fontFamily: fonts.body,
                    }}
                >
                    {meta}
                </p>
                <span
                    style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginTop: 8,
                        background: isVOST
                            ? "rgba(100,100,255,0.12)"
                            : "rgba(194,54,54,0.15)",
                        color: isVOST ? "#8888ff" : t.accentLight,
                        alignSelf: "flex-start",
                    }}
                >
                    {badge}
                </span>
                <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: isNoSeance ? "6px 10px" : "6px 14px",
                            background: isNoSeance ? "transparent" : t.accent,
                            color: isNoSeance ? t.textMuted : "#fff",
                            borderRadius: 6,
                            fontSize: isNoSeance ? "0.75rem" : "0.85rem",
                            fontWeight: 600,
                            fontFamily: fonts.heading,
                            letterSpacing: "0.02em",
                        }}
                    >
                        {time}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function TodayScreenings(props: Props) {
    const { theme } = props
    const t = colors[theme]

    const films = [
        { title: props.film1Title, meta: props.film1Meta, badge: props.film1Badge, time: props.film1Time, poster: props.film1Poster },
        { title: props.film2Title, meta: props.film2Meta, badge: props.film2Badge, time: props.film2Time, poster: props.film2Poster },
        { title: props.film3Title, meta: props.film3Meta, badge: props.film3Badge, time: props.film3Time, poster: props.film3Poster },
        { title: props.film4Title, meta: props.film4Meta, badge: props.film4Badge, time: props.film4Time, poster: props.film4Poster },
    ].filter((f) => f.title)

    return (
        <section
            style={{
                padding: "120px 0",
                background: t.bgPrimary,
                width: "100%",
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "0 24px",
                }}
            >
                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span
                        style={{
                            display: "inline-block",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            color: t.accent,
                            marginBottom: 16,
                            padding: "6px 16px",
                            border: "1px solid rgba(194,54,54,0.25)",
                            borderRadius: 100,
                            background: "rgba(194,54,54,0.06)",
                            fontFamily: fonts.body,
                        }}
                    >
                        {props.sectionTag}
                    </span>
                    <h2
                        style={{
                            fontFamily: fonts.display,
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            fontWeight: 700,
                            marginBottom: 16,
                            lineHeight: 1.15,
                            color: t.textPrimary,
                        }}
                    >
                        {props.sectionTitle}
                    </h2>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            color: t.textSecondary,
                            maxWidth: 600,
                            margin: "0 auto",
                            fontWeight: 300,
                            fontFamily: fonts.body,
                        }}
                    >
                        {props.sectionDesc}
                    </p>
                </div>

                {/* Films Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${Math.min(films.length, 4)}, 1fr)`,
                        gap: 24,
                    }}
                >
                    {films.map((film, i) => (
                        <FilmCard key={i} {...film} t={t} />
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: "center", marginTop: 48 }}>
                    <a
                        href={props.ctaLink}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "transparent",
                            color: t.accent,
                            border: `1px solid ${t.accent}`,
                            padding: "12px 24px",
                            borderRadius: 12,
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontFamily: fonts.body,
                        }}
                    >
                        {props.ctaText}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

TodayScreenings.defaultProps = {
    theme: "dark",
    sectionTag: "Aujourd'hui — Dimanche 15 mars",
    sectionTitle: "Séances du jour",
    sectionDesc: "Les films projetés aujourd'hui au Cinéma Alhambra.",
    film1Title: "Soundtrack to a Coup d'État",
    film1Meta: "Documentaire, Musique \u2022 2h30",
    film1Badge: "VOST",
    film1Time: "14:00",
    film1Poster: "",
    film2Title: "Alter Ego",
    film2Meta: "Comédie, Thriller \u2022 1h39",
    film2Badge: "VF",
    film2Time: "17:00",
    film2Poster: "",
    film3Title: "The Mastermind",
    film3Meta: "Policier, Drame \u2022 1h50",
    film3Badge: "VOST",
    film3Time: "19:00",
    film3Poster: "",
    film4Title: "L'Affaire Bojarski",
    film4Meta: "Drame, Policier \u2022 2h08",
    film4Badge: "VF",
    film4Time: "Pas de séance aujourd'hui",
    film4Poster: "",
    ctaText: "Tous les horaires de la semaine",
    ctaLink: "/horaires",
}

addPropertyControls(TodayScreenings, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    sectionTitle: { type: ControlType.String, title: "Titre section" },
    sectionDesc: { type: ControlType.String, title: "Description" },
    film1Title: { type: ControlType.String, title: "Film 1 — Titre" },
    film1Meta: { type: ControlType.String, title: "Film 1 — Meta" },
    film1Badge: { type: ControlType.String, title: "Film 1 — Badge" },
    film1Time: { type: ControlType.String, title: "Film 1 — Horaire" },
    film1Poster: { type: ControlType.Image, title: "Film 1 — Affiche" },
    film2Title: { type: ControlType.String, title: "Film 2 — Titre" },
    film2Meta: { type: ControlType.String, title: "Film 2 — Meta" },
    film2Badge: { type: ControlType.String, title: "Film 2 — Badge" },
    film2Time: { type: ControlType.String, title: "Film 2 — Horaire" },
    film2Poster: { type: ControlType.Image, title: "Film 2 — Affiche" },
    film3Title: { type: ControlType.String, title: "Film 3 — Titre" },
    film3Meta: { type: ControlType.String, title: "Film 3 — Meta" },
    film3Badge: { type: ControlType.String, title: "Film 3 — Badge" },
    film3Time: { type: ControlType.String, title: "Film 3 — Horaire" },
    film3Poster: { type: ControlType.Image, title: "Film 3 — Affiche" },
    film4Title: { type: ControlType.String, title: "Film 4 — Titre" },
    film4Meta: { type: ControlType.String, title: "Film 4 — Meta" },
    film4Badge: { type: ControlType.String, title: "Film 4 — Badge" },
    film4Time: { type: ControlType.String, title: "Film 4 — Horaire" },
    film4Poster: { type: ControlType.Image, title: "Film 4 — Affiche" },
    ctaText: { type: ControlType.String, title: "CTA texte" },
    ctaLink: { type: ControlType.String, title: "CTA lien" },
})
