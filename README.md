# SiteMorph – Landing Page

This repository contains the **SiteMorph marketing / landing website**.

It is a **static site** generated from source files and deployed automatically to AWS.
The setup is intentionally simple and production-ready so it can later integrate
cleanly with the full SiteMorph application built by Snapsoft.

---

## Repository purpose

- Marketing & landing pages for **sitemorph.ai**
- Independent from the main SiteMorph application
- Designed to be hosted on **AWS S3 + CloudFront**
- Auto-deployed on every push to `main`

Future application routes (e.g. `/app`, `/api`) will be added behind the same domain
without modifying this repository.

---

## Project structure

├── src/ # Editable source files (Shuffle export)
├── public/ # Build output (static files served to users)
├── package.json # Build scripts and dependencies
├── buildspec.yml # AWS CodeBuild instructions
└── README.md

---

## Local development

This project does **not** run a development server.

To build the site locally:

```bash
npm install
npm run build
```
