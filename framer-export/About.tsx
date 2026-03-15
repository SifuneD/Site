// About Section — Framer Code Component
// Editable: title, description, labels, stats, CTA

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    theme: "dark" | "light"
    sectionTag: string
    titleLine1: string
    titleLine2: string
    description: string
    label1Title: string
    label1Sub: string
    label2Title: string
    label2Sub: string
    label3Title: string
    label3Sub: string
    stat1Number: string
    stat1Label: string
    stat2Number: string
    stat2Label: string
    stat3Number: string
    stat3Label: string
    ctaText: string
    ctaLink: string
    cinemaImage: string
    addressLine1: string
    addressLine2: string
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function About(props: Props) {
    const t = colors[props.theme]

    const labels = [
        { title: props.label1Title, sub: props.label1Sub },
        { title: props.label2Title, sub: props.label2Sub },
        { title: props.label3Title, sub: props.label3Sub },
    ]

    const stats = [
        { number: props.stat1Number, label: props.stat1Label },
        { number: props.stat2Number, label: props.stat2Label },
        { number: props.stat3Number, label: props.stat3Label },
    ]

    return (
        <section style={{ padding: "120px 0", background: t.bgSecondary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                    {/* Left: Content */}
                    <div>
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
                            fontWeight: 700, marginBottom: 16, lineHeight: 1.15, color: t.textPrimary,
                        }}>
                            {props.titleLine1}<br />
                            <span style={{ color: t.accent }}>{props.titleLine2}</span>
                        </h2>
                        <p style={{
                            fontSize: "1.05rem", color: t.textSecondary, lineHeight: 1.8,
                            marginBottom: 32, fontFamily: fonts.body,
                        }}
                            dangerouslySetInnerHTML={{ __html: props.description }}
                        />

                        {/* Labels */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                            {labels.map((label, i) => (
                                <div key={i} style={{
                                    display: "flex", alignItems: "center", gap: 16,
                                    padding: "16px 20px", background: t.bgCard,
                                    borderRadius: 12, border: `1px solid ${t.border}`,
                                }}>
                                    <div style={{
                                        width: 44, height: 44, display: "flex", alignItems: "center",
                                        justifyContent: "center", borderRadius: 10,
                                        background: t.accentGlow, color: t.accent, flexShrink: 0,
                                    }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                            <line x1="9" y1="9" x2="9.01" y2="9" />
                                            <line x1="15" y1="9" x2="15.01" y2="9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong style={{ display: "block", fontFamily: fonts.heading, fontSize: "0.95rem", color: t.textPrimary }}>
                                            {label.title}
                                        </strong>
                                        <span style={{ fontSize: "0.8rem", color: t.textMuted }}>{label.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href={props.ctaLink} style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            padding: "14px 28px", borderRadius: 12, fontSize: "0.95rem",
                            fontWeight: 600, fontFamily: fonts.body, background: t.accent,
                            color: "#fff", textDecoration: "none",
                        }}>
                            {props.ctaText}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Right: Visual */}
                    <div>
                        <div style={{
                            borderRadius: 20, overflow: "hidden", border: `1px solid ${t.border}`,
                            background: t.bgCard, aspectRatio: "4/3", display: "flex",
                            alignItems: "center", justifyContent: "center",
                        }}>
                            {props.cinemaImage ? (
                                <img src={props.cinemaImage} alt="Cinéma Alhambra" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            ) : (
                                <div style={{ textAlign: "center", color: t.textMuted, padding: 40 }}>
                                    <p style={{ fontFamily: fonts.display, fontSize: "1.25rem", color: t.textSecondary, marginBottom: 4 }}>
                                        Cinéma Alhambra
                                    </p>
                                    <span style={{ fontSize: "0.85rem" }}>{props.addressLine1}, {props.addressLine2}</span>
                                </div>
                            )}
                        </div>

                        {/* Stats */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
                            {stats.map((stat, i) => (
                                <div key={i} style={{
                                    textAlign: "center", padding: "20px 16px",
                                    background: t.bgCard, borderRadius: 12,
                                    border: `1px solid ${t.border}`,
                                }}>
                                    <span style={{
                                        display: "block", fontFamily: fonts.display,
                                        fontSize: "2rem", fontWeight: 700, color: t.accent,
                                        lineHeight: 1, marginBottom: 4,
                                    }}>
                                        {stat.number}
                                    </span>
                                    <span style={{
                                        fontSize: "0.8rem", color: t.textMuted,
                                        textTransform: "uppercase", letterSpacing: "0.1em",
                                    }}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

About.defaultProps = {
    theme: "dark",
    sectionTag: "Notre histoire",
    titleLine1: "Le Cinéma",
    titleLine2: "Alhambra",
    description: 'Situé au coeur de Calais, le Cinéma Alhambra est un cinéma de proximité classé <strong>Art et Essai</strong> avec les labels Recherche-Découverte, Patrimoine-Répertoire et Jeune Public. Membre du réseau <strong>Europa Cinémas</strong> et de l\'association <strong>De la suite dans les images</strong>.',
    label1Title: "Recherche", label1Sub: "Découverte",
    label2Title: "Patrimoine", label2Sub: "Répertoire",
    label3Title: "Jeune Public", label3Sub: "Familles",
    stat1Number: "3", stat1Label: "Salles",
    stat2Number: "Art", stat2Label: "& Essai",
    stat3Number: "3", stat3Label: "Labels",
    ctaText: "En savoir plus", ctaLink: "/le-cinema",
    cinemaImage: "", addressLine1: "2 rue Jean Jaurès", addressLine2: "Calais",
}

addPropertyControls(About, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    sectionTag: { type: ControlType.String, title: "Tag" },
    titleLine1: { type: ControlType.String, title: "Titre L1" },
    titleLine2: { type: ControlType.String, title: "Titre L2 (accent)" },
    description: { type: ControlType.String, title: "Description (HTML)" },
    label1Title: { type: ControlType.String, title: "Label 1 titre" },
    label1Sub: { type: ControlType.String, title: "Label 1 sous-titre" },
    label2Title: { type: ControlType.String, title: "Label 2 titre" },
    label2Sub: { type: ControlType.String, title: "Label 2 sous-titre" },
    label3Title: { type: ControlType.String, title: "Label 3 titre" },
    label3Sub: { type: ControlType.String, title: "Label 3 sous-titre" },
    stat1Number: { type: ControlType.String, title: "Stat 1 nombre" },
    stat1Label: { type: ControlType.String, title: "Stat 1 label" },
    stat2Number: { type: ControlType.String, title: "Stat 2 nombre" },
    stat2Label: { type: ControlType.String, title: "Stat 2 label" },
    stat3Number: { type: ControlType.String, title: "Stat 3 nombre" },
    stat3Label: { type: ControlType.String, title: "Stat 3 label" },
    ctaText: { type: ControlType.String, title: "CTA texte" },
    ctaLink: { type: ControlType.String, title: "CTA lien" },
    cinemaImage: { type: ControlType.Image, title: "Photo cinéma" },
    addressLine1: { type: ControlType.String, title: "Adresse L1" },
    addressLine2: { type: ControlType.String, title: "Adresse L2" },
})
