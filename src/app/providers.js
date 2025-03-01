'use client';

import { DefaultSeo } from 'next-seo';
import SEO from '@/seo.config';

export function Providers({ children }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      {children}
    </>
  );
} 