import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgSecondary: "#111118", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", accentLight: "#e04444", border: "rgba(255,255,255,0.06)" },
    light: { bgSecondary: "#eae7e1", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", accentLight: "#d03a3a", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

function FilmCard({ title, meta, badge, poster, t }) {
    const isVOST = badge.toUpperCase() === "VOST"
    return (
        <div style={{ borderRadius: "0 0 16px 16px", overflow: "hidden", background: t.bgCard, border: `1px solid ${t.border}` }}>
            <div style={{ position: "relative", aspectRatio: "2/3", overflow: "hidden", background: t.bgCard }}>
                {poster ? <img src={poster} alt={title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> : <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: t.textMuted, opacity: 0.3, fontSize: "3rem" }}>🎬</div>}
            </div>
            <div style={{ padding: "16px 20px" }}>
                <h3 style={{ fontFamily: fonts.heading, fontSize: "1rem", fontWeight: 600, marginBottom: 4, color: t.textPrimary, margin: 0 }}>{title}</h3>
                <p style={{ fontSize: "0.8rem", color: t.textMuted, margin: "4px 0 0 0", fontFamily: fonts.body }}>{meta}</p>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: 4, fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", marginTop: 8, background: isVOST ? "rgba(100,100,255,0.12)" : "rgba(194,54,54,0.15)", color: isVOST ? "#8888ff" : t.accentLight }}>{badge}</span>
            </div>
        </div>
    )
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function FilmsGrid(props) {
    const t = colors[props.theme]
    const films = [
        { title: props.film1Title, meta: props.film1Meta, badge: props.film1Badge, poster: props.film1Poster },
        { title: props.film2Title, meta: props.film2Meta, badge: props.film2Badge, poster: props.film2Poster },
        { title: props.film3Title, meta: props.film3Meta, badge: props.film3Badge, poster: props.film3Poster },
        { title: props.film4Title, meta: props.film4Meta, badge: props.film4Badge, poster: props.film4Poster },
    ].filter((f) => f.title)

    return (
        <section style={{ padding: "120px 0", background: t.bgSecondary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: t.accent, marginBottom: 16, padding: "6px 16px", border: "1px solid rgba(194,54,54,0.25)", borderRadius: 100, background: "rgba(194,54,54,0.06)", fontFamily: fonts.body }}>{props.sectionTag}</span>
                    <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.15, color: t.textPrimary }}>{props.sectionTitle}</h2>
                    <p style={{ fontSize: "1.1rem", color: t.textSecondary, maxWidth: 600, margin: "0 auto", fontWeight: 300, fontFamily: fonts.body }}>{props.sectionDesc}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(films.length, 4)}, 1fr)`, gap: 24 }}>
                    {films.map((film, i) => <FilmCard key={i} {...film} t={t} />)}
                </div>
                <div style={{ textAlign: "center", marginTop: 48 }}>
                    <a href={props.ctaLink} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: t.accent, border: `1px solid ${t.accent}`, padding: "12px 24px", borderRadius: 12, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", fontFamily: fonts.body }}>{props.ctaText}</a>
                </div>
            </div>
        </section>
    )
}

FilmsGrid.defaultProps = {
    theme: "dark", sectionTag: "Cette semaine", sectionTitle: "\u00C0 l'affiche",
    sectionDesc: "D\u00e9couvrez notre s\u00e9lection de films \u00e0 l'affiche cette semaine au Cin\u00e9ma Alhambra.",
    film1Title: "Alter Ego", film1Meta: "Com\u00e9die \u2022 1h39", film1Badge: "VF", film1Poster: "",
    film2Title: "The Mastermind", film2Meta: "Policier \u2022 1h50", film2Badge: "VOST", film2Poster: "",
    film3Title: "L'Affaire Bojarski", film3Meta: "Drame, Policier \u2022 2h08", film3Badge: "VF", film3Poster: "",
    film4Title: "Soundtrack to a Coup d'\u00c9tat", film4Meta: "Documentaire \u2022 2h30", film4Badge: "VOST", film4Poster: "",
    ctaText: "Toute la programmation", ctaLink: "/a-laffiche",
}

addPropertyControls(FilmsGrid, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" }, sectionTitle: { type: ControlType.String, title: "Titre" }, sectionDesc: { type: ControlType.String, title: "Description" },
    film1Title: { type: ControlType.String, title: "Film 1 Titre" }, film1Meta: { type: ControlType.String, title: "Film 1 Meta" }, film1Badge: { type: ControlType.String, title: "Film 1 Badge" }, film1Poster: { type: ControlType.Image, title: "Film 1 Affiche" },
    film2Title: { type: ControlType.String, title: "Film 2 Titre" }, film2Meta: { type: ControlType.String, title: "Film 2 Meta" }, film2Badge: { type: ControlType.String, title: "Film 2 Badge" }, film2Poster: { type: ControlType.Image, title: "Film 2 Affiche" },
    film3Title: { type: ControlType.String, title: "Film 3 Titre" }, film3Meta: { type: ControlType.String, title: "Film 3 Meta" }, film3Badge: { type: ControlType.String, title: "Film 3 Badge" }, film3Poster: { type: ControlType.Image, title: "Film 3 Affiche" },
    film4Title: { type: ControlType.String, title: "Film 4 Titre" }, film4Meta: { type: ControlType.String, title: "Film 4 Meta" }, film4Badge: { type: ControlType.String, title: "Film 4 Badge" }, film4Poster: { type: ControlType.Image, title: "Film 4 Affiche" },
    ctaText: { type: ControlType.String, title: "CTA texte" }, ctaLink: { type: ControlType.String, title: "CTA lien" },
})
