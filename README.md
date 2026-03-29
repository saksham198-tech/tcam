# TCAM - The Chromatica Academy of Music

This is a Next.js 15 application integrated with Firebase and Genkit.

## Deployment Guide

### Step 1: Push to GitHub
1. Create a new repository on GitHub.
2. Push your current code to that repository.

### Step 2: Set up Firebase App Hosting
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project `tcam-music`.
3. In the left sidebar, navigate to **Build > App Hosting**.
4. Click **Get Started** and connect your GitHub repository.
5. Follow the wizard to set up the build settings (it will automatically detect Next.js).
6. Once the build completes, Firebase will provide a `.web.app` or `.firebaseapp.com` URL.

### Step 3: Connect Crazy Domains (Domain Setup)
1. In the Firebase App Hosting dashboard, go to the **Settings** or **Custom Domains** tab.
2. Click **Add Custom Domain** and enter your domain purchased from `crazydomains.in`.
3. Firebase will provide you with **DNS Records** (usually `A` records or a `CNAME`).
4. Log in to your **Crazy Domains Control Panel**.
5. Find your domain and look for **DNS Settings** or **Zone Manager**.
6. Add the records provided by Firebase:
   - **Type:** A
   - **Host:** @ (or leave blank)
   - **Points to:** [IP address provided by Firebase]
7. Save the changes. Note that DNS propagation can take anywhere from 1 to 24 hours.

## Local Development

```bash
npm run dev
```

The app will be available at `http://localhost:9002`.