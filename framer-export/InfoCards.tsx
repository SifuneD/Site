import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", border: "rgba(255,255,255,0.06)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", textMuted: "#8a8a9a", accent: "#b52e2e", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

function Card({ title, text, detail, link, linkText, t }) {
    return (
        <div style={{ padding: "32px 24px", background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 20, textAlign: "center" }}>
            <div style={{ width: 48, height: 48, margin: "0 auto 20px", color: t.accent, fontSize: "1.8rem" }}>📍</div>
            <h3 style={{ fontFamily: fonts.heading, fontSize: "1rem", fontWeight: 600, marginBottom: 8, color: t.textPrimary }}>{title}</h3>
            <p style={{ fontSize: "0.9rem", color: t.textSecondary, lineHeight: 1.5, marginBottom: 8, fontFamily: fonts.body }}>{text}</p>
            {detail && <span style={{ fontSize: "0.8rem", color: t.textMuted }}>{detail}</span>}
            {link && linkText && <a href={link} style={{ display: "inline-block", fontSize: "0.85rem", fontWeight: 600, color: t.accent, marginTop: 4, textDecoration: "none" }}>{linkText}</a>}
        </div>
    )
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function InfoCards(props) {
    const t = colors[props.theme]
    return (
        <section style={{ padding: "120px 0", background: t.bgPrimary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: t.accent, marginBottom: 16, padding: "6px 16px", border: "1px solid rgba(194,54,54,0.25)", borderRadius: 100, background: "rgba(194,54,54,0.06)", fontFamily: fonts.body }}>{props.sectionTag}</span>
                    <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, color: t.textPrimary }}>{props.sectionTitle}</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                    <Card title={props.c1Title} text={props.c1Text} detail={props.c1Detail} t={t} />
                    <Card title={props.c2Title} text={props.c2Text} detail={props.c2Detail} t={t} />
                    <Card title={props.c3Title} text={props.c3Text} detail={props.c3Detail} t={t} />
                    <Card title={props.c4Title} text={props.c4Text} link={props.c4Link} linkText={props.c4LinkText} t={t} />
                </div>
            </div>
        </section>
    )
}

InfoCards.defaultProps = {
    theme: "dark", sectionTag: "Venir au cin\u00e9ma", sectionTitle: "Infos pratiques",
    c1Title: "Adresse", c1Text: "2 rue Jean Jaur\u00e8s, 62100 Calais", c1Detail: "Centre-ville, suivre H\u00f4tel de Ville",
    c2Title: "T\u00e9l\u00e9phone", c2Text: "+33 (0)3 21 17 73 33", c2Detail: "Renseignements et r\u00e9servations",
    c3Title: "Email", c3Text: "contact@cinema-alhambra.org", c3Detail: "Nous r\u00e9pondons sous 48h",
    c4Title: "Tarifs & Cartes", c4Text: "Cartes d'abonnement disponibles", c4Link: "/infos-pratiques", c4LinkText: "Voir les tarifs",
}

addPropertyControls(InfoCards, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" }, sectionTitle: { type: ControlType.String, title: "Titre" },
    c1Title: { type: ControlType.String, title: "Carte 1" }, c1Text: { type: ControlType.String, title: "C1 Texte" }, c1Detail: { type: ControlType.String, title: "C1 D\u00e9tail" },
    c2Title: { type: ControlType.String, title: "Carte 2" }, c2Text: { type: ControlType.String, title: "C2 Texte" }, c2Detail: { type: ControlType.String, title: "C2 D\u00e9tail" },
    c3Title: { type: ControlType.String, title: "Carte 3" }, c3Text: { type: ControlType.String, title: "C3 Texte" }, c3Detail: { type: ControlType.String, title: "C3 D\u00e9tail" },
    c4Title: { type: ControlType.String, title: "Carte 4" }, c4Text: { type: ControlType.String, title: "C4 Texte" }, c4Link: { type: ControlType.String, title: "C4 Lien" }, c4LinkText: { type: ControlType.String, title: "C4 Texte lien" },
})
