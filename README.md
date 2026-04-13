# Portfolio Website (Next.js)

A professional and fully responsive portfolio website built with Next.js and Tailwind CSS.

## Included Features

- Responsive navbar with mobile menu
- Hero section with designation, profile image, intro, resume button, and social links
- About section with journey, interests, and personality-focused content
- Skills section with categorized graphical progress bars
- Educational qualification and experience sections
- Projects grid (3 projects) with card layout and dynamic detail pages
- Project detail pages with:
  - Main stack
  - Description
  - Live link
  - GitHub client link
  - Challenges faced
  - Future improvements
- Contact section with email, phone, and WhatsApp
- Simple elegant footer

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize Content

Update all profile, skills, education, experience, contact, and project data in:

`app/lib/portfolio-data.ts`

## Resume Button

The resume button is currently clickable and points to `#`.  
When your resume is ready, set `profile.resumeUrl` in `app/lib/portfolio-data.ts` to your hosted PDF path.
