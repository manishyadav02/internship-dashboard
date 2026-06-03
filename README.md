# Student Learning Dashboard

## 1. Overview
A production-grade, fully animated Student Learning Dashboard built with Next.js App Router. It features a responsive Bento Grid layout, beautiful dark mode aesthetics with grain textures, and fluid micro-interactions powered by Framer Motion.

## 2. Tech Stack
- **Next.js (App Router)**: For robust routing, server-side data fetching, and streaming with Suspense.
- **Supabase & @supabase/ssr**: For a reliable PostgreSQL database and secure server-side fetching.
- **Tailwind CSS**: For fast, maintainable, and responsive styling with custom design tokens.
- **Framer Motion**: To provide premium entrance animations, layout transitions, and hover physics.
- **Lucide React**: For beautiful, consistent iconography.

## 3. Architecture Decisions
- **Server vs Client Components**: `app/page.tsx` is a Server Component to securely fetch course data from Supabase. Components that require interactivity or animations (`Sidebar.tsx`, `CourseTile.tsx`, `HeroTile.tsx`) are marked `"use client"`.
- **Data Fetching & Suspense**: Course data is fetched securely on the server using `@supabase/ssr`. The grid is wrapped in a `<Suspense>` boundary with a skeleton fallback (`CourseSkeletonGrid`), ensuring a fast initial load while data resolves.
- **Responsive Navigation**: The sidebar collapses from full-width to icon-only on tablets, and transforms into a fixed bottom navigation bar on mobile devices.

## 4. Supabase Setup
To run this project with your own database:
1. Create a Supabase project.
2. Run the following SQL in the SQL Editor to create the `courses` table and seed data:
   ```sql
   CREATE TABLE courses (
     id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
     title text NOT NULL,
     progress integer NOT NULL,
     icon_name text NOT NULL,
     created_at timestamptz DEFAULT now()
   );

   INSERT INTO courses (title, progress, icon_name) VALUES
     ('Advanced React Patterns', 75, 'Layers'),
     ('System Design Fundamentals', 40, 'Network'),
     ('TypeScript Deep Dive', 90, 'FileCode'),
     ('Database Engineering', 55, 'Database');
   ```

## 5. Running Locally
1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 6. Challenges
- **Dynamic Icon Resolution**: Storing icon strings in the database required mapping them safely to Lucide React components on the client side without throwing errors.
- **Framer Motion Layout Shifts**: Preventing layout shifts during stagger and spring animations required strict use of `transform` (scale, y) rather than animating margin or padding.

## 7. Deployment
1. Push your code to a GitHub repository.
2. Import the project in [Vercel](https://vercel.com).
3. Ensure the Framework Preset is set to Next.js.
4. Add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables in Vercel's settings.
5. Deploy.
