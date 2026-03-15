# Guide d'import — Cinéma Alhambra vers Framer

## Prérequis

Un compte Framer (gratuit ou payant).

---

## Étape 1 : Créer un nouveau projet Framer

1. Aller sur [framer.com](https://framer.com) et créer un nouveau projet
2. Choisir un template vide (Blank)

---

## Étape 2 : Ajouter les polices Google

Dans **Site Settings > Custom Code > Head**, coller :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Étape 3 : Importer les Code Components

Pour **chaque fichier `.tsx`** du dossier `framer-export/` :

1. Dans Framer, aller dans le panneau **Assets** (icône puzzle)
2. Cliquer **"+"** > **"Code Component"** > **"New Component"**
3. Copier-coller le contenu du fichier `.tsx`
4. Copier aussi `tokens.ts` comme fichier utilitaire

### Fichiers à importer (dans cet ordre) :

| Fichier | Composant | Description |
|---------|-----------|-------------|
| `tokens.ts` | — | Tokens de design (couleurs, fonts) |
| `Navbar.tsx` | Navbar | Barre de navigation |
| `Hero.tsx` | Hero | Section hero plein écran |
| `TodayScreenings.tsx` | TodayScreenings | Séances du jour (4 films) |
| `FilmsGrid.tsx` | FilmsGrid | Films à l'affiche (grille 4 colonnes) |
| `ComingSoon.tsx` | ComingSoon | Films prochainement |
| `About.tsx` | About | Section "À propos" du cinéma |
| `Services.tsx` | Services | Les 4 services (anniversaires, etc.) |
| `Newsletter.tsx` | Newsletter | Inscription newsletter |
| `InfoCards.tsx` | InfoCards | Infos pratiques (adresse, tel, etc.) |
| `Footer.tsx` | Footer | Pied de page |

---

## Étape 4 : Assembler la page

1. Créer une nouvelle page dans Framer
2. Glisser les composants dans l'ordre suivant :
   - Navbar
   - Hero
   - TodayScreenings
   - FilmsGrid
   - ComingSoon
   - About
   - Services
   - Newsletter
   - InfoCards
   - Footer
3. Pour chaque composant, régler la largeur sur **"Fill"** (100%)

---

## Étape 5 : Personnaliser le contenu

Chaque composant expose des **Property Controls** dans le panneau de droite :

- **Textes** : titres, descriptions, boutons → modifiables directement
- **Images** : affiches de films → uploadez vos images via le sélecteur
- **Thème** : basculer entre "Sombre" et "Clair" pour chaque section
- **Liens** : URLs des boutons et navigation

---

## Étape 6 : Uploader les affiches

1. Dans Framer, aller dans **Assets** > **Images**
2. Uploader les images du dossier `posters/`
3. Sélectionner les images dans les Property Controls des composants

---

## Tokens de design

### Couleurs principales

| Token | Dark | Light |
|-------|------|-------|
| Background | `#0a0a0f` | `#f5f3ef` |
| Card | `#16161f` | `#ffffff` |
| Texte | `#f0ece4` | `#1a1a2e` |
| Accent (rouge) | `#c23636` | `#b52e2e` |

### Typographies

| Usage | Police | Poids |
|-------|--------|-------|
| Titres display | Playfair Display | 700, 900 |
| Headings | Space Grotesk | 500, 600, 700 |
| Corps de texte | Inter | 300, 400, 500, 600 |

---

## Limitations

- Les **animations de scroll reveal** du site original ne sont pas incluses — utilisez les animations natives de Framer (Appear, Scroll)
- Le **cursor glow** et le **film grain** ne sont pas reproduits — ce sont des effets CSS spécifiques
- Le **mode responsive** doit être ajusté dans l'éditeur Framer (breakpoints)
- La **recherche** n'est pas incluse comme composant — utilisez un plugin Framer ou intégrez-la séparément

---

## Support

Pour toute question sur l'intégration, consultez la [documentation Framer sur les Code Components](https://www.framer.com/developers/).
