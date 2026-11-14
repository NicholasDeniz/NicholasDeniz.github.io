# Nicholas Deniz — Portfolio

[View the portfolio](https://nicholasdeniz.github.io/)

Computer Science portfolio built with HTML, CSS, JavaScript, and Jekyll. GitHub Pages publishes the site from the repository's main branch.

## Source files

| Path                                | Purpose                                             |
| ----------------------------------- | --------------------------------------------------- |
| `index.html`                        | Homepage and project summaries                      |
| `assets/css/site.css`               | Shared styles, responsive layouts, and print styles |
| `assets/js/site.js`                 | Sorting demonstration with sample records           |
| `_layouts/default.html`             | Shared layout for narrative and setup pages         |
| `*-narrative.md`                    | Academic project narratives and measurements        |
| `professionalself-assessment.md`    | Capstone reflection                                 |
| `setup-instructions.md`             | Instructions for running the linked applications    |
| `_config.yml`                       | Jekyll and GitHub Pages configuration               |
| `.prettierrc.json`, `.editorconfig` | Source formatting settings                          |

## Local preview

From the repository root, run:

```sh
python -m http.server 8000
```

Open http://localhost:8000 to preview the homepage and its assets. The Markdown pages use Jekyll; follow [GitHub's local Jekyll setup instructions](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) to preview the full site.

## Formatting and checks

With Node.js and npm installed:

```sh
npx --yes prettier@3.6.2 --write index.html _layouts/default.html assets/css/site.css assets/js/site.js .prettierrc.json
npx --yes prettier@3.6.2 --check index.html _layouts/default.html assets/css/site.css assets/js/site.js .prettierrc.json
node --check assets/js/site.js
npx --yes html-validate@11.21.1 --preset standard,a11y index.html
```

Before publishing, check the homepage and supporting pages at phone and desktop widths. Use the keyboard to navigate links, open project details, and operate both sorting selects. Check ascending and descending order for age, name, and breed. Missing ages should remain last, and equal values should keep their original order.

## Publishing

Push changes to `main`, wait for the **pages build and deployment** workflow to succeed, and check the live site. Keep the narrative filenames stable so existing links continue to work. Update the asset version query in the homepage and shared layout when changing CSS or JavaScript.

## Project material

| Enhancement                      | Code                                                                                                                       | Narrative                                     |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Travlr Getaways: software design | [Enhanced application](https://github.com/NicholasDeniz/CS-465-Full-Stack-Development/tree/CS499-travlr-enhanchment)       | [Travlr narrative](travlr-narrative.md)       |
| Grazioso Salvare: algorithms     | [Sorting enhancement](https://github.com/NicholasDeniz/CS340-GraziosoSalvare/tree/CS499-GraziosoSalvare-EnhancementTwo)    | [Algorithm narrative](algorithm-narrative.md) |
| Grazioso Salvare: databases      | [Database enhancement](https://github.com/NicholasDeniz/CS340-GraziosoSalvare/tree/CS499-GraziosoSalavre-EnhancementThree) | [Database narrative](databases-narrative.md)  |

Original code: [Travlr Getaways](https://github.com/NicholasDeniz/CS-465-Full-Stack-Development/tree/module7) and [Grazioso Salvare](https://github.com/NicholasDeniz/CS340-GraziosoSalvare/tree/main/CS340-GraziosoSalvareOriginal).

Supporting material: [code review](https://www.youtube.com/watch?v=Bb94dRamimo), [self-assessment](professionalself-assessment.md), [application setup](setup-instructions.md), and [Travlr narrative with screenshots](CS499-Capstone-Travlr-Enhancement-Narrative.docx).

These applications began as course projects and were extended for CS 499. The homepage sorting demo uses sample records. The performance figures come from the saved academic comparisons; their scope and limits are explained in the narratives.
