'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from '@/seo.config';

export function Providers({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <DefaultSeo {...SEO} />
      {children}
    </NextThemesProvider>
  );
} 