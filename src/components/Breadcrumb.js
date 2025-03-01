'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ue/g, 'ü')
    .replace(/ae/g, 'ä')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function Breadcrumb() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const breadcrumbs = pathname
    .split('/')
    .filter((path) => path)
    .map((path, index, array) => {
      const href = `/${array.slice(0, index + 1).join('/')}`;
      return {
        href,
        label: convertBreadcrumb(path),
        isLast: index === array.length - 1,
      };
    });

  return (
    <nav aria-label="Breadcrumb" className="container-custom py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Ana Sayfa</span>
          </Link>
        </li>
        {breadcrumbs.map(({ href, label, isLast }) => (
          <li key={href} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {isLast ? (
              <span className="ml-2 text-foreground font-medium" aria-current="page">
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 