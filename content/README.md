# How to Edit Your Website Content

All text on the OnGroundPM website lives in one file: **`content/site.ts`**

Open that file in VS Code or any text editor. Everything inside the quotes `"like this"` is text that appears on the website. Change the text, save the file, and push to GitHub — your live site updates automatically via Vercel.

---

## Quick rules

- Only change text **inside the quotes**. Don't remove the quotes, commas, or brackets.
- A comma always goes after each item *except the last one in a group*.
- To add your phone number, find `phone: ""` in the `contact` section and type your number between the quotes: `phone: "0400 000 000"`.

---

## Common edits

### Change your phone number
Find this line (near the bottom, in `contact`):
```
phone: "",
```
Change it to:
```
phone: "0400 000 000",
```

### Change your email address
Find all instances of `info@ongroundpm.com.au` and replace them.

### Update a stat (e.g. years experience)
Find the `stats` section and change the `value` number.

### Update the hero headline
Find `hero:` near the top. The headline is split across several lines starting with `headlineLine1`.

### Add or remove a suburb from the service area
Find `suburbs:` inside `serviceArea:` and add or remove items from the list.

---

## Adding and replacing images

Place image files directly in the `public/` folder (or `public/projects/` for project images).

| File path | Where it appears | Dimensions |
|---|---|---|
| `public/logo.jpg` | Header (top-left) and footer | Any — height is fixed at 32px header / 28px footer |
| `public/hero.jpg` | Hero section background | 1920×1080px or wider |
| `public/team.jpg` | About section | Portrait — 4:5 ratio recommended |
| `public/projects/project-01.jpg` | Project card 1 (Blackwood Lane Townhouses) | 16:9 ratio recommended |
| `public/projects/project-02.jpg` | Project card 2 (Union Street Cafe Fit-Out) | 16:9 ratio recommended |
| `public/projects/project-03.jpg` | Project card 3 (Wattle Street Rear Extension) | 16:9 ratio recommended |
| `public/projects/project-04.jpg` | Project card 4 (Dohertys Road Warehouse Conversion) | 16:9 ratio recommended |
| `public/projects/project-05.jpg` | Project card 5 (Point Cook Medical Suite) | 16:9 ratio recommended |
| `public/projects/project-06.jpg` | Project card 6 (Leakes Road Residential Slab) | 16:9 ratio recommended |

**Important:** Save images as true JPEG files. On macOS: File → Export → Format: JPEG. On Windows: Save As → JPEG picture. Renaming a PNG to `.jpg` without re-exporting will cause browser errors.

**Logo note:** The current logo is a JPG with a white background. It looks correct on the white header. For the footer (dark background), replace with an SVG version when available for crisp scaling and a transparent background.

---

## Editing the Selected Projects section

Find the `projects:` section in `content/site.ts`. Each project has these fields:

| Field | What it does |
|---|---|
| `name` | Project name shown on the card |
| `suburb` | Location shown below the name (e.g. `"Tarneit, VIC"`) |
| `category` | Category pill shown over the image (e.g. `"Residential — New Build"`) |
| `valueBand` | Value range shown on the card (e.g. `"$3.5M–$4M"`) |
| `scope` | One-sentence summary shown on the card |
| `image.src` | Path to the image file (e.g. `"/projects/project-01.jpg"`) |
| `image.alt` | Description of the image for screen readers |

To change the disclaimer line below the grid, edit `disclaimer:` in the `projects:` section.

---

## Editing the Technical Drafting & Documentation services

Find `technical:` inside `services:` in `content/site.ts`. Each service has these fields:

| Field | What it does |
|---|---|
| `name` | Service name heading |
| `promise` | One-line tagline shown in gold below the name |
| `description` | Longer paragraph description |
| `deliverables` | Bulleted list of what's included |
| `pricing` | Pricing model shown near the CTA |
| `turnaround` | Turnaround time shown near the CTA |
| `ctaLabel` | Text on the enquiry link |

---

## Editing credentials

Find `credentials:` in `content/site.ts`. The current credentials are **MIEAust**, **RegPM**, and **AIQS** plus the ABN. Each entry has:
- `abbr` — the short code shown in large text
- `full` — the full organisation name
- `note` — the status or sub-label shown in smaller text

**Do not add credentials that are not yet completed.**

---

## After making changes

1. Save the file
2. Open a terminal in the project folder
3. Run: `git add content/site.ts && git commit -m "Update content" && git push`
4. Vercel will deploy the changes in about 2 minutes

If you're not sure how to do step 3, ask Claude Code to commit and push for you.
