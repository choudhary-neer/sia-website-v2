# SiaWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Clean URL Deployment (No Hash)

This app uses Angular path routing (for example `/about`, `/membership`) and requires SPA fallback rewrites in hosting.

- Deploy output from `dist/sia-website/browser`.
- Included host configs:
	- IIS: `public/web.config`
	- Apache: `public/.htaccess`
	- Netlify: `public/_redirects`
	- Azure Static Web Apps: `public/staticwebapp.config.json`
	- Vercel: `vercel.json`
	- Nginx: `nginx-spa.conf` (server template)
	- GitHub Pages fallback: `public/404.html` + route restore logic in `src/main.ts`

After build, these files are copied into the deploy output (`dist/sia-website/browser`).

### Deploy Scripts

- Build production output: `npm run build:prod`
- Build only (no deploy): `npm run deploy:prep`
- Netlify deploy: `npm run deploy:netlify`
- Vercel deploy: `npm run deploy:vercel`
- GitHub Pages deploy: `npm run deploy:github-pages`
- Azure Static Web Apps deploy: `npm run deploy:azure-swa`

Notes:
- IIS, Apache, and Nginx typically deploy by copying `dist/sia-website/browser` to the web root.
- Vercel uses `vercel.json` from project root; other host-specific rewrites are included in `public/` and copied at build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
