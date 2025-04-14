'use client';

import { NextSeo } from 'next-seo';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Quote, Bookmark, TrendingUp } from "lucide-react";
import Link from "next/link";
import HomeSlider from '@/components/HomeSlider';
import FeaturedPoems from '@/components/FeaturedPoems';
import FeaturedBooks from '@/components/FeaturedBooks';
const Home = () => {
    return (
        <>
          {/* <NextSeo
            title="Edebi Akış - Modern Edebiyat Platformu"
            description="Türk ve dünya edebiyatının en seçkin örneklerini keşfedin. Roman incelemeleri, şiirler, hikayeler ve daha fazlası."
          /> */}
          
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
            <div className="container-custom py-16 md:py-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-text">
                    Edebiyatın Dijital Yüzü
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Roman incelemelerinden şiir tahlillerine, hikaye özetlerinden biyografilere 
                    kadar geniş bir yelpazede edebi içerikler sunan modern bir platform.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="group">
                      Keşfet
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline">
                      Hakkımızda
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <HomeSlider />
                </div>
              </div>
            </div>
          </section>
    
          {/* Featured Categories */}
          <section className="py-16 bg-muted/50">
            <div className="container-custom">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Roman İncelemeleri",
                    description: "Klasik ve modern romanların detaylı analizleri",
                    icon: BookOpen,
                    link: "/roman/incelemeler"
                  },
                  {
                    title: "Günün Şiiri",
                    description: "Her gün yeni bir şiir ve tahlili",
                    icon: Quote,
                    link: "/siir"
                  },
                  {
                    title: "Okuma Listeleri",
                    description: "Sizin için hazırladığımız özel seçkiler",
                    icon: Bookmark,
                    link: "/roman/oneriler"
                  },
                  {
                    title: "Popüler İçerikler",
                    description: "En çok okunan ve beğenilen yazılar",
                    icon: TrendingUp,
                    link: "/blog"
                  }
                ].map((category, index) => (
                  <Link 
                    key={index} 
                    href={category.link}
                    className="group"
                  >
                    <div className="p-6 bg-background rounded-lg border hover-lift hover-glow">
                      <category.icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
    
          {/* Quote Section */}
          <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Günün Alıntısı</h2>
                <p className="text-muted-foreground">
                  Edebiyatın en etkileyici sözleri
                </p>
              </div>
              {/* <QuoteSlider /> */}
            </div>
          </section>
    
          {/* Featured Poems */}
          <section className="py-16">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Şiir Köşesi</h2>
                <p className="text-muted-foreground">
                  Türk ve dünya şiirinden seçmeler
                </p>
              </div>
              <FeaturedPoems />
            </div>
          </section>
    
          {/* Featured Books */}
          <section className="py-16 bg-muted/50">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Roman Kategorileri</h2>
                <p className="text-muted-foreground">
                  Keşfetmeniz için hazırladığımız özel bölümler
                </p>
              </div>
              <FeaturedBooks />
            </div>
          </section>
    
          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Edebi yolculuğunuza başlayın
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ücretsiz üye olun ve tüm içeriklerimize sınırsız erişim kazanın. 
                Yorumlar yapın, koleksiyonlar oluşturun ve edebi tartışmalara katılın.
              </p>
              <Button asChild size="lg">
                <Link href="/register" className="group">
                  Hemen Başla
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </section>
        </>
      );
}

export default Home