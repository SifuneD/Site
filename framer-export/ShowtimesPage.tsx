import React, { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

const colors = {
    dark: {
        bgPrimary: "#0a0a0f",
        bgCard: "#16161f",
        textPrimary: "#f0ece4",
        textSecondary: "#9a9aad",
        textMuted: "#5e5e72",
        accent: "#c23636",
        accentLight: "#e04444",
        accentGlow: "rgba(194,54,54,0.15)",
        border: "rgba(255,255,255,0.06)",
        borderHover: "rgba(255,255,255,0.12)",
        cardShadow: "0 4px 24px rgba(0,0,0,0.4)",
        cardHoverShadow: "0 12px 40px rgba(0,0,0,0.6)",
        pillBg: "rgba(255,255,255,0.06)",
        pillHoverBg: "rgba(194,54,54,0.2)",
        dayHeaderBg: "rgba(255,255,255,0.03)",
        noScreening: "rgba(255,255,255,0.04)",
    },
    light: {
        bgPrimary: "#f5f3ef",
        bgCard: "#ffffff",
        textPrimary: "#1a1a2e",
        textSecondary: "#555566",
        textMuted: "#8a8a9a",
        accent: "#b52e2e",
        accentLight: "#d03a3a",
        accentGlow: "rgba(181,46,46,0.08)",
        border: "rgba(0,0,0,0.08)",
        borderHover: "rgba(0,0,0,0.15)",
        cardShadow: "0 2px 12px rgba(0,0,0,0.06)",
        cardHoverShadow: "0 8px 30px rgba(0,0,0,0.12)",
        pillBg: "rgba(0,0,0,0.05)",
        pillHoverBg: "rgba(181,46,46,0.12)",
        dayHeaderBg: "rgba(0,0,0,0.03)",
        noScreening: "rgba(0,0,0,0.03)",
    },
}

const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}

const defaultFilms = [
    {
        title: "Alter Ego",
        badge: "VF",
        genre: "Com\u00e9die, Thriller",
        duration: "1h39",
        director: "Nicolas Charlet, Bruno Lavaine",
        schedule: [
            { day: "Lun", date: "09/03", times: [] },
            { day: "Mar", date: "10/03", times: ["20:30"] },
            { day: "Mer", date: "11/03", times: ["14:00", "20:30"] },
            { day: "Jeu", date: "12/03", times: ["18:00"] },
            { day: "Ven", date: "13/03", times: ["20:30"] },
            { day: "Sam", date: "14/03", times: ["16:00"] },
            { day: "Dim", date: "15/03", times: ["17:00"] },
        ],
    },
    {
        title: "The Mastermind",
        badge: "VOST",
        genre: "Policier, Drame",
        duration: "1h50",
        director: "Kelly Reichardt",
        schedule: [
            { day: "Lun", date: "09/03", times: ["18:00"] },
            { day: "Mar", date: "10/03", times: [] },
            { day: "Mer", date: "11/03", times: ["18:00"] },
            { day: "Jeu", date: "12/03", times: ["20:30"] },
            { day: "Ven", date: "13/03", times: [] },
            { day: "Sam", date: "14/03", times: ["20:30"] },
            { day: "Dim", date: "15/03", times: ["19:00"] },
        ],
    },
    {
        title: "L'Affaire Bojarski",
        badge: "VF",
        genre: "Drame, Policier",
        duration: "2h08",
        director: "Jean-Paul Salom\u00e9",
        schedule: [
            { day: "Lun", date: "09/03", times: [] },
            { day: "Mar", date: "10/03", times: ["20:30"] },
            { day: "Mer", date: "11/03", times: ["16:00"] },
            { day: "Jeu", date: "12/03", times: [] },
            { day: "Ven", date: "13/03", times: ["18:00"] },
            { day: "Sam", date: "14/03", times: ["14:00"] },
            { day: "Dim", date: "15/03", times: [] },
        ],
    },
    {
        title: "Soundtrack to a Coup d'\u00c9tat",
        badge: "VOST",
        genre: "Documentaire, Musique",
        duration: "2h30",
        director: "Johan Grimonprez",
        schedule: [
            { day: "Lun", date: "09/03", times: ["20:30"] },
            { day: "Mar", date: "10/03", times: [] },
            { day: "Mer", date: "11/03", times: [] },
            { day: "Jeu", date: "12/03", times: ["14:00"] },
            { day: "Ven", date: "13/03", times: [] },
            { day: "Sam", date: "14/03", times: ["18:00"] },
            { day: "Dim", date: "15/03", times: ["14:00"] },
        ],
    },
]

function getCss(t: typeof colors.dark) {
    return `
@keyframes alh-st-fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.alh-st-root {
    width: 100%;
    min-height: 100vh;
    background: ${t.bgPrimary};
    color: ${t.textPrimary};
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.alh-st-root *, .alh-st-root *::before, .alh-st-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.alh-st-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 24px 100px;
}

/* --- Page Header --- */
.alh-st-header {
    text-align: center;
    margin-bottom: 64px;
}

.alh-st-header.alh-st-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.alh-st-header.alh-st-visible {
    opacity: 1;
    transform: translateY(0);
}

.alh-st-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${t.accent};
    margin-bottom: 16px;
    font-family: ${fonts.body};
}

.alh-st-title {
    font-family: ${fonts.display};
    font-weight: 900;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    line-height: 1.1;
    color: ${t.textPrimary};
    margin-bottom: 16px;
}

.alh-st-subtitle {
    font-size: 1.05rem;
    color: ${t.textSecondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
    font-family: ${fonts.body};
}

/* --- Film Cards List --- */
.alh-st-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

/* --- Film Card --- */
.alh-st-card {
    background: ${t.bgCard};
    border: 1px solid ${t.border};
    border-radius: 14px;
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
    opacity: 0;
    transform: translateY(30px);
}

.alh-st-card.alh-st-visible {
    animation: alh-st-fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.alh-st-card:hover {
    transform: translateY(-4px);
    box-shadow: ${t.cardHoverShadow};
    border-color: ${t.accent};
}

/* --- Card Header --- */
.alh-st-card-header {
    padding: 24px 28px 20px;
    border-bottom: 1px solid ${t.border};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
}

.alh-st-card-header-left {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    min-width: 0;
}

.alh-st-card-title-row {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

.alh-st-card-title {
    font-family: ${fonts.display};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${t.textPrimary};
}

.alh-st-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: ${fonts.body};
    flex-shrink: 0;
}

.alh-st-badge-vf {
    background: ${t.accent};
    color: #fff;
}

.alh-st-badge-vost {
    background: ${t.pillBg};
    color: ${t.textSecondary};
    border: 1px solid ${t.border};
}

.alh-st-card-meta {
    font-size: 0.82rem;
    color: ${t.textSecondary};
    font-family: ${fonts.body};
    line-height: 1.5;
}

.alh-st-card-meta-sep {
    margin: 0 6px;
    opacity: 0.4;
}

.alh-st-card-director {
    font-style: italic;
    opacity: 0.85;
}

/* --- Day Grid --- */
.alh-st-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0;
}

.alh-st-day-col {
    padding: 16px 12px 20px;
    text-align: center;
    border-right: 1px solid ${t.border};
    min-height: 100px;
}

.alh-st-day-col:last-child {
    border-right: none;
}

.alh-st-day-label {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${t.textMuted};
    margin-bottom: 4px;
    font-family: ${fonts.body};
}

.alh-st-day-date {
    font-size: 0.72rem;
    color: ${t.textSecondary};
    margin-bottom: 12px;
    font-family: ${fonts.body};
    font-weight: 500;
}

.alh-st-times {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}

.alh-st-time-pill {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 600;
    font-family: ${fonts.body};
    color: ${t.textPrimary};
    background: ${t.pillBg};
    border: 1px solid ${t.border};
    transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
    cursor: pointer;
    white-space: nowrap;
}

.alh-st-time-pill:hover {
    background: ${t.pillHoverBg};
    border-color: ${t.accent};
    color: ${t.accent};
    transform: translateY(-1px);
}

.alh-st-no-screening {
    font-size: 0.85rem;
    color: ${t.textMuted};
    opacity: 0.5;
    padding: 5px 0;
    user-select: none;
}

/* --- Responsive --- */
@media (max-width: 1024px) {
    .alh-st-container {
        padding: 60px 20px 80px;
    }
    .alh-st-card-header {
        padding: 20px 24px 16px;
    }
    .alh-st-day-col {
        padding: 14px 8px 16px;
    }
    .alh-st-time-pill {
        padding: 4px 10px;
        font-size: 0.74rem;
    }
}

@media (max-width: 768px) {
    .alh-st-container {
        padding: 48px 16px 64px;
    }
    .alh-st-header {
        margin-bottom: 40px;
    }
    .alh-st-title {
        font-size: clamp(1.8rem, 6vw, 2.5rem);
    }
    .alh-st-subtitle {
        font-size: 0.95rem;
    }
    .alh-st-card-header {
        padding: 16px 16px 14px;
    }
    .alh-st-card-title {
        font-size: 1.1rem;
    }
    .alh-st-days {
        display: flex;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        gap: 0;
    }
    .alh-st-day-col {
        min-width: 100px;
        flex-shrink: 0;
        scroll-snap-align: start;
        padding: 14px 12px 16px;
    }
    .alh-st-day-col:last-child {
        border-right: 1px solid ${t.border};
    }
}

@media (max-width: 480px) {
    .alh-st-container {
        padding: 36px 12px 48px;
    }
    .alh-st-title {
        font-size: clamp(1.6rem, 8vw, 2rem);
    }
    .alh-st-subtitle {
        font-size: 0.88rem;
    }
    .alh-st-card-title {
        font-size: 1rem;
    }
    .alh-st-card-meta {
        font-size: 0.78rem;
    }
    .alh-st-day-col {
        min-width: 90px;
        padding: 12px 8px 14px;
    }
    .alh-st-time-pill {
        padding: 4px 8px;
        font-size: 0.72rem;
    }
}
`
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function ShowtimesPage(props) {
    const { theme, weekLabel, title, subtitle } = props
    const t = colors[theme] || colors.dark
    const headerRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = headerRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-st-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const list = listRef.current
        if (!list) return
        const cards = list.querySelectorAll(".alh-st-card")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("alh-st-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.08 }
        )
        cards.forEach((card) => observer.observe(card))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="alh-st-root" style={{ background: t.bgPrimary, color: t.textPrimary }}>
            <style>{getCss(t)}</style>
            <div className="alh-st-container">
                {/* Page Header */}
                <div ref={headerRef} className="alh-st-header alh-st-reveal">
                    <span className="alh-st-tag">{weekLabel}</span>
                    <h1 className="alh-st-title">{title}</h1>
                    <p className="alh-st-subtitle">{subtitle}</p>
                </div>

                {/* Film Showtimes List */}
                <div ref={listRef} className="alh-st-list">
                    {defaultFilms.map((film, i) => {
                        const delay = Math.min(i * 0.1, 0.5)
                        return (
                            <div
                                key={i}
                                className="alh-st-card"
                                style={{ animationDelay: `${delay}s` }}
                            >
                                {/* Card Header */}
                                <div className="alh-st-card-header">
                                    <div className="alh-st-card-header-left">
                                        <div className="alh-st-card-title-row">
                                            <span className="alh-st-card-title">{film.title}</span>
                                            <span className={`alh-st-badge ${film.badge === "VF" ? "alh-st-badge-vf" : "alh-st-badge-vost"}`}>
                                                {film.badge}
                                            </span>
                                        </div>
                                        <div className="alh-st-card-meta">
                                            {film.genre}
                                            {film.duration && (
                                                <>
                                                    <span className="alh-st-card-meta-sep">&bull;</span>
                                                    {film.duration}
                                                </>
                                            )}
                                            {film.director && (
                                                <>
                                                    <span className="alh-st-card-meta-sep">&bull;</span>
                                                    <span className="alh-st-card-director">De {film.director}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* 7-Day Grid */}
                                <div className="alh-st-days">
                                    {film.schedule.map((slot, j) => (
                                        <div key={j} className="alh-st-day-col">
                                            <div className="alh-st-day-label">{slot.day}</div>
                                            <div className="alh-st-day-date">{slot.date}</div>
                                            <div className="alh-st-times">
                                                {slot.times.length > 0
                                                    ? slot.times.map((time, k) => (
                                                          <span key={k} className="alh-st-time-pill">
                                                              {time}
                                                          </span>
                                                      ))
                                                    : <span className="alh-st-no-screening">&mdash;</span>
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

ShowtimesPage.defaultProps = {
    theme: "dark",
    weekLabel: "Semaine du 9 au 15 mars 2026",
    title: "Horaires des s\u00e9ances",
    subtitle: "Retrouvez les horaires de toutes les s\u00e9ances de la semaine au cin\u00e9ma Alhambra.",
}

addPropertyControls(ShowtimesPage, {
    theme: {
        type: ControlType.Enum,
        title: "Th\u00e8me",
        options: ["dark", "light"],
        optionTitles: ["Sombre", "Clair"],
    },
    weekLabel: { type: ControlType.String, title: "Semaine" },
    title: { type: ControlType.String, title: "Titre" },
    subtitle: { type: ControlType.String, title: "Sous-titre" },
})
