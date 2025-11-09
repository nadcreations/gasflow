# Netlify Deployment Guide

## ✅ Index Page Location

**Your index/homepage is at:** `src/app/page.tsx`

This is the standard Next.js 15 App Router structure. When someone visits your site at `https://gasflowpk.netlify.app/`, Next.js will automatically serve this page.

## 🚀 Netlify Configuration

### Option 1: Using netlify.toml (Recommended - Already Added)

The `netlify.toml` file in the root configures everything automatically:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20.11.0"
```

### Option 2: Manual Configuration in Netlify Dashboard

If you need to configure manually:

1. **Go to Site Settings → Build & Deploy → Build Settings**

2. **Set these values:**
   - **Base directory:** Leave empty
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Functions directory:** Leave empty

3. **Add Environment Variable:**
   - Go to **Site Settings → Environment Variables**
   - Add: `NODE_VERSION` = `20.11.0`

## 🔄 Trigger New Deploy

After pushing the latest changes:

1. Go to Netlify Dashboard
2. Click **Deploys** tab
3. Click **"Trigger deploy" → "Clear cache and deploy site"**
4. Wait 2-3 minutes for build

## 🐛 If Build Fails

Check the build log in Netlify. Common issues:

### Issue 1: Dependencies
If you see dependency errors:
- The `package.json` and `package-lock.json` are properly configured
- Netlify will run `npm install` automatically

### Issue 2: Node Version
If you see Node version errors:
- Check that `NODE_VERSION=20.11.0` is set in environment variables
- Or use the netlify.toml (already added)

### Issue 3: Build Errors
If TypeScript/build errors occur:
- Check the Netlify build log for specific errors
- The codebase is already tested and should build successfully

## ✅ Expected Build Output

Successful build should show:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ...
├ ○ /about                               ...      ...
├ ○ /blog                                ...      ...
└ ○ /contact                             ...      ...
...

○  (Static)  prerendered as static content
```

## 📄 Page Structure

Your site has 11 pages:

```
/ (homepage)          → src/app/page.tsx
/about                → src/app/about/page.tsx
/blog                 → src/app/blog/page.tsx
/customers            → src/app/customers/page.tsx
/contact              → src/app/contact/page.tsx
/demo                 → src/app/demo/page.tsx
/features             → src/app/features/page.tsx
/help                 → src/app/help/page.tsx
/pricing              → src/app/pricing/page.tsx
/privacy              → src/app/privacy/page.tsx
/terms                → src/app/terms/page.tsx
```

## 🌐 Live Site

After successful deployment, your site will be live at:
**https://gasflowpk.netlify.app/**

## 🔧 Custom Domain (Optional)

To add a custom domain:

1. Go to **Site Settings → Domain Management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration steps

## 📞 Support

If deployment issues persist:
- Check Netlify build logs
- Verify all files are pushed to GitHub
- Ensure `src/app/page.tsx` exists (it does!)

---

**Note:** The index page (`src/app/page.tsx`) is the standard Next.js App Router homepage. Netlify automatically recognizes this structure.
