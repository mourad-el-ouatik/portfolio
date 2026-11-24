# Refonte « Le Cluster » — changelog

## Concept
Le portfolio est une infrastructure Zero Trust que l'on explore : chaque section est un **nœud** (`N·01` … `N·10`), naviguer = s'authentifier dans une zone. Aucun contenu factuel modifié.

## Navigation (plus aucune barre horizontale pleine largeur)
- `components/nav/node-dock.tsx` : rail vertical gauche ≥ 1024 px (câble rempli au scroll, tooltip au survol/focus, flèches clavier, `aria-current="location"`) ; pilule flottante en bas < 1024 px (5 raccourcis + « Tous les nœuds »), masquée quand un champ de formulaire a le focus.
- `components/nav/mobile-sheet.tsx` : bottom sheet (vaul) en grille 2 colonnes, 10 sections, chargé en `dynamic()`.
- `components/nav/command-palette.tsx` : ⌘K / Ctrl+K (cmdk), groupes Aller à / Actions / Projets, easter egg `sudo`, chargé en `dynamic()` à la première interaction.
- `components/nav/identity.tsx` : monogramme `ME`, badge « Dispo dès fév. 2027 », bouton palette, bascule thème.
- Supprimés : `navigation.tsx`, `scroll-progress.tsx`, `section-heading.tsx`. Les sections `leadership` et `research` sont désormais atteignables.

## Sections (une forme par section)
Hero console + portrait (`next/image`, traitement navy, fallback monogramme) + maillage de 9 nœuds + KPI animés · À propos « carte d'accès » · Expérience journal de tickets (`#GRC-01`…`#ZT-04`, accordéons) · Formation en paliers · Projets en dossiers de cas avec diagrammes SVG · Certifications en vitrine (tilt) · Compétences par VLAN (onglets desktop) · Engagement en bandeaux image · Recherche en carnet avec statuts · Contact « terminal » · Footer « pied de console ».

## Design system
- `app/globals.css` : un seul bloc de tokens (dark-first) + surcharge `.light`, tokens `surface-1/2`, `line`, `glow`, `ok`, `live`, `warn`, échelle fluide, spotlight curseur (`@media (hover: hover)`), grain hero, `forced-colors`, `prefers-reduced-motion`. `scroll-padding-top` ramené à 1.5rem. `overflow-x: clip` sur `body`.
- Polices locales via `next/font/local` : Space Grotesk (titres), Inter (corps), JetBrains Mono (mono, enfin chargée).
- Primitives : `Chip` (tech/status/skill), `NodeHeader`, `NodeSection`, `Reveal`/`MaskReveal`, `SpotCard`, `CableDivider`, `Collapse`.

## Corrections de contenu
- « Quatre projets » → « Trois projets » (calculé depuis `projects.length`).
- Leadership, Recherche, Contact entièrement en français.
- Données extraites dans `lib/content/*.ts`.
- Script Credly inutile supprimé ; `<img>` natifs → `next/image` ; `images.unoptimized` retiré ; `ignoreBuildErrors` retiré.
- Formulaire : validation zod, états envoi/succès/erreur, `aria-live`, `autocomplete`, lien de repli e-mail.
- Icône « Mobile Development » → `Smartphone`.

## Finitions
`metadataBase`, `SITE_URL` (`NEXT_PUBLIC_SITE_URL`), carte Twitter, `opengraph-image.tsx`, sitemap/robots alignés sur `SITE_URL`, lien d'évitement, `<main id="main">`.

## Fichiers supprimés (doublons / obsolètes)
Anciens composants racine de `components/`, `components/ui/use-mobile.tsx`, `components/ui/use-toast.ts`, `styles/globals.css`, CV dupliqué dans `components/` (copie de `public/` conservée).

## Correctifs de la passe de vérification
- Titres de section invisibles sur mobile (révélation par masque jamais déclenchée) : l'observateur cible maintenant un conteneur non masqué.
- Diagrammes pipeline/APK coupés à droite (viewBox).
- Débordement de 1 px à 320 px (chip trop large).
- Alertes axe : contraste des onglets VLAN, noms accessibles (monogramme, palette, bouton copier, tooltip du dock), lien sans soulignement, ordre des titres.
- E-mail coupé en deux dans la carte contact.

## Décisions ouvertes
- Badges Fortinet supplémentaires dans `/public` non affichés (certifications non confirmées).
- Pas de niveaux de compétence (non fournis) : regroupement par VLAN uniquement.
- Thème clair conservé et fonctionnel ; thème par défaut = système, repli sombre.
