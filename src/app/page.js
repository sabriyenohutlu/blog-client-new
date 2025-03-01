'use client';

import { NextSeo } from 'next-seo';
import '@/styles/main.scss';
import HomeSlider from '@/components/HomeSlider';
import QuoteSlider from '@/components/QuoteSlider';
import FeaturedPoems from '@/components/FeaturedPoems';
import FeaturedBooks from '@/components/FeaturedBooks';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Ana Sayfa"
        description="Blog Client ana sayfa açıklaması"
        openGraph={{
          title: 'Ana Sayfa',
          description: 'Blog Client ana sayfa açıklaması',
        }}
      />
      <section className="container mx-auto px-4 py-12">
        <HomeSlider />
        <div className="max-w-4xl mx-auto text-center mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Modern Blog Deneyimi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Minimalist tasarım, kolay kullanım ve zengin içerik bir arada
          </p>
          <Button size="lg">
            Keşfet
          </Button>
        </div>
      </section>
      
      <section className="bg-muted py-16">
        <QuoteSlider />
      </section>

      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Şiir Köşesi</h2>
          <p className="text-muted-foreground">Günün şiiri ve popüler şiirler</p>
        </div>
        <FeaturedPoems />
      </section>

      <section className="bg-muted/50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Roman Kategorileri</h2>
          <p className="text-muted-foreground">Keşfetmeniz için hazırladığımız roman bölümleri</p>
        </div>
        <FeaturedBooks />
      </section>
    </>
  );
} 