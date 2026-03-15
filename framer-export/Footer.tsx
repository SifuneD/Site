import { addPropertyControls, ControlType } from "framer"

const t = { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", border: "rgba(255,255,255,0.06)" }
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Footer(props) {
    const col1Items = props.col1Links.split("\n").filter(Boolean)
    const col2Items = props.col2Links.split("\n").filter(Boolean)

    return (
        <footer style={{ padding: "80px 0 40px", borderTop: `1px solid ${t.border}`, background: "#1a1a2e", color: t.textPrimary, width: "100%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: `1px solid ${t.border}` }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                            <svg viewBox="0 0 48 48" fill="none" width="40" height="40" style={{ color: t.accent }}>
                                <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
                                <circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.6" /><circle cx="12" cy="24" r="3" fill="currentColor" opacity="0.6" /><circle cx="12" cy="34" r="3" fill="currentColor" opacity="0.6" />
                                <circle cx="36" cy="14" r="3" fill="currentColor" opacity="0.6" /><circle cx="36" cy="24" r="3" fill="currentColor" opacity="0.6" /><circle cx="36" cy="34" r="3" fill="currentColor" opacity="0.6" />
                                <rect x="18" y="14" width="12" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.1 }}>{props.logoName}</span>
                                <span style={{ fontSize: "0.7rem", color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.15em" }}>{props.logoSub}</span>
                            </div>
                        </div>
                        <p style={{ color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 24, fontFamily: fonts.body }}>{props.description}</p>
                    </div>
                    <div>
                        <h4 style={{ fontFamily: fonts.heading, fontSize: "0.9rem", fontWeight: 600, marginBottom: 20 }}>{props.col1Title}</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>{col1Items.map((item, i) => <li key={i} style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>{item}</li>)}</ul>
                    </div>
                    <div>
                        <h4 style={{ fontFamily: fonts.heading, fontSize: "0.9rem", fontWeight: 600, marginBottom: 20 }}>{props.col2Title}</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>{col2Items.map((item, i) => <li key={i} style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>{item}</li>)}</ul>
                    </div>
                    <div>
                        <h4 style={{ fontFamily: fonts.heading, fontSize: "0.9rem", fontWeight: 600, marginBottom: 20 }}>Contact</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>{props.address}</li>
                            <li style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>{props.phone}</li>
                            <li style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>{props.email}</li>
                        </ul>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 32, flexWrap: "wrap", gap: 16 }}>
                    <p style={{ fontSize: "0.8rem", color: t.textMuted, fontFamily: fonts.body }}>{props.copyright}</p>
                </div>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    logoName: "Alhambra", logoSub: "Cin\u00e9ma Calais",
    description: "Cin\u00e9ma de centre-ville class\u00e9 Art et Essai. Membre du r\u00e9seau Europa Cin\u00e9mas.",
    col1Title: "Programmation", col1Links: "\u00C0 l'affiche\nHoraires des s\u00e9ances\nProchainement",
    col2Title: "Le cin\u00e9ma", col2Links: "\u00C0 propos\nInfos pratiques\n\u00c9coles & centres de loisirs",
    address: "2 rue Jean Jaur\u00e8s, 62100 Calais", phone: "03 21 17 73 33", email: "contact@cinema-alhambra.org",
    copyright: "\u00A9 2026 Cin\u00e9ma Alhambra Calais. Tous droits r\u00e9serv\u00e9s.",
}

addPropertyControls(Footer, {
    logoName: { type: ControlType.String, title: "Logo" }, logoSub: { type: ControlType.String, title: "Logo sous-titre" },
    description: { type: ControlType.String, title: "Description" },
    col1Title: { type: ControlType.String, title: "Col 1 titre" }, col1Links: { type: ControlType.String, title: "Col 1 liens (1/ligne)" },
    col2Title: { type: ControlType.String, title: "Col 2 titre" }, col2Links: { type: ControlType.String, title: "Col 2 liens (1/ligne)" },
    address: { type: ControlType.String, title: "Adresse" }, phone: { type: ControlType.String, title: "T\u00e9l\u00e9phone" }, email: { type: ControlType.String, title: "Email" },
    copyright: { type: ControlType.String, title: "Copyright" },
})
