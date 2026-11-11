# BytePath — IB Computer Science: Data Representation

A responsive, Duolingo-inspired revision website built with plain HTML, CSS and JavaScript. It is designed to be hosted for free with **GitHub Pages**.

## What's included

- A learning path with 10 short lessons across the three sections in the supplied Kognity contents:
  1. Number systems
  2. Text, sound and images
  3. Data storage and compression
- Interactive multiple-choice quizzes with instant explanations.
- A 10-question mixed practice sprint.
- A searchable glossary.
- XP, streak, hearts, lesson completion and accuracy tracking.
- Progress is saved in the browser using `localStorage`. No account, server or database is required.
- Responsive layout for desktop, tablet and mobile.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

No build step or package installation is needed.

## Publish with GitHub Pages

1. Create a new GitHub repository (for example, `bytepath-cs`).
2. Upload **all three website files**: `index.html`, `style.css` and `app.js`. Include this `README.md` too.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish. Your site will be available at the URL shown in Settings → Pages.

## Customise

- Add or edit lesson content in the `lessons` array in `app.js`.
- Add quiz questions in the `questions` object in `app.js`.
- Add glossary entries in the `glossary` array.
- Change colours, spacing and layout in `style.css`.

## Notes

- The site is an independent study aid inspired by the general idea of gamified language-learning paths. It does not use Duolingo branding or assets.
- Lesson content is based on the uploaded **Computer Science Kognity Contents — Topic 1: Data Representation** files. Where the source outline gives only an accepted answer without the full question, the site teaches the underlying concept rather than inventing the missing original question.
- Some file-size examples are approximate, as in the source notes. In an exam, follow the units and rounding instructions given in the question.
