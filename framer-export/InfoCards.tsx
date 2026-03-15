// Infos Pratiques Section — Framer Code Component
// Editable: section header, 4 info cards

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    theme: "dark" | "light"
    sectionTag: string
    sectionTitle: string
    card1Title: string
    card1Text: string
    card1Detail: string
    card2Title: string
    card2Text: string
    card2Detail: string
    card3Title: string
    card3Text: string
    card3Detail: string
    card4Title: string
    card4Text: string
    card4Link: string
    card4LinkText: string
}

function InfoCard({ title, text, detail, link, linkText, t, theme }: any) {
    return (
        <div style={{
            padding: "32px 24px", background: t.bgCard,
            border: `1px solid ${t.border}`, borderRadius: 20, textAlign: "center",
            boxShadow: theme === "light" ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        }}>
            <div style={{
                width: 48, height: 48, margin: "0 auto 20px", color: t.accent,
            }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            </div>
            <h3 style={{
                fontFamily: fonts.heading, fontSize: "1rem",
                fontWeight: 600, marginBottom: 8, color: t.textPrimary,
            }}>
                {title}
            </h3>
            <p style={{
                fontSize: "0.9rem", color: t.textSecondary,
                lineHeight: 1.5, marginBottom: 8, fontFamily: fonts.body,
            }}
                dangerouslySetInnerHTML={{ __html: text }}
            />
            {detail && (
                <span style={{ fontSize: "0.8rem", color: t.textMuted }}>{detail}</span>
            )}
            {link && linkText && (
                <a href={link} style={{
                    display: "inline-block", fontSize: "0.85rem",
                    fontWeight: 600, color: t.accent, marginTop: 4,
                    textDecoration: "none",
                }}>
                    {linkText}
                </a>
            )}
        </div>
    )
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function InfoCards(props: Props) {
    const t = colors[props.theme]

    return (
        <section style={{ padding: "120px 0", background: t.bgPrimary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span style={{
                        display: "inline-block", fontSize: "0.75rem", fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: "0.2em", color: t.accent,
                        marginBottom: 16, padding: "6px 16px",
                        border: "1px solid rgba(194,54,54,0.25)", borderRadius: 100,
                        background: "rgba(194,54,54,0.06)", fontFamily: fonts.body,
                    }}>
                        {props.sectionTag}
                    </span>
                    <h2 style={{
                        fontFamily: fonts.display, fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 700, lineHeight: 1.15, color: t.textPrimary,
                    }}>
                        {props.sectionTitle}
                    </h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                    <InfoCard title={props.card1Title} text={props.card1Text} detail={props.card1Detail} t={t} theme={props.theme} />
                    <InfoCard title={props.card2Title} text={props.card2Text} detail={props.card2Detail} t={t} theme={props.theme} />
                    <InfoCard title={props.card3Title} text={props.card3Text} detail={props.card3Detail} t={t} theme={props.theme} />
                    <InfoCard title={props.card4Title} text={props.card4Text} link={props.card4Link} linkText={props.card4LinkText} t={t} theme={props.theme} />
                </div>
            </div>
        </section>
    )
}

InfoCards.defaultProps = {
    theme: "dark",
    sectionTag: "Venir au cinéma",
    sectionTitle: "Infos pratiques",
    card1Title: "Adresse",
    card1Text: "2 rue Jean Jaurès<br>62100 Calais",
    card1Detail: "Centre-ville, suivre Hôtel de Ville",
    card2Title: "Téléphone",
    card2Text: "+33 (0)3 21 17 73 33",
    card2Detail: "Renseignements et réservations",
    card3Title: "Email",
    card3Text: "contact@cinema-alhambra.org",
    card3Detail: "Nous répondons sous 48h",
    card4Title: "Tarifs & Cartes",
    card4Text: "Cartes d'abonnement disponibles",
    card4Link: "/infos-pratiques",
    card4LinkText: "Voir les tarifs",
}

addPropertyControls(InfoCards, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    sectionTitle: { type: ControlType.String, title: "Titre" },
    card1Title: { type: ControlType.String, title: "Carte 1 — Titre" },
    card1Text: { type: ControlType.String, title: "Carte 1 — Texte (HTML)" },
    card1Detail: { type: ControlType.String, title: "Carte 1 — Détail" },
    card2Title: { type: ControlType.String, title: "Carte 2 — Titre" },
    card2Text: { type: ControlType.String, title: "Carte 2 — Texte" },
    card2Detail: { type: ControlType.String, title: "Carte 2 — Détail" },
    card3Title: { type: ControlType.String, title: "Carte 3 — Titre" },
    card3Text: { type: ControlType.String, title: "Carte 3 — Texte" },
    card3Detail: { type: ControlType.String, title: "Carte 3 — Détail" },
    card4Title: { type: ControlType.String, title: "Carte 4 — Titre" },
    card4Text: { type: ControlType.String, title: "Carte 4 — Texte" },
    card4Link: { type: ControlType.String, title: "Carte 4 — Lien" },
    card4LinkText: { type: ControlType.String, title: "Carte 4 — Texte lien" },
})
