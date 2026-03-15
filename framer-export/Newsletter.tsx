import React from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgSecondary: "#111118", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", accent: "#c23636", accentHover: "#d64545", accentGlow: "rgba(194,54,54,0.15)", borderHover: "rgba(255,255,255,0.12)" },
    light: { bgPrimary: "#f5f3ef", bgSecondary: "#eae7e1", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", accent: "#b52e2e", accentHover: "#cc3a3a", accentGlow: "rgba(181,46,46,0.08)", borderHover: "rgba(0,0,0,0.15)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif" }

function getStyles(t: typeof colors.dark) {
    return `
@keyframes alh-news-reveal {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-news-section {
    padding: 120px 0;
    background: ${t.bgSecondary};
    width: 100%;
}

.alh-news-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.alh-news-card {
    background: linear-gradient(135deg, ${t.bgCard}, rgba(194,54,54,0.03));
    border: 1px solid ${t.borderHover};
    border-radius: 24px;
    padding: 64px;
    text-align: center;
    position: relative;
    overflow: hidden;
    animation: alh-news-reveal 0.7s ease both;
}

.alh-news-card::before {
    content: '';
    position: absolute;
    top: -80px;
    right: -80px;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: radial-gradient(circle, ${t.accentGlow} 0%, transparent 70%);
    pointer-events: none;
}

.alh-news-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
}

.alh-news-title {
    font-family: ${fonts.display};
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 12px;
    color: ${t.textPrimary};
    position: relative;
    z-index: 1;
}

.alh-news-desc {
    color: ${t.textSecondary};
    margin: 0 0 32px;
    font-size: 1.05rem;
    font-family: ${fonts.body};
    position: relative;
    z-index: 1;
}

.alh-news-form {
    display: flex;
    gap: 12px;
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.alh-news-input {
    flex: 1;
    padding: 14px 20px;
    border-radius: 12px;
    border: 1px solid ${t.borderHover};
    background: ${t.bgPrimary};
    color: ${t.textPrimary};
    font-size: 0.95rem;
    font-family: ${fonts.body};
    outline: none;
    transition: border-color 0.3s ease;
}

.alh-news-input:focus {
    border-color: ${t.accent};
}

.alh-news-input::placeholder {
    color: ${t.textSecondary};
    opacity: 0.6;
}

.alh-news-btn {
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: ${fonts.body};
    background: ${t.accent};
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    white-space: nowrap;
}

.alh-news-btn:hover {
    background: ${t.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(194,54,54,0.3);
}

@media (max-width: 768px) {
    .alh-news-card {
        padding: 40px 24px;
    }
    .alh-news-form {
        flex-direction: column;
    }
    .alh-news-section {
        padding: 80px 0;
    }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Newsletter(props) {
    const t = colors[props.theme]

    return (
        <>
            <style>{getStyles(t)}</style>
            <section className="alh-news-section">
                <div className="alh-news-container">
                    <div className="alh-news-card">
                        <div className="alh-news-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <polyline points="22,4 12,13 2,4" />
                            </svg>
                        </div>
                        <h2 className="alh-news-title">{props.title}</h2>
                        <p className="alh-news-desc">{props.description}</p>
                        <div className="alh-news-form">
                            <input
                                type="email"
                                placeholder={props.placeholder}
                                className="alh-news-input"
                            />
                            <button className="alh-news-btn">{props.buttonText}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
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
    placeholder: { type: ControlType.String, title: "Placeholder" },
    buttonText: { type: ControlType.String, title: "Bouton" },
})
