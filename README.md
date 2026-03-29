# TCAM - The Chromatica Academy of Music

This is a Next.js 15 application integrated with Firebase and Genkit.

## 🚀 Final Deployment Steps (After GitHub Push)

Since your code is already on GitHub, follow these three parts to go live on your `crazydomains.in` domain.

### Part 1: Connect GitHub to Firebase
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Select your project: **tcam-music**.
3. In the left sidebar, go to **Build > App Hosting**.
4. Click **Get Started**.
5. **Connect to GitHub**: Follow the prompts to authorize Firebase to see your repositories.
6. **Select Repository**: Choose your `tcam-music` (or similarly named) repository.
7. **Deployment Settings**: 
   - Root directory: `/`
   - Live branch: `main` (or `master`)
8. Click **Finish and Deploy**. Firebase will now start building your Next.js app. This usually takes 3-5 minutes.

### Part 2: Add your Crazy Domains URL
Once the deployment status shows "Success":
1. In the App Hosting dashboard, click on the **Settings** tab.
2. Under **Custom Domains**, click **Add Domain**.
3. Enter your domain (e.g., `yourdomain.in` or `www.yourdomain.in`).
4. Firebase will provide you with **DNS Records** (usually 1 or 2 IP addresses for "A" records).

### Part 3: Configure Crazy Domains DNS
1. Log in to your [Crazy Domains Account](https://www.crazydomains.in/).
2. Go to **Domains** > **Manage** (next to your domain).
3. Look for **DNS Settings** or **Zone Manager**.
4. **Add/Edit A Records**:
   - **Host/Subdomain**: `@`
   - **Type**: `A`
   - **Value/Points to**: [The IP address provided by Firebase]
   - **TTL**: 3600 (or default)
5. (Optional) Add a CNAME for `www`:
   - **Host**: `www`
   - **Type**: `CNAME`
   - **Value**: `[yourproject].web.app` (or as provided by Firebase)
6. **Save Changes**. Note: It can take a few hours for the domain to start working globally.

## Local Development

```bash
npm run dev
```

The app will be available at `http://localhost:9002`.
