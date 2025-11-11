# Trainify Authentication System

## Overview

This project now has a complete authentication and authorization system with role-based access control.

## Features Implemented

### 1. Authentication Context (`src/context/AuthContext.tsx`)

- Centralized authentication state management using React Context API
- Persistent sessions using localStorage
- `login()` function for user authentication
- `logout()` function to clear session
- `useAuth()` hook for accessing auth state in any component

### 2. Protected Routes (`src/components/ProtectedRoute.tsx`)

- HOC component that wraps routes requiring authentication
- Checks if user is authenticated
- Verifies user role (admin/user)
- Automatic redirects:
  - Not authenticated → `/login`
  - Wrong role → appropriate dashboard

### 3. Role-Based Access Control

Two user roles are supported:

- **Admin**: Access to `/dashboard/*` pages
- **User**: Access to `/user-dashboard` page

### 4. Navbar Visibility

- Navbar is shown everywhere EXCEPT admin dashboard pages (`/dashboard/*`)
- Automatically detects current route and shows/hides accordingly
- Implemented via `NavbarWrapper` component

### 5. Updated Components

#### Login Page (`src/pages/LoginPage.tsx`)

- Integrated with AuthContext
- Role detection: emails containing "admin" → admin role, others → user role
- Automatic navigation to appropriate dashboard

#### Register Page (`src/pages/RegisterPage.tsx`)

- Integrated with AuthContext
- User selects role during registration
- Automatically logs in user after successful registration

#### Navbar (`src/components/common/Navbar.tsx`)

- Login button → redirects to `/login` (not `/dashboard`)
- Register button → redirects to `/register`
- Dashboard button shown only when logged in
- Logout button with full functionality

#### Topbar (`src/components/dashboards/Topbar/Topbar.tsx`)

- Shows current user name and email
- Logout button that clears session and returns to homepage
- User avatar with first letter of name

## How to Use

### For Development/Testing

#### Test Admin Access:

1. Go to `/login`
2. Use email containing "admin" (e.g., `admin@trainify.com`)
3. Enter any password
4. You'll be redirected to `/dashboard` (admin panel)
5. Try accessing `/user-dashboard` → You'll be redirected back to `/dashboard`

#### Test User Access:

1. Go to `/login`
2. Use any email WITHOUT "admin" (e.g., `user@trainify.com`)
3. Enter any password
4. You'll be redirected to `/user-dashboard`
5. Try accessing `/dashboard` → You'll be redirected back to `/user-dashboard`

#### Test Registration:

1. Go to `/register`
2. Fill in the form
3. Select role (User or Admin)
4. Submit
5. You'll be automatically logged in and redirected

### Protected Routes

All routes in `App.tsx` are now properly protected:

```tsx
// Public routes (no authentication required)
- /
- /login
- /register

// Admin only routes (requireRole="admin")
- /dashboard
- /dashboard/meals
- /dashboard/training
- /dashboard/users

// User only route (requireRole="user")
- /user-dashboard
```

### Accessing Auth State in Components

```tsx
import { useAuth } from "../context/AuthContext";

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  if (isAuthenticated) {
    console.log(`Logged in as ${user.name} (${user.role})`);
  }

  // ...
}
```

## Security Notes

⚠️ **Important**: This is a DEMO implementation for learning purposes.

In a production environment, you should:

1. Use a real backend API for authentication
2. Store JWT tokens securely (httpOnly cookies)
3. Validate tokens on the server
4. Implement proper password hashing
5. Add refresh token mechanism
6. Add CSRF protection
7. Use HTTPS only

## Files Changed/Created

### New Files:

- `src/context/AuthContext.tsx` - Authentication context
- `src/components/ProtectedRoute.tsx` - Route protection component
- `src/components/common/NavbarWrapper.tsx` - Conditional navbar wrapper

### Modified Files:

- `src/App.tsx` - Added AuthProvider and ProtectedRoute wrappers
- `src/pages/LoginPage.tsx` - Integrated with AuthContext
- `src/pages/RegisterPage.tsx` - Integrated with AuthContext
- `src/pages/LandingPage.tsx` - Removed Navbar (now in NavbarWrapper)
- `src/components/common/Navbar.tsx` - Updated buttons and logout functionality
- `src/components/dashboards/Topbar/Topbar.tsx` - Added logout and user display

## Features Summary

✅ Complete authentication flow (login/register/logout)
✅ Role-based access control (admin vs user)
✅ Protected routes with automatic redirects
✅ Persistent sessions using localStorage
✅ Navbar visibility based on current route
✅ User information display in dashboards
✅ Proper navigation flow throughout the app

## Next Steps for Production

To make this production-ready, you would need to:

1. Connect to a real backend API
2. Implement proper JWT token management
3. Add loading states during API calls
4. Add error handling for failed authentication
5. Implement password reset functionality
6. Add email verification
7. Implement rate limiting
8. Add two-factor authentication (optional)
