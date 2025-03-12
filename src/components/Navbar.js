'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            Edebi Akış
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {pathname !== '/' && (
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Ana Sayfa
            </Link>
          )}
          <Link 
            href="/blog" 
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/siir" 
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Şiir
          </Link>
          <Link 
            href="/hikaye" 
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Hikaye
          </Link>
          <Link 
            href="/roman" 
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Roman
          </Link>
          <Link 
            href="/biyografi" 
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Biyografi
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Hakkında
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4"
          >
            {theme === 'dark' ? (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Giriş Yap
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="mr-2"
          >
            {theme === 'dark' ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <Menu className="h-6 w-6" />
            ) : (
              <X className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed inset-0 z-50 transform md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="relative min-h-screen bg-background px-4 pt-24 pb-6">
          <div className="flex flex-col space-y-4">
            {pathname !== '/' && (
              <Link
                href="/"
                className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </Link>
            )}
            <Link
              href="/blog"
              className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/siir"
              className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Şiir
            </Link>
            <Link
              href="/hikaye"
              className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hikaye
            </Link>
            <Link
              href="/roman"
              className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Roman
            </Link>
            <Link
              href="/biyografi"
              className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Biyografi
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hakkında
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 