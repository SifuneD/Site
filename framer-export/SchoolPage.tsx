import React, { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: { bgPrimary: "#0a0a0f", bgCard: "#16161f", textPrimary: "#f0ece4", textSecondary: "#9a9aad", accent: "#c23636", accentGlow: "rgba(194,54,54,0.15)", border: "rgba(255,255,255,0.06)" },
    light: { bgPrimary: "#f5f3ef", bgCard: "#ffffff", textPrimary: "#1a1a2e", textSecondary: "#555566", accent: "#b52e2e", accentGlow: "rgba(181,46,46,0.08)", border: "rgba(0,0,0,0.08)" },
}
const fonts = { display: "'Playfair Display', Georgia, serif", body: "'Inter', -apple-system, sans-serif" }

const programs = [
    {
        badge: "Primaire",
        title: "École et cinéma",
        features: ["3 films par an", "Ressources pédagogiques", "Formation enseignants"],
    },
    {
        badge: "Collège",
        title: "Collège au cinéma",
        features: ["Projections dédiées", "3 films par an", "Catalogue national"],
    },
    {
        badge: "Lycée",
        title: "Lycéens et apprentis au cinéma",
        features: ["Dispositif régional", "3 films par an", "Documents + professionnels"],
    },
]

const BookSVG = ({ color }: { color: string }) => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="80" height="95" rx="4" stroke={color} strokeWidth="2" fill="none" />
        <rect x="28" y="15" width="4" height="95" fill={color} opacity="0.3" />
        <line x1="40" y1="40" x2="85" y2="40" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <line x1="40" y1="52" x2="85" y2="52" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <line x1="40" y1="64" x2="70" y2="64" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <circle cx="62" cy="85" r="10" stroke={color} strokeWidth="1.5" opacity="0.4" />
        <path d="M58 85 L62 80 L66 85 L62 90 Z" fill={color} opacity="0.3" />
    </svg>
)

const UsersSVG = ({ color }: { color: string }) => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="40" r="12" stroke={color} strokeWidth="2" fill="none" />
        <path d="M25 80 C25 65 35 58 45 58 C55 58 65 65 65 80" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="75" cy="38" r="10" stroke={color} strokeWidth="1.5" opacity="0.6" fill="none" />
        <path d="M60 76 C60 63 68 57 75 57 C82 57 90 63 90 76" stroke={color} strokeWidth="1.5" opacity="0.6" fill="none" />
        <circle cx="60" cy="95" r="3" fill={color} opacity="0.3" />
        <circle cx="50" cy="98" r="2" fill={color} opacity="0.2" />
        <circle cx="70" cy="97" r="2.5" fill={color} opacity="0.25" />
    </svg>
)

function SchoolPage(props) {
    const {
        theme = "dark",
        pageTag = "Éducation à l'image",
        title = "Scolaires & Centres de loisirs",
        subtitle = "Découvrir le cinéma autrement avec vos élèves.",
    } = props

    const t = colors[theme] || colors.dark
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return
        const els = containerRef.current.querySelectorAll(".alh-school-reveal")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement
                        const delay = parseInt(el.dataset.stagger || "0", 10)
                        setTimeout(() => {
                            el.style.opacity = "1"
                            el.style.transform = "translateY(0)"
                        }, delay)
                        observer.unobserve(el)
                    }
                })
            },
            { threshold: 0.12 }
        )
        els.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const revealStyle = (stagger = 0): React.CSSProperties => ({
        opacity: 0,
        transform: "translateY(32px)",
        transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
    })

    return (
        <div ref={containerRef} style={{ width: "100%", minHeight: "100vh", backgroundColor: t.bgPrimary, fontFamily: fonts.body, color: t.textPrimary, overflowX: "hidden" }}>
            <style>{`
                .alh-school-card:hover {
                    transform: translateY(-6px) !important;
                    box-shadow: 0 16px 48px ${t.accentGlow} !important;
                }
                .alh-school-btn:hover {
                    background: ${t.accent} !important;
                    color: #fff !important;
                }
                @media (max-width: 1024px) {
                    .alh-school-grid { grid-template-columns: 1fr 1fr !important; }
                    .alh-school-content-row { flex-direction: column !important; }
                    .alh-school-content-visual { width: 100% !important; justify-content: center !important; }
                    .alh-school-content-text { width: 100% !important; }
                }
                @media (max-width: 768px) {
                    .alh-school-grid { grid-template-columns: 1fr !important; }
                    .alh-school-header-title { font-size: 2.4rem !important; }
                    .alh-school-section-title { font-size: 2rem !important; }
                }
                @media (max-width: 480px) {
                    .alh-school-header-title { font-size: 1.8rem !important; }
                    .alh-school-section-title { font-size: 1.6rem !important; }
                    .alh-school-wrapper { padding-left: 16px !important; padding-right: 16px !important; }
                }
            `}</style>

            {/* ── Page Header ── */}
            <div style={{ padding: "120px 0 60px", textAlign: "center" }}>
                <div className="alh-school-wrapper" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
                    <div className="alh-school-reveal" style={revealStyle()} data-stagger="0">
                        <span style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: t.accent,
                            background: t.accentGlow,
                            padding: "6px 16px",
                            borderRadius: 40,
                            marginBottom: 20,
                        }}>
                            {pageTag}
                        </span>
                    </div>
                    <h1 className="alh-school-reveal alh-school-header-title" style={{ ...revealStyle(), fontFamily: fonts.display, fontSize: "3.2rem", fontWeight: 700, lineHeight: 1.15, margin: "0 0 16px" }} data-stagger="80">
                        {title}
                    </h1>
                    <p className="alh-school-reveal" style={{ ...revealStyle(), fontSize: 18, color: t.textSecondary, margin: 0, lineHeight: 1.6 }} data-stagger="160">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* ── Intro Content Block ── */}
            <div className="alh-school-wrapper" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
                <div className="alh-school-reveal alh-school-content-row" style={{ ...revealStyle(), display: "flex", gap: 48, alignItems: "center" }} data-stagger="200">
                    <div className="alh-school-content-text" style={{ flex: 1 }}>
                        <h2 style={{ fontFamily: fonts.display, fontSize: "1.8rem", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.3 }}>
                            Le cinéma, outil pédagogique
                        </h2>
                        <p style={{ fontSize: 15, lineHeight: 1.75, color: t.textSecondary, margin: "0 0 16px" }}>
                            Labellisé <strong style={{ color: t.textPrimary }}>Jeune Public par le CNC</strong>, notre cinéma accueille les scolaires tout au long de l'année pour des projections adaptées à chaque niveau. De la maternelle au lycée, nous proposons un accompagnement pédagogique complet pour faire découvrir le 7e art à vos élèves.
                        </p>
                        <p style={{ fontSize: 15, lineHeight: 1.75, color: t.textSecondary, margin: 0 }}>
                            Tarif scolaire : <strong style={{ color: t.accent }}>5&nbsp;€ par élève</strong> — séances sur mesure, accueil personnalisé (prévoir 20 minutes avant la projection).
                        </p>
                    </div>
                    <div className="alh-school-content-visual" style={{ width: 200, display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
                        <div style={{
                            width: 180,
                            height: 180,
                            borderRadius: 20,
                            background: t.accentGlow,
                            border: `1px solid ${t.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <BookSVG color={t.accent} />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Nos programmes ── */}
            <div style={{ padding: "80px 0" }}>
                <div className="alh-school-wrapper" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <div className="alh-school-reveal" style={revealStyle()} data-stagger="0">
                            <span style={{
                                display: "inline-block",
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: t.accent,
                                background: t.accentGlow,
                                padding: "6px 16px",
                                borderRadius: 40,
                                marginBottom: 16,
                            }}>
                                Dispositifs nationaux
                            </span>
                        </div>
                        <h2 className="alh-school-reveal alh-school-section-title" style={{ ...revealStyle(), fontFamily: fonts.display, fontSize: "2.6rem", fontWeight: 700, lineHeight: 1.15, margin: "0 0 14px" }} data-stagger="80">
                            Nos programmes
                        </h2>
                        <p className="alh-school-reveal" style={{ ...revealStyle(), fontSize: 16, color: t.textSecondary, margin: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }} data-stagger="160">
                            Trois dispositifs soutenus par le CNC et l'Éducation nationale.
                        </p>
                    </div>

                    {/* Program Cards Grid */}
                    <div className="alh-school-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {programs.map((prog, i) => (
                            <div
                                key={i}
                                className="alh-school-reveal alh-school-card"
                                data-stagger={String(240 + i * 100)}
                                style={{
                                    ...revealStyle(),
                                    backgroundColor: t.bgCard,
                                    borderRadius: 16,
                                    border: `1px solid ${t.border}`,
                                    padding: 32,
                                    transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
                                    cursor: "default",
                                }}
                            >
                                <span style={{
                                    display: "inline-block",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: t.accent,
                                    background: t.accentGlow,
                                    padding: "5px 12px",
                                    borderRadius: 6,
                                    marginBottom: 18,
                                }}>
                                    {prog.badge}
                                </span>
                                <h3 style={{ fontFamily: fonts.display, fontSize: "1.35rem", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.3 }}>
                                    {prog.title}
                                </h3>
                                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                                    {prog.features.map((feat, j) => (
                                        <li key={j} style={{ fontSize: 14, color: t.textSecondary, display: "flex", alignItems: "center", gap: 10 }}>
                                            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: t.accent, flexShrink: 0 }} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Centres de loisirs ── */}
            <div className="alh-school-wrapper" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 100px" }}>
                <div className="alh-school-reveal alh-school-content-row" style={{ ...revealStyle(), display: "flex", flexDirection: "row-reverse", gap: 48, alignItems: "center" }} data-stagger="300">
                    <div className="alh-school-content-text" style={{ flex: 1 }}>
                        <h2 style={{ fontFamily: fonts.display, fontSize: "1.8rem", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.3 }}>
                            Centres de loisirs
                        </h2>
                        <p style={{ fontSize: 15, lineHeight: 1.75, color: t.textSecondary, margin: "0 0 16px" }}>
                            Nous accueillons également les centres de loisirs et structures périscolaires pour des séances adaptées aux plus jeunes. Profitez d'un <strong style={{ color: t.textPrimary }}>tarif préférentiel</strong> pour vos groupes et d'un accompagnement sur mesure.
                        </p>
                        <p style={{ fontSize: 15, lineHeight: 1.75, color: t.textSecondary, margin: "0 0 28px" }}>
                            Contactez-nous au <strong style={{ color: t.accent }}>03 21 17 73 33</strong> pour organiser votre prochaine sortie cinéma.
                        </p>
                        <a
                            href="#tarifs"
                            className="alh-school-btn"
                            style={{
                                display: "inline-block",
                                fontSize: 14,
                                fontWeight: 600,
                                color: t.accent,
                                border: `1.5px solid ${t.accent}`,
                                borderRadius: 10,
                                padding: "12px 28px",
                                textDecoration: "none",
                                transition: "background 0.3s ease, color 0.3s ease",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                        >
                            Voir les tarifs
                        </a>
                    </div>
                    <div className="alh-school-content-visual" style={{ width: 200, display: "flex", justifyContent: "flex-start", flexShrink: 0 }}>
                        <div style={{
                            width: 180,
                            height: 180,
                            borderRadius: 20,
                            background: t.accentGlow,
                            border: `1px solid ${t.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <UsersSVG color={t.accent} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

addPropertyControls(SchoolPage, {
    theme: {
        type: ControlType.Enum,
        title: "Theme",
        options: ["dark", "light"],
        defaultValue: "dark",
    },
    pageTag: {
        type: ControlType.String,
        title: "Page Tag",
        defaultValue: "Éducation à l'image",
    },
    title: {
        type: ControlType.String,
        title: "Title",
        defaultValue: "Scolaires & Centres de loisirs",
    },
    subtitle: {
        type: ControlType.String,
        title: "Subtitle",
        defaultValue: "Découvrir le cinéma autrement avec vos élèves.",
    },
})

export default SchoolPage
