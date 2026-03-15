// Hero Section — Framer Code Component
// Editable: badge text, title lines, subtitle, button labels & links

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    badgeText: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    primaryBtnText: string
    primaryBtnLink: string
    secondaryBtnText: string
    secondaryBtnLink: string
    theme: "dark" | "light"
}

export default function Hero(props: Props) {
    const {
        badgeText,
        titleLine1,
        titleLine2,
        subtitle,
        primaryBtnText,
        primaryBtnLink,
        secondaryBtnText,
        secondaryBtnLink,
        theme,
    } = props

    const t = colors[theme]

    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: t.bgPrimary,
                width: "100%",
            }}
        >
            {/* Background gradient */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(ellipse 80% 60% at 50% 40%, ${t.accentGlow} 0%, transparent 60%),
                        radial-gradient(ellipse 60% 80% at 20% 80%, rgba(194, 54, 54, 0.05) 0%, transparent 50%),
                        linear-gradient(180deg, ${t.bgPrimary} 0%, ${theme === "dark" ? "rgba(10,10,15,0.8)" : "rgba(234,231,225,0.8)"} 50%, ${t.bgPrimary} 100%)
                    `,
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    padding: "0 24px",
                    maxWidth: 900,
                }}
            >
                {/* Badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 20px",
                        border: `1px solid ${t.borderHover}`,
                        borderRadius: 100,
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        color: t.textSecondary,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        marginBottom: 32,
                        background: "rgba(255,255,255,0.02)",
                        fontFamily: fonts.body,
                    }}
                >
                    <span
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: t.accent,
                        }}
                    />
                    {badgeText}
                </div>

                {/* Title */}
                <h1
                    style={{
                        fontFamily: fonts.display,
                        fontWeight: 900,
                        lineHeight: 1.05,
                        marginBottom: 24,
                    }}
                >
                    <span
                        style={{
                            display: "block",
                            fontSize: "clamp(3rem, 8vw, 6.5rem)",
                            color: t.textPrimary,
                        }}
                    >
                        {titleLine1}
                    </span>
                    <span
                        style={{
                            display: "block",
                            fontSize: "clamp(3rem, 8vw, 6.5rem)",
                            color: t.accent,
                            fontStyle: "italic",
                        }}
                    >
                        {titleLine2}
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontSize: "1.15rem",
                        color: t.textSecondary,
                        lineHeight: 1.7,
                        marginBottom: 48,
                        fontWeight: 300,
                        fontFamily: fonts.body,
                    }}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />

                {/* Buttons */}
                <div
                    style={{
                        display: "flex",
                        gap: 16,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href={primaryBtnLink}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "14px 28px",
                            borderRadius: 12,
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            fontFamily: fonts.body,
                            background: t.accent,
                            color: "#fff",
                            textDecoration: "none",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        {primaryBtnText}
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
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "14px 28px",
                            borderRadius: 12,
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            fontFamily: fonts.body,
                            background:
                                theme === "dark"
                                    ? "rgba(255,255,255,0.06)"
                                    : "rgba(0,0,0,0.06)",
                            color: t.textPrimary,
                            border: `1px solid ${t.borderHover}`,
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        {secondaryBtnText}
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: "absolute",
                    bottom: 40,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    color: t.textMuted,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontFamily: fonts.body,
                }}
            >
                <div
                    style={{
                        width: 1,
                        height: 48,
                        background: `linear-gradient(180deg, ${t.accent} 0%, transparent 100%)`,
                    }}
                />
                <span>Découvrir</span>
            </div>
        </section>
    )
}

Hero.defaultProps = {
    badgeText: "Art et Essai — Calais Centre-Ville",
    titleLine1: "LE cinéma",
    titleLine2: "de Calais",
    subtitle:
        "De proximité. De qualité.<br>Recherche &bull; Patrimoine &bull; Répertoire &bull; Jeune Public",
    primaryBtnText: "Voir le programme",
    primaryBtnLink: "/a-laffiche",
    secondaryBtnText: "Horaires des séances",
    secondaryBtnLink: "/horaires",
    theme: "dark",
}

addPropertyControls(Hero, {
    theme: {
        type: ControlType.Enum,
        title: "Thème",
        options: ["dark", "light"],
        optionTitles: ["Sombre", "Clair"],
    },
    badgeText: { type: ControlType.String, title: "Badge" },
    titleLine1: { type: ControlType.String, title: "Titre ligne 1" },
    titleLine2: { type: ControlType.String, title: "Titre ligne 2" },
    subtitle: { type: ControlType.String, title: "Sous-titre (HTML)" },
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
