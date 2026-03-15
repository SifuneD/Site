/**
 * DataProvider — Cinéma Alhambra × Framer
 *
 * Ce composant utilitaire fournit les données live du site Alhambra
 * aux autres composants Framer via un fetch vers l'API JSON statique.
 *
 * Usage :
 *   1. Définir BASE_URL ci-dessous avec l'URL de déploiement du site
 *   2. Glisser DataProvider sur le canvas
 *   3. Les données apparaissent dans le Property Panel (lecture seule)
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */

import React, { useEffect, useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── Configuration ────────────────────────────────────────────────────────────
// Remplacer par l'URL de déploiement (GitHub Pages, Netlify, etc.)
const DEFAULT_BASE_URL = "https://sifuned.github.io/Site"

// ─── Types ────────────────────────────────────────────────────────────────────
interface Film {
    id: string
    title: string
    genre: string
    duration: string | null
    director: string | null
    badge: "VF" | "VOST"
    poster: string
    link: string
}

interface TodayScreening {
    filmId: string
    title: string
    badge: "VF" | "VOST"
    poster: string
    times: string[]
}

interface ComingSoonFilm {
    id: string
    title: string
    genre: string
    duration: string | null
    badge: "VF" | "VOST"
    poster: string
    releaseDate: string | null
    link: string
}

// ─── Design tokens ────────────────────────────────────────────────────────────
const colors = {
    dark: {
        bg: "#0a0a0f",
        card: "#16161f",
        text: "#f0ece4",
        muted: "#9a9aad",
        accent: "#c23636",
        border: "rgba(255,255,255,0.06)",
    },
    light: {
        bg: "#f5f3ef",
        card: "#ffffff",
        text: "#1a1a2e",
        muted: "#555566",
        accent: "#b52e2e",
        border: "rgba(0,0,0,0.08)",
    },
}

const font = "'Inter', -apple-system, sans-serif"

// ─── Helper: full URL ─────────────────────────────────────────────────────────
function absUrl(base: string, path: string): string {
    const b = base.replace(/\/$/, "")
    return path.startsWith("http") ? path : `${b}${path}`
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DataProvider(props: {
    baseUrl: string
    theme: "dark" | "light"
    showDebug: boolean
}) {
    const { baseUrl = DEFAULT_BASE_URL, theme = "dark", showDebug = true } = props
    const t = colors[theme]

    const [films, setFilms] = useState<Film[]>([])
    const [screenings, setScreenings] = useState<TodayScreening[]>([])
    const [comingSoon, setComingSoon] = useState<ComingSoonFilm[]>([])
    const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle")
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        setStatus("loading")

        const base = baseUrl || DEFAULT_BASE_URL

        Promise.all([
            fetch(`${base}/api/films.json`).then((r) => r.json()),
            fetch(`${base}/api/screenings.json`).then((r) => r.json()),
            fetch(`${base}/api/coming-soon.json`).then((r) => r.json()),
        ])
            .then(([filmsData, screeningsData, comingData]) => {
                setFilms(filmsData.films ?? [])
                setScreenings(screeningsData.todayScreenings ?? [])
                setComingSoon(comingData.films ?? [])
                setStatus("ok")
            })
            .catch((err) => {
                setErrorMsg(String(err))
                setStatus("error")
            })
    }, [baseUrl])

    if (!showDebug) return null

    return (
        <div
            style={{
                fontFamily: font,
                background: t.card,
                border: `1px solid ${t.border}`,
                borderRadius: 16,
                padding: 24,
                minWidth: 320,
                color: t.text,
            }}
        >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                    <rect x="4" y="8" width="40" height="32" rx="4" stroke={t.accent} strokeWidth="2.5" />
                    <circle cx="12" cy="14" r="3" fill={t.accent} opacity="0.7" />
                    <circle cx="12" cy="24" r="3" fill={t.accent} opacity="0.7" />
                    <circle cx="12" cy="34" r="3" fill={t.accent} opacity="0.7" />
                    <circle cx="36" cy="14" r="3" fill={t.accent} opacity="0.7" />
                    <circle cx="36" cy="24" r="3" fill={t.accent} opacity="0.7" />
                    <circle cx="36" cy="34" r="3" fill={t.accent} opacity="0.7" />
                    <rect x="18" y="14" width="12" height="20" rx="1" stroke={t.accent} strokeWidth="2" />
                </svg>
                <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: t.text }}>Alhambra DataProvider</div>
                    <div style={{ fontSize: "0.7rem", color: t.muted, marginTop: 2 }}>API JSON statique</div>
                </div>
                <div
                    style={{
                        marginLeft: "auto",
                        padding: "3px 10px",
                        borderRadius: 100,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        background:
                            status === "ok"
                                ? "rgba(34,197,94,0.12)"
                                : status === "error"
                                ? "rgba(239,68,68,0.12)"
                                : "rgba(255,255,255,0.06)",
                        color:
                            status === "ok"
                                ? "#4ade80"
                                : status === "error"
                                ? "#f87171"
                                : t.muted,
                    }}
                >
                    {status === "loading" ? "Chargement…" : status === "ok" ? "Connecté" : status === "error" ? "Erreur" : "—"}
                </div>
            </div>

            {/* URL */}
            <div
                style={{
                    background: t.bg,
                    borderRadius: 8,
                    padding: "8px 12px",
                    fontSize: "0.75rem",
                    color: t.muted,
                    marginBottom: 16,
                    wordBreak: "break-all",
                    border: `1px solid ${t.border}`,
                }}
            >
                <span style={{ color: t.accent, fontWeight: 600 }}>BASE_URL</span>{" "}
                {baseUrl || DEFAULT_BASE_URL}
            </div>

            {/* Error */}
            {status === "error" && (
                <div
                    style={{
                        background: "rgba(239,68,68,0.08)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        borderRadius: 8,
                        padding: "10px 14px",
                        fontSize: "0.75rem",
                        color: "#f87171",
                        marginBottom: 16,
                    }}
                >
                    {errorMsg}
                </div>
            )}

            {/* Stats */}
            {status === "ok" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                    {[
                        { label: "Films à l'affiche", value: films.length },
                        { label: "Séances aujourd'hui", value: screenings.filter((s) => s.times.length > 0).length },
                        { label: "Prochainement", value: comingSoon.length },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            style={{
                                background: t.bg,
                                borderRadius: 10,
                                padding: "12px 14px",
                                border: `1px solid ${t.border}`,
                            }}
                        >
                            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: t.accent }}>{stat.value}</div>
                            <div style={{ fontSize: "0.65rem", color: t.muted, marginTop: 2, lineHeight: 1.4 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            )}

            {/* Film list preview */}
            {status === "ok" && films.length > 0 && (
                <div style={{ marginTop: 16 }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, color: t.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                        Films chargés
                    </div>
                    {films.slice(0, 4).map((f) => (
                        <div
                            key={f.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "8px 0",
                                borderBottom: `1px solid ${t.border}`,
                            }}
                        >
                            <div
                                style={{
                                    width: 32,
                                    height: 44,
                                    borderRadius: 4,
                                    background: t.bg,
                                    overflow: "hidden",
                                    flexShrink: 0,
                                    border: `1px solid ${t.border}`,
                                }}
                            >
                                <img
                                    src={absUrl(baseUrl || DEFAULT_BASE_URL, f.poster)}
                                    alt={f.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: t.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {f.title}
                                </div>
                                <div style={{ fontSize: "0.68rem", color: t.muted }}>{f.genre}{f.duration ? ` • ${f.duration}` : ""}</div>
                            </div>
                            <span
                                style={{
                                    fontSize: "0.6rem",
                                    fontWeight: 700,
                                    padding: "2px 7px",
                                    borderRadius: 4,
                                    background: f.badge === "VOST" ? "rgba(100,100,255,0.12)" : "rgba(194,54,54,0.12)",
                                    color: f.badge === "VOST" ? "#8888ff" : t.accent,
                                }}
                            >
                                {f.badge}
                            </span>
                        </div>
                    ))}
                    {films.length > 4 && (
                        <div style={{ fontSize: "0.7rem", color: t.muted, paddingTop: 8 }}>
                            + {films.length - 4} autres films
                        </div>
                    )}
                </div>
            )}

            {/* Endpoints */}
            <div style={{ marginTop: 16 }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 600, color: t.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                    Endpoints
                </div>
                {["/api/films.json", "/api/screenings.json", "/api/coming-soon.json"].map((ep) => (
                    <div key={ep} style={{ fontSize: "0.72rem", color: t.muted, padding: "3px 0" }}>
                        <span style={{ color: t.accent }}>GET</span> {ep}
                    </div>
                ))}
            </div>
        </div>
    )
}

DataProvider.defaultProps = {
    baseUrl: DEFAULT_BASE_URL,
    theme: "dark",
    showDebug: true,
}

addPropertyControls(DataProvider, {
    baseUrl: {
        type: ControlType.String,
        title: "Base URL",
        description: "URL de déploiement du site Alhambra",
    },
    theme: {
        type: ControlType.Enum,
        title: "Thème",
        options: ["dark", "light"],
        optionTitles: ["Sombre", "Clair"],
    },
    showDebug: {
        type: ControlType.Boolean,
        title: "Afficher debug",
        description: "Masquer ce composant en production",
    },
})
