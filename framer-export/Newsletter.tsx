// Newsletter Section — Framer Code Component
// Editable: title, description, button text, placeholder

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    theme: "dark" | "light"
    title: string
    description: string
    placeholder: string
    buttonText: string
}

export default function Newsletter(props: Props) {
    const t = colors[props.theme]

    return (
        <section style={{ padding: "120px 0", background: t.bgSecondary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{
                    background: `linear-gradient(135deg, ${t.bgCard} 0%, rgba(194,54,54,0.03) 100%)`,
                    border: `1px solid ${t.borderHover}`, borderRadius: 24,
                    padding: 64, textAlign: "center", position: "relative", overflow: "hidden",
                }}>
                    {/* Glow */}
                    <div style={{
                        position: "absolute", top: -100, right: -100,
                        width: 300, height: 300,
                        background: `radial-gradient(circle, ${t.accentGlow} 0%, transparent 70%)`,
                        pointerEvents: "none",
                    }} />

                    {/* Icon */}
                    <div style={{ width: 64, height: 64, margin: "0 auto 24px", color: t.accent }}>
                        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" width="64" height="64">
                            <rect x="4" y="10" width="40" height="28" rx="4" />
                            <path d="M4 14l20 14 20-14" />
                        </svg>
                    </div>

                    <h2 style={{
                        fontFamily: fonts.display, fontSize: "2rem",
                        fontWeight: 700, marginBottom: 12, color: t.textPrimary,
                        position: "relative",
                    }}>
                        {props.title}
                    </h2>
                    <p style={{
                        color: t.textSecondary, marginBottom: 32,
                        fontSize: "1.05rem", fontFamily: fonts.body,
                        position: "relative",
                    }}>
                        {props.description}
                    </p>

                    <div style={{
                        display: "flex", gap: 12, maxWidth: 500,
                        margin: "0 auto", position: "relative",
                    }}>
                        <input
                            type="email"
                            placeholder={props.placeholder}
                            style={{
                                flex: 1, padding: "14px 20px", borderRadius: 12,
                                border: `1px solid ${t.borderHover}`, background: t.bgPrimary,
                                color: t.textPrimary, fontSize: "0.95rem",
                                fontFamily: fonts.body, outline: "none",
                            }}
                        />
                        <button style={{
                            display: "inline-flex", alignItems: "center",
                            padding: "14px 28px", borderRadius: 12,
                            fontSize: "0.95rem", fontWeight: 600,
                            fontFamily: fonts.body, background: t.accent,
                            color: "#fff", border: "none", cursor: "pointer",
                        }}>
                            {props.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

Newsletter.defaultProps = {
    theme: "dark",
    title: "Ne manquez rien",
    description: "Recevez tous les lundis le programme de la semaine directement dans votre boîte mail.",
    placeholder: "Votre adresse email",
    buttonText: "S'inscrire",
}

addPropertyControls(Newsletter, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    title: { type: ControlType.String, title: "Titre" },
    description: { type: ControlType.String, title: "Description" },
    placeholder: { type: ControlType.String, title: "Placeholder email" },
    buttonText: { type: ControlType.String, title: "Bouton" },
})
