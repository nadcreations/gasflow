# Gasflow Website

A modern, responsive marketing website for Gasflow - LPG Cylinder Management Software.

## 🚀 Live Demo

Visit the live site: [Your Netlify URL]

## 📦 Tech Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

## 📄 Pages

- **Landing Page** (`/`) - Main homepage with features, pricing, testimonials
- **About** (`/about`) - Company mission, vision, values, and team
- **Blog** (`/blog`) - Articles, resources, and newsletter
- **Customers** (`/customers`) - Case studies and success stories
- **Contact** (`/contact`) - Contact form and support options
- **Features** (`/features`) - Detailed feature breakdown
- **Pricing** (`/pricing`) - Pricing plans and comparison
- **Help** (`/help`) - Knowledge base and FAQs
- **Demo** (`/demo`) - Request demo form
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms & conditions

## 🎨 Design System

**Colors**: Blue-to-purple-to-indigo gradients
- Primary: Blue-600 (#2563eb)
- Secondary: Purple-600 (#9333ea)
- Accent: Indigo-600 (#4f46e5)

**Typography**: Inter font family

**Components**: Consistent card styles, hover effects, animations

## 🛠️ Development

### Prerequisites

- Node.js >= 20
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
gasflow-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Landing page (index)
│   │   ├── layout.tsx    # Root layout
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog page
│   │   ├── customers/    # Customer stories
│   │   ├── contact/      # Contact page
│   │   └── ...
│   ├── components/       # Reusable components
│   │   ├── ui/          # Radix UI components
│   │   └── ...
│   └── lib/             # Utilities and helpers
├── public/              # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Deployment

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 20

3. Environment variables (if needed):
   - `NEXT_PUBLIC_API_URL` - Your API endpoint

4. Deploy!

Netlify will automatically rebuild when you push to the `main` branch.

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🔧 Configuration

### Next.js Config

See `next.config.ts` for Next.js configuration.

### Tailwind Config

See `tailwind.config.js` for Tailwind CSS customization.

## 📝 Environment Variables

No environment variables required for basic functionality.

Optional:
- `NEXT_PUBLIC_API_URL` - Backend API URL for contact forms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

Copyright © 2024 Biznhand. All rights reserved.

## 📧 Contact

- Website: https://biznhand.com
- Email: sales@biznhand.com
- Phone: +92 300 1234567

---

Built with ❤️ by the Biznhand team
