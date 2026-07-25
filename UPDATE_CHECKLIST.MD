# Dependency Update Checklist

- [ ] Run `npm ci` and verify dependencies install without additional flags or
      manual changes.
- [ ] Run `npm run build` and verify the production site builds successfully.
- [ ] Run `npm run start` and verify the docs are visible at
      http://localhost:3000.
- [ ] With the local site running, verify Mermaid diagrams render correctly.
- [ ] With the local site running, verify slides open correctly.
- [ ] When updating Docusaurus, check whether its `@mermaid-js/layout-elk` peer
      dependency supports 0.2.x or later; if so, remove the corresponding
      Dependabot ignore rule in `.github/dependabot.yml`.
