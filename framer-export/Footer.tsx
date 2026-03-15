// Footer — Framer Code Component
// Editable: brand info, link groups, contact, social links

import { addPropertyControls, ControlType } from "framer"
import { colors, fonts } from "./tokens"

interface Props {
    theme: "dark" | "light"
    logoName: string
    logoSub: string
    description: string
    instagramUrl: string
    facebookUrl: string
    col1Title: string
    col1Links: string
    col2Title: string
    col2Links: string
    address: string
    phone: string
    email: string
    copyright: string
    partner1Name: string
    partner1Url: string
    partner2Name: string
    partner2Url: string
}

export default function Footer(props: Props) {
    // Footer always uses dark colors
    const t = colors.dark

    const col1Items = props.col1Links.split("\n").filter(Boolean)
    const col2Items = props.col2Links.split("\n").filter(Boolean)

    return (
        <footer style={{
            padding: "80px 0 40px",
            borderTop: `1px solid ${t.border}`,
            background: props.theme === "light" ? "#1a1a2e" : t.bgPrimary,
            color: t.textPrimary, width: "100%",
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{
                    display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                    gap: 48, paddingBottom: 48,
                    borderBottom: `1px solid ${t.border}`,
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                            <div style={{ width: 40, height: 40, color: t.accent }}>
                                <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
                                    <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
                                    <circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="12" cy="24" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="12" cy="34" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="36" cy="14" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="36" cy="24" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="36" cy="34" r="3" fill="currentColor" opacity="0.6" />
                                    <rect x="18" y="14" width="12" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.1 }}>
                                    {props.logoName}
                                </span>
                                <span style={{ fontSize: "0.7rem", color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                                    {props.logoSub}
                                </span>
                            </div>
                        </div>
                        <p style={{ color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 24, fontFamily: fonts.body }}>
                            {props.description}
                        </p>
                        <div style={{ display: "flex", gap: 12 }}>
                            {props.instagramUrl && (
                                <a href={props.instagramUrl} target="_blank" rel="noopener noreferrer" style={{
                                    width: 42, height: 42, display: "flex", alignItems: "center",
                                    justifyContent: "center", borderRadius: 12, background: t.bgCard,
                                    border: `1px solid ${t.border}`, color: t.textSecondary, textDecoration: "none",
                                }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="5" />
                                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>
                            )}
                            {props.facebookUrl && (
                                <a href={props.facebookUrl} target="_blank" rel="noopener noreferrer" style={{
                                    width: 42, height: 42, display: "flex", alignItems: "center",
                                    justifyContent: "center", borderRadius: 12, background: t.bgCard,
                                    border: `1px solid ${t.border}`, color: t.textSecondary, textDecoration: "none",
                                }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Col 1 */}
                    <div>
                        <h4 style={{ fontFamily: fonts.heading, fontSize: "0.9rem", fontWeight: 600, marginBottom: 20 }}>
                            {props.col1Title}
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {col1Items.map((item, i) => (
                                <li key={i} style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 style={{ fontFamily: fonts.heading, fontSize: "0.9rem", fontWeight: 600, marginBottom: 20 }}>
                            {props.col2Title}
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {col2Items.map((item, i) => (
                                <li key={i} style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontFamily: fonts.heading, fontSize: "0.9rem", fontWeight: 600, marginBottom: 20 }}>
                            Contact
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {props.address.split("\n").map((line, i) => (
                                <li key={i} style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>
                                    {line}
                                </li>
                            ))}
                            <li style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>
                                {props.phone}
                            </li>
                            <li style={{ marginBottom: 12, fontSize: "0.875rem", color: t.textSecondary, fontFamily: fonts.body }}>
                                {props.email}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", paddingTop: 32,
                    flexWrap: "wrap", gap: 16,
                }}>
                    <p style={{ fontSize: "0.8rem", color: t.textMuted, fontFamily: fonts.body }}>
                        {props.copyright}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: t.textMuted, fontFamily: fonts.body }}>
                        <span>Membre de</span>
                        <a href={props.partner1Url} target="_blank" rel="noopener noreferrer" style={{ color: t.textSecondary, textDecoration: "none" }}>
                            {props.partner1Name}
                        </a>
                        <span>&bull;</span>
                        <a href={props.partner2Url} target="_blank" rel="noopener noreferrer" style={{ color: t.textSecondary, textDecoration: "none" }}>
                            {props.partner2Name}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    theme: "dark",
    logoName: "Alhambra",
    logoSub: "Cinéma Calais",
    description: "Cinéma de centre-ville classé Art et Essai. Membre du réseau Europa Cinémas et de l'association De la suite dans les images.",
    instagramUrl: "https://www.instagram.com/alhambracalais/",
    facebookUrl: "https://www.facebook.com/alhambracalais",
    col1Title: "Programmation",
    col1Links: "À l'affiche\nHoraires des séances\nProchainement\nArchives films",
    col2Title: "Le cinéma",
    col2Links: "À propos\nInfos pratiques\nÉcoles & centres de loisirs",
    address: "2 rue Jean Jaurès\n62100 Calais",
    phone: "03 21 17 73 33",
    email: "contact@cinema-alhambra.org",
    copyright: "\u00A9 2026 Cinéma Alhambra Calais. Tous droits réservés.",
    partner1Name: "Europa Cinémas",
    partner1Url: "https://www.europa-cinemas.org/",
    partner2Name: "De la suite dans les images",
    partner2Url: "https://www.delasuitedanslesimages.org/",
}

addPropertyControls(Footer, {
    theme: { type: ControlType.Enum, title: "Thème", options: ["dark", "light"], optionTitles: ["Sombre", "Clair"] },
    logoName: { type: ControlType.String, title: "Logo nom" },
    logoSub: { type: ControlType.String, title: "Logo sous-titre" },
    description: { type: ControlType.String, title: "Description" },
    instagramUrl: { type: ControlType.String, title: "Instagram URL" },
    facebookUrl: { type: ControlType.String, title: "Facebook URL" },
    col1Title: { type: ControlType.String, title: "Colonne 1 titre" },
    col1Links: { type: ControlType.String, title: "Colonne 1 liens (1/ligne)" },
    col2Title: { type: ControlType.String, title: "Colonne 2 titre" },
    col2Links: { type: ControlType.String, title: "Colonne 2 liens (1/ligne)" },
    address: { type: ControlType.String, title: "Adresse (1/ligne)" },
    phone: { type: ControlType.String, title: "Téléphone" },
    email: { type: ControlType.String, title: "Email" },
    copyright: { type: ControlType.String, title: "Copyright" },
    partner1Name: { type: ControlType.String, title: "Partenaire 1" },
    partner1Url: { type: ControlType.String, title: "Partenaire 1 URL" },
    partner2Name: { type: ControlType.String, title: "Partenaire 2" },
    partner2Url: { type: ControlType.String, title: "Partenaire 2 URL" },
})
