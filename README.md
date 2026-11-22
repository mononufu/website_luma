# Site de Luma

Site vitrine de [Luma](https://github.com/mononufu/luma), l’application Android qui aide à reprendre la main sur son temps d’écran, sans compte ni serveur.

## Contenu

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page d’accueil : héros, trois façons d’intervenir, règles et Focus, galerie, confidentialité, FAQ |
| `confidentialite.html` | Politique de confidentialité publique (à donner à Google Play) |
| `404.html` | Page introuvable |
| `assets/css/style.css` | Styles dans l’esprit du style Aura de l’app : fond flou et granuleux dont la lumière change selon la partie (cuivre, gris, violet, bleu-vert), verre dépoli, titres en Instrument Serif |
| `assets/js/main.js` | Apparition au défilement et changement d’ambiance du fond |
| `assets/img/` | Logo, captures de l’app en WebP, image de partage `og-image.jpg` |
| `assets/fonts/` | Inter et Instrument Serif (licence OFL), les polices de l’app |

Le site est en HTML et CSS purs : pas de dépendance, pas d’étape de compilation, et aucune requête vers un service tiers (ni police Google, ni analytics, ni cookie).

## Voir le site en local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne (GitHub Pages)

Le workflow `.github/workflows/pages.yml` publie le site à chaque push sur `main`.

1. Dans **Settings → Pages**, choisir **Source : GitHub Actions**.
2. Pousser sur `main` (ou lancer le workflow à la main dans l’onglet **Actions**).
3. Le site est servi sur `https://mononufu.github.io/website_luma/`.

GitHub Pages n’est gratuit que pour un dépôt **public** (ou avec un compte GitHub Pro). Si le dépôt reste privé, le dossier peut être déposé tel quel sur Netlify, Cloudflare Pages ou Vercel.

Pour un nom de domaine à soi, ajouter un fichier `CNAME` à la racine et le copier dans `_site` dans le workflow.

## Mettre à jour les captures

Les captures viennent de `reports/screenshots/` dans le dépôt de l’app, converties en WebP :

```sh
convert capture.png -quality 82 assets/img/capture.webp
```
