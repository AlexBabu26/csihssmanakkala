# C.S.I. H.S.S. School Website - Architecture Overview

## Overview

This is a full-stack web application for C.S.I. H.S.S. for the Partially Hearing, Manakkala - a specialized school established in 1981. The application is built as a modern React frontend with an Express.js backend, designed to showcase the school's mission, features, and provide information to prospective students and families.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: React Router DOM for client-side navigation
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot module replacement via Vite middleware

### Project Structure
```
/client          # React frontend application
/server          # Express.js backend
/shared          # Shared types and schemas
/migrations      # Database migration files
```

## Key Components

### Frontend Components
- **Hero**: Landing section with school branding and call-to-action
- **About**: School history, statistics, and management information
- **Features**: Key benefits and unique selling points
- **Contact**: Contact information and school hours
- **Footer**: Additional links and school management details

### Backend Components
- **Storage Interface**: Abstracted data layer with memory and database implementations
- **Routes**: RESTful API endpoints (currently minimal setup)
- **Vite Integration**: Development server with HMR support

### UI System
- **Design System**: Based on shadcn/ui with "new-york" style variant
- **Theme**: Neutral color palette with CSS custom properties
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Components**: Comprehensive UI library including forms, navigation, feedback, and layout components

## Data Flow

### Current Implementation
- **In-Memory Storage**: Uses MemStorage class for user management
- **Schema Definition**: Drizzle schema with Zod validation for type safety
- **API Layer**: Express routes with structured error handling and logging

### Database Schema
```typescript
users {
  id: serial (primary key)
  username: text (unique, not null)
  password: text (not null)
}
```

### Frontend Data Management
- **React Query**: Handles server state, caching, and synchronization
- **Form Management**: React Hook Form with Zod schema validation
- **Toast Notifications**: Dual toast system (Radix + Sonner) for user feedback

## External Dependencies

### Production Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: drizzle-orm with drizzle-zod for type-safe database operations
- **UI Components**: Extensive Radix UI component library
- **Utilities**: class-variance-authority, clsx, tailwind-merge for styling
- **Date Handling**: date-fns for date manipulation
- **Carousel**: embla-carousel-react for image/content carousels

### Development Tools
- **Build**: esbuild for production builds
- **Database**: drizzle-kit for migrations and schema management
- **Replit Integration**: Special plugins for Replit development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations handle schema changes

### Environment Configuration
- **Development**: NODE_ENV=development with Vite HMR
- **Production**: NODE_ENV=production with static file serving
- **Database**: Requires DATABASE_URL environment variable

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Apply database schema changes

### Hosting Considerations
- **Static Assets**: Frontend built to `dist/public` for static serving
- **Server**: Express server serves both API and static files
- **Database**: Configured for Neon serverless PostgreSQL
- **Session Storage**: Uses connect-pg-simple for PostgreSQL session store

The application is structured to be easily deployable on platforms like Replit, with development tools integrated for the Replit environment while maintaining compatibility with other hosting providers.