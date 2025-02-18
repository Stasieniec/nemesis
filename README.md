# Nemesis

A platform where users are matched with their nemesis to achieve goals through ironic rivalry and mutual motivation.

## Design System

### Colors
Our color system is built around a dark theme that emphasizes rivalry and motivation:

- **Background**: Deep slate (`224 71.4% 4.1%`)
- **Primary**: Crimson (`345 82.7% 40.8%`) - Used for key actions and nemesis-related elements
- **Accent**: Electric blue (`196 100% 50%`) - Used for highlights and interactive elements
- **Text**: Light gray (`210 20% 98%`) - For optimal readability
- **Secondary/Muted**: Dark slate (`217.2 32.6% 17.5%`) - For subtle UI elements

### Typography

We use a three-font system for clear hierarchy and purpose:

- **Space Grotesk** (`font-heading`) - Headings and brand elements
  ```tsx
  className="font-heading"
  ```
- **Inter** (`font-sans`) - Body text and UI elements
  ```tsx
  className="font-sans" // Default, no need to specify
  ```
- **JetBrains Mono** (`font-mono`) - Metrics and statistics
  ```tsx
  className="font-mono"
  ```

## Tech Stack Documentation

### Core Infrastructure

- **Cloudflare Pages**
  - Primary hosting platform
  - Automatic deployments from GitHub
  - Edge network distribution
  - Built-in Functions for API endpoints

- **Cloudflare Pages Functions**
  - Serverless API endpoints
  - Simple backend logic
  - Automatic deployment with Pages
  - 100,000 invocations per day (free tier)

### Database & Real-time Features
- **Supabase**
  - PostgreSQL database
  - Real-time subscriptions
  - Row-level security
  - Built-in authentication helpers
  - Automatic REST & GraphQL APIs
  - Database backups
  - User presence detection

## Frontend Architecture

### Core Framework
- **Next.js**
  - React framework
  - Server-side rendering
  - API routes
  - TypeScript support
  - File-based routing
  - Image optimization

### UI & Styling
- **Tailwind CSS**
  - Utility-first CSS framework
  - Built-in responsive design
  - Custom design system support
  - JIT compiler

- **Shadcn/ui**
  - Reusable component collection
  - Accessibility built-in
  - Customizable components
  - Dark theme optimized

## Component Usage

### Basic Button Examples
```tsx
// Primary action
<Button size="lg">Get Started</Button>

// Secondary action
<Button variant="outline" size="lg">Learn More</Button>

// Destructive action
<Button variant="destructive" size="lg">Find Your Nemesis</Button>
```

### Typography Examples
```tsx
// Main heading
<h1 className="font-heading text-5xl font-bold tracking-tight">
  Welcome to <span className="text-primary">Nemesis</span>
</h1>

// Body text
<p className="text-lg text-muted-foreground">
  Find your rival, achieve your goals
</p>

// Metrics
<div className="font-mono text-sm text-muted-foreground">
  <p>Active Rivalries: <span className="text-accent">1,337</span></p>
</div>
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (copy `.env.example` to `.env.local`)
4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Development Guidelines

1. **Component Structure**
   - Place reusable UI components in `src/components/ui`
   - Place feature-specific components in `src/components/features`
   - Use TypeScript for all components

2. **Styling**
   - Use Tailwind utilities for styling
   - Follow the color system defined in `globals.css`
   - Use the appropriate font family for each context

3. **State Management**
   - Use Zustand for global state
   - Use React Query for server state
   - Implement real-time features with Supabase subscriptions

4. **Authentication**
   - Implement auth flows using Clerk
   - Protect API routes and pages appropriately
   - Handle user sessions and profiles

5. **Database**
   - Define schemas in Supabase
   - Implement row-level security policies
   - Set up real-time subscriptions for live features

## Deployment

1. Push changes to GitHub
2. Cloudflare Pages will automatically deploy
3. Database migrations run through Supabase CLI

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Clerk Documentation](https://clerk.dev/docs)
- [Stripe Documentation](https://stripe.com/docs)
