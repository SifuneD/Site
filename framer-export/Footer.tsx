import React from "react"
import { addPropertyControls, ControlType } from "framer"

const t = { bgPrimary: "#0a0a0f", bgFooter: "#1a1a2e", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", textMuted: "#5e5e72", accent: "#c23636", border: "rgba(255,255,255,0.06)" }
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif", heading: "'Space Grotesk', sans-serif" }

const css = `
.alh-foot-section {
    padding: 80px 0 40px;
    border-top: 1px solid ${t.border};
    background: ${t.bgFooter};
    color: ${t.textPrimary};
    width: 100%;
}

.alh-foot-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.alh-foot-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid ${t.border};
}

.alh-foot-brand-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.alh-foot-brand-name {
    font-family: ${fonts.display};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.1;
    color: ${t.textPrimary};
}

.alh-foot-brand-sub {
    font-size: 0.7rem;
    color: ${t.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.alh-foot-desc {
    color: ${t.textSecondary};
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 24px;
    font-family: ${fonts.body};
}

.alh-foot-social {
    display: flex;
    gap: 12px;
}

.alh-foot-social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${t.border};
    color: ${t.textSecondary};
    text-decoration: none;
    transition: color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

.alh-foot-social-link:hover {
    color: ${t.accent};
    border-color: ${t.accent};
    transform: translateY(-2px);
}

.alh-foot-col-title {
    font-family: ${fonts.heading};
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 20px;
    color: ${t.textPrimary};
}

.alh-foot-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.alh-foot-list li {
    margin-bottom: 12px;
}

.alh-foot-link {
    font-size: 0.875rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
    text-decoration: none;
    transition: color 0.3s ease;
}

.alh-foot-link:hover {
    color: ${t.accent};
}

.alh-foot-contact-item {
    font-size: 0.875rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
    margin-bottom: 12px;
}

.alh-foot-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
    flex-wrap: wrap;
    gap: 16px;
}

.alh-foot-copyright {
    font-size: 0.8rem;
    color: ${t.textMuted};
    font-family: ${fonts.body};
    margin: 0;
}

.alh-foot-partners {
    font-size: 0.8rem;
    color: ${t.textMuted};
    font-family: ${fonts.body};
    margin: 0;
}

.alh-foot-partners a {
    color: ${t.textSecondary};
    text-decoration: none;
    transition: color 0.3s ease;
}

.alh-foot-partners a:hover {
    color: ${t.accent};
}

@media (max-width: 1024px) {
    .alh-foot-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .alh-foot-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    .alh-foot-bottom {
        flex-direction: column;
        align-items: flex-start;
    }
    .alh-foot-section {
        padding: 60px 0 32px;
    }
}
`

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Footer(props) {
    const col1Items = props.col1Links.split("\n").filter(Boolean)
    const col2Items = props.col2Links.split("\n").filter(Boolean)

    return (
        <>
            <style>{css}</style>
            <footer className="alh-foot-section">
                <div className="alh-foot-container">
                    <div className="alh-foot-grid">
                        {/* Brand column */}
                        <div>
                            <div className="alh-foot-brand-logo">
                                <svg viewBox="0 0 48 48" fill="none" width="40" height="40" style={{ color: t.accent }}>
                                    <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
                                    <circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="12" cy="24" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="12" cy="34" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="36" cy="14" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="36" cy="24" r="3" fill="currentColor" opacity="0.6" />
                                    <circle cx="36" cy="34" r="3" fill="currentColor" opacity="0.6" />
                                    <rect x="18" y="14" width="12" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span className="alh-foot-brand-name">{props.logoName}</span>
                                    <span className="alh-foot-brand-sub">{props.logoSub}</span>
                                </div>
                            </div>
                            <p className="alh-foot-desc">{props.description}</p>
                            <div className="alh-foot-social">
                                {/* Instagram */}
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="alh-foot-social-link" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="5" />
                                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>
                                {/* Facebook */}
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="alh-foot-social-link" aria-label="Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Programmation column */}
                        <div>
                            <h4 className="alh-foot-col-title">{props.col1Title}</h4>
                            <ul className="alh-foot-list">
                                {col1Items.map((item, i) => (
                                    <li key={i}>
                                        <a href="#" className="alh-foot-link">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Le cinema column */}
                        <div>
                            <h4 className="alh-foot-col-title">{props.col2Title}</h4>
                            <ul className="alh-foot-list">
                                {col2Items.map((item, i) => (
                                    <li key={i}>
                                        <a href="#" className="alh-foot-link">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact column */}
                        <div>
                            <h4 className="alh-foot-col-title">Contact</h4>
                            <div className="alh-foot-contact-item">{props.address}</div>
                            <div className="alh-foot-contact-item">{props.phone}</div>
                            <div className="alh-foot-contact-item">
                                <a href={`mailto:${props.email}`} className="alh-foot-link">{props.email}</a>
                            </div>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="alh-foot-bottom">
                        <p className="alh-foot-copyright">{props.copyright}</p>
                        <p className="alh-foot-partners">
                            Membre de <a href="#">Europa Cinémas</a> &bull; <a href="#">De la suite dans les images</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

Footer.defaultProps = {
    logoName: "Alhambra", logoSub: "Cinéma Calais",
    description: "Cinéma de centre-ville classé Art et Essai. Membre du réseau Europa Cinémas.",
    col1Title: "Programmation", col1Links: "À l'affiche\nHoraires des séances\nProchainement",
    col2Title: "Le cinéma", col2Links: "À propos\nInfos pratiques\nÉcoles & centres de loisirs",
    address: "2 rue Jean Jaurès, 62100 Calais", phone: "03 21 17 73 33", email: "contact@cinema-alhambra.org",
    copyright: "© 2026 Cinéma Alhambra Calais. Tous droits réservés.",
}

addPropertyControls(Footer, {
    logoName: { type: ControlType.String, title: "Logo" },
    logoSub: { type: ControlType.String, title: "Logo sous-titre" },
    description: { type: ControlType.String, title: "Description" },
    col1Title: { type: ControlType.String, title: "Col 1 titre" },
    col1Links: { type: ControlType.String, title: "Col 1 liens (1/ligne)" },
    col2Title: { type: ControlType.String, title: "Col 2 titre" },
    col2Links: { type: ControlType.String, title: "Col 2 liens (1/ligne)" },
    address: { type: ControlType.String, title: "Adresse" },
    phone: { type: ControlType.String, title: "Téléphone" },
    email: { type: ControlType.String, title: "Email" },
    copyright: { type: ControlType.String, title: "Copyright" },
})
