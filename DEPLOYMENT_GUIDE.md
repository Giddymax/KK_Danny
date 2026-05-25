# K.K. Danny Enterprise Deployment Guide

This guide explains how to put the dashboard online in a beginner-friendly way.

Recommended setup:

- Host the website on Vercel.
- Use Supabase for login, database tables, and file storage.
- Keep secret keys out of the code.

The app can open in demo mode without Supabase, but real admin/staff login needs Supabase keys.

## What You Need First

Create these accounts:

- A GitHub account: https://github.com
- A Vercel account: https://vercel.com
- A Supabase account: https://supabase.com

You also need this project folder:

```text
C:\Users\samam\Desktop\DEVELOPER\K.K. DANNY ENTERPRISE
```

## Step 1: Check The App Locally

Open PowerShell inside the project folder and run:

```powershell
npm install
npm run build
```

If the build succeeds, run the app locally:

```powershell
npm run dev -- --port 3000
```

Open this link:

```text
http://localhost:3000/admin/login
```

You should see the K.K. Danny Enterprise sign-in page.

## Step 2: Create A Supabase Project

1. Go to https://supabase.com/dashboard.
2. Click **New project**.
3. Choose your organization.
4. Enter a project name, for example:

```text
kk-danny-enterprise
```

5. Create a strong database password and store it safely.
6. Choose the closest region available to your users.
7. Click **Create new project**.

Wait for Supabase to finish setting up the project.

## Step 3: Add The Database Tables

In Supabase:

1. Open your project.
2. Go to **SQL Editor**.
3. Click **New query**.
4. Open this file from the project:

```text
supabase/schema.sql
```

5. Copy everything in that file.
6. Paste it into the Supabase SQL editor.
7. Click **Run**.

This creates the tables, roles, security policies, storage buckets, and default business settings.

Important: if Supabase shows an error, do not keep clicking Run repeatedly. Read the error message first. If the error says something already exists, part of the setup may already have been created.

## Step 4: Create Your First Admin User

In Supabase:

1. Go to **Authentication**.
2. Go to **Users**.
3. Click **Add user**.
4. Enter the admin email and password.
5. Confirm/create the user.

After the user is created:

1. Go to **Table Editor**.
2. Open the `profiles` table.
3. Find the new user profile.
4. Change the `role` value to:

```text
admin
```

5. Make sure `is_active` is true.

## Step 5: Copy Your Supabase Keys

In Supabase:

1. Go to **Project Settings**.
2. Open **API**.
3. Copy the **Project URL**.
4. Copy the **Publishable key**.
5. Copy the **Service role key**. Keep this key private and only use it as a server-side environment variable.

Use these names in the app:

```text
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Do not use the Supabase secret key or service role key in `NEXT_PUBLIC_` variables.

## Step 6: Test Supabase Locally

Create a file named `.env.local` in the project folder.

Add your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Restart the local server:

```powershell
npm run dev -- --port 3000
```

Open:

```text
http://localhost:3000/admin/login
```

Sign in with the admin email and password you created in Supabase.

If it works locally, you are ready to deploy.

## Step 7: Put The Project On GitHub

The easiest Vercel deployment uses GitHub.

If the project is not already in GitHub:

1. Create a new GitHub repository.
2. Upload/push this project folder to that repository.
3. Make sure these files are included:

```text
package.json
package-lock.json
next.config.ts
src/
public/logo.jpeg
supabase/schema.sql
```

Do not upload `.env.local`.

## Step 8: Deploy On Vercel

1. Go to https://vercel.com/dashboard.
2. Click **Add New**.
3. Click **Project**.
4. Import the GitHub repository for this app.
5. Vercel should detect **Next.js** automatically.
6. Keep the root directory as the project root.
7. Open the **Environment Variables** section.
8. Add these three variables:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY
```

9. Paste the same values you used in `.env.local`.
10. Add them for Production, Preview, and Development if Vercel asks.
11. Click **Deploy**.

Wait for Vercel to finish building.

## Step 9: Test The Live Website

After Vercel finishes, it gives you a live URL.

Open:

```text
https://your-vercel-site.vercel.app/admin/login
```

Check these items:

- The K.K. Danny Enterprise logo appears.
- The login page opens without the setup warning.
- The admin email and password work.
- After login, the dashboard opens.
- The sidebar, POS, sales, inventory, and receipt preview pages are usable.
- Mobile view works on your phone.

## Step 10: Add The Live Site To Supabase Auth

In Supabase:

1. Go to **Authentication**.
2. Open **URL Configuration**.
3. Set the Site URL to your Vercel URL:

```text
https://your-vercel-site.vercel.app
```

4. Add redirect URLs if needed:

```text
https://your-vercel-site.vercel.app/**
http://localhost:3000/**
```

This helps Supabase trust your local and deployed app URLs.

## Common Problems

### The page says Supabase is not connected

This means the environment variables are missing or typed incorrectly.

Check:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

On Vercel, after changing environment variables, redeploy the app.

### Login fails

Check:

- The user exists in Supabase Authentication.
- The password is correct.
- The matching row exists in `profiles`.
- The profile role is `admin` or `staff`.
- `is_active` is true.

### The dashboard works locally but not on Vercel

Check Vercel environment variables.

The values in Vercel must match `.env.local`.

Then redeploy.

### Build fails on Vercel

Run this locally first:

```powershell
npm run build
```

If local build fails, fix that error before redeploying.

If local build passes but Vercel fails, check:

- The repository includes `package-lock.json`.
- Vercel detected Next.js.
- The project root is correct.
- Environment variables were added before deployment.

### SQL setup fails

Open the Supabase SQL error message and read the first error.

Common causes:

- You already ran part of the schema before.
- A table, type, policy, or bucket already exists.
- You pasted only part of the SQL file.

If unsure, create a fresh Supabase project and run `supabase/schema.sql` once.

## Safety Rules

- Never share the database password publicly.
- Never put the Supabase service role key in frontend code.
- Never commit `.env.local` to GitHub.
- Use the publishable key for this app, not the secret key.
- Create separate staff accounts instead of sharing one login.

## Useful Commands

Install dependencies:

```powershell
npm install
```

Run locally:

```powershell
npm run dev -- --port 3000
```

Check production build:

```powershell
npm run build
```

Start production build locally:

```powershell
npm run start
```

Run responsive verification:

```powershell
node tools\verify-responsive.mjs
```

## Official Help Pages

- Vercel deployments: https://vercel.com/docs/deployments
- Vercel environment variables: https://vercel.com/docs/environment-variables
- Supabase getting started: https://supabase.com/docs/guides/getting-started
- Supabase dashboard: https://supabase.com/dashboard
