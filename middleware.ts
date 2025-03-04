import { i18nRouter } from 'next-i18n-router';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function middleware(request) {
  const availableLanguage = process.env.AVAILABLE_LANGUAGE?.split(',') || [];

  const i18nResponse = i18nRouter(request, {
    locales: availableLanguage,
    defaultLocale: 'en',
  });

  const response = i18nResponse || NextResponse.next();

  const cookiesStore = cookies();
  const currentLocale = cookiesStore.get('NEXT_LOCALE')?.value;

  response.cookies.set('locales', JSON.stringify(availableLanguage), { path: '/' });
  if (!currentLocale) response.cookies.set('NEXT_LOCALE', 'en');

  return response;
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}