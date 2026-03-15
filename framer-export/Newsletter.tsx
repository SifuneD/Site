import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgSecondary: "#111118", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", borderHover: "rgba(255,255,255,0.12)" },
    light: { bgPrimary: "#f5f3ef", bgSecondary: "#eae7e1", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", borderHover: "rgba(0,0,0,0.15)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif" }

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Newsletter(props) {
    const t = colors[props.theme]
    return (
        <section style={{ padding: "120px 0", background: t.bgSecondary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ background: `linear-gradient(135deg, ${t.bgCard}, rgba(194,54,54,0.03))`, border: `1px solid ${t.borderHover}`, borderRadius: 24, padding: 64, textAlign: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ width: 64, height: 64, margin: "0 auto 24px", color: t.accent, fontSize: "2.5rem" }}>✉</div>
                    <h2 style={{ fontFamily: fonts.display, fontSize: "2rem", fontWeight: 700, marginBottom: 12, color: t.textPrimary }}>{props.title}</h2>
                    <p style={{ color: t.textSecondary, marginBottom: 32, fontSize: "1.05rem", fontFamily: fonts.body }}>{props.description}</p>
                    <div style={{ display: "flex", gap: 12, maxWidth: 500, margin: "0 auto" }}>
                        <input type="email" placeholder={props.placeholder} style={{ flex: 1, padding: "14px 20px", borderRadius: 12, border: `1px solid ${t.borderHover}`, background: t.bgPrimary, color: t.textPrimary, fontSize: "0.95rem", fontFamily: fonts.body, outline: "none" }} />
                        <button style={{ padding: "14px 28px", borderRadius: 12, fontSize: "0.95rem", fontWeight: 600, fontFamily: fonts.body, background: t.accent, color: "#fff", border: "none", cursor: "pointer" }}>{props.buttonText}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

Newsletter.defaultProps = { theme: "dark", title: "Ne manquez rien", description: "Recevez tous les lundis le programme de la semaine directement dans votre bo\u00eete mail.", placeholder: "Votre adresse email", buttonText: "S'inscrire" }

addPropertyControls(Newsletter, {
    theme: { type: ControlType.Enum, title: "Th\u00e8me", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    title: { type: ControlType.String, title: "Titre" }, description: { type: ControlType.String, title: "Description" },
    placeholder: { type: ControlType.String, title: "Placeholder" }, buttonText: { type: ControlType.String, title: "Bouton" },
})
