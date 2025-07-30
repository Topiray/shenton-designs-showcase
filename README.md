# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/daf45540-f7f5-42f6-9829-6278b8093e9c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/daf45540-f7f5-42f6-9829-6278b8093e9c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### For GitHub Pages (Recommended for Custom Domains)

This project now includes Static Site Generation (SSG) to handle direct URL access on GitHub Pages.

**Build Command:**
```bash
npm run build:ssg
```

This will:
1. Build the React application
2. Generate static HTML files for each route
3. Copy the 404.html file for GitHub Pages compatibility

**Deploy to GitHub Pages:**
1. Push your code to GitHub
2. Go to Settings > Pages
3. Set source to "GitHub Actions" or "Deploy from a branch"
4. Use the `dist` folder as your build output

**Why SSG is needed:**
- When someone types `https://mshenton.com/projects/rentalmaster` directly in the browser, GitHub Pages looks for a physical file at that path
- Without SSG, it returns a 404 because React Router handles routing client-side
- With SSG, we generate static HTML files for each route, so direct URL access works

### For Lovable

Simply open [Lovable](https://lovable.dev/projects/daf45540-f7f5-42f6-9829-6278b8093e9c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
