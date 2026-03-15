// ============================================
// CINEMA ALHAMBRA — Design Tokens for Framer
// ============================================

export const colors = {
    dark: {
        bgPrimary: "#0a0a0f",
        bgSecondary: "#111118",
        bgCard: "#16161f",
        bgCardHover: "#1c1c28",
        textPrimary: "#f0ece4",
        textSecondary: "#9a9aad",
        textMuted: "#5e5e72",
        accent: "#c23636",
        accentLight: "#e04444",
        accentDark: "#a02c2c",
        accentGlow: "rgba(194, 54, 54, 0.15)",
        border: "rgba(255, 255, 255, 0.06)",
        borderHover: "rgba(255, 255, 255, 0.12)",
    },
    light: {
        bgPrimary: "#f5f3ef",
        bgSecondary: "#eae7e1",
        bgCard: "#ffffff",
        bgCardHover: "#f0ede8",
        textPrimary: "#1a1a2e",
        textSecondary: "#555566",
        textMuted: "#8a8a9a",
        accent: "#b52e2e",
        accentLight: "#d03a3a",
        accentDark: "#8c2222",
        accentGlow: "rgba(181, 46, 46, 0.08)",
        border: "rgba(0, 0, 0, 0.08)",
        borderHover: "rgba(0, 0, 0, 0.15)",
    },
}

export const fonts = {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'Space Grotesk', sans-serif",
}

export const spacing = {
    sectionPadding: 120,
    containerWidth: 1200,
}

export const transitions = {
    easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
    easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
}

// Google Fonts URL to add in Framer Site Settings
export const googleFontsUrl =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
