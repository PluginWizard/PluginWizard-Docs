# Contributing to PluginWizard-Docs

Thanks for helping improve PluginWizard documentation.

This repository is built with Astro + Starlight. Contributions can include fixes, new pages, clarifications, examples, and typo corrections.

## Ways to Contribute

- Fix typos, broken links, or unclear explanations.
- Add or improve guides and reference pages.
- Update examples for newer PluginWizard behavior.
- Improve navigation structure and page discoverability.
- Improve accessibility and readability of docs content.

## Development Setup

1. Fork the repository.
2. Clone your fork:

```bash
git clone https://github.com/<your-username>/PluginWizard-Docs.git
cd PluginWizard-Docs
```

3. Install dependencies:

```bash
npm install
```

4. Start the dev server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal (usually http://localhost:4321).

## Project Structure

- Main docs content lives in `src/content/docs/`.
- Shared styles live in `src/styles/custom.css`.
- Custom component overrides live in `src/components/overrides/`.
- Public static assets (for example favicon/images) live in `public/`.

## Writing Guidelines

- Use clear, direct language.
- Prefer short paragraphs and meaningful headings.
- Keep examples practical and copy-paste friendly.
- Explain why, not only what.
- Use consistent terminology across pages.
- When adding a new page, include frontmatter fields like `title` and `description`.

## Markdown and MDX Guidelines

- Use Markdown for normal docs pages.
- Use MDX only when you need components.
- Keep component usage simple and consistent.
- Verify internal links and anchors after edits.

## Before Opening a Pull Request

Run these checks locally:

```bash
npm run build
```

Please make sure:

- The site builds successfully.
- New or changed links work.
- Formatting and wording are polished.
- Your change is focused and easy to review.

## Pull Request Checklist

When opening a PR, include:

- A clear summary of what changed.
- Why the change is needed.
- Screenshots for visual/UI changes.
- Related issue link (if applicable).

## Commit Guidelines

- Use small, focused commits.
- Write descriptive commit messages.
- Avoid unrelated cleanup in the same PR.

## Reporting Issues

When creating an issue, include:

- The page/path affected.
- What is wrong or missing.
- Suggested improvement (if you have one).
- Screenshots or reproduction steps for visual/behavior issues.

## Code of Conduct

Be respectful and constructive in all discussions and reviews.

## Questions

If you are unsure about direction or scope, open an issue first before investing time in a large change.
