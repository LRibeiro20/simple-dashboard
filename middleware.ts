// middleware.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

console.log('Auth config loaded:', authConfig); // Add this line

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  runtime: 'nodejs',
};