import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
 locales: ['en', 'fr'],
 defaultLocale: 'en',
})

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware((auth, request) => {
 if (isDashboardRoute(request)) auth().protect()

 return intlMiddleware(request)
})

export const config = {
 matcher: [
  '/', '/marketplace', '/explore', '/resources', '/sign-up', '/sing-in', '/events', '/profile', '/community', '/(en|fr)/:path*',
 '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
 '/(api|trpc)(.*)',
 ],
}
