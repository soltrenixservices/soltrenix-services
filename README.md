# Soltrenix Website (React + Bootstrap)

Pages: Home, About, Services, FAQs, Blog, Contact. Links in the navbar on large screens; toggle button with side menu on mobile.

## Run

    npm install
    npm run dev       # development server
    npm run build     # production build in dist/

Packages used (already listed in package.json):

    npm install bootstrap
    npm install react-bootstrap
    npm install @fortawesome/fontawesome-svg-core
    npm install @fortawesome/free-solid-svg-icons
    npm install @fortawesome/free-regular-svg-icons
    npm install @fortawesome/free-brands-svg-icons
    npm install @fortawesome/react-fontawesome

## Where to edit

- `src/data.js`: all text (services, work, FAQs, blog posts, social links).
- `src/App.css`: colors, fonts and styles. Theme colors are at the top.
- `src/pages/`: one file per page.
- `src/pages/Contact.jsx`: connect the form to your email service or API (see TODO).
- `src/data.js` socials: Facebook, Instagram and GitHub links (shown in the footer and on the Contact page).
