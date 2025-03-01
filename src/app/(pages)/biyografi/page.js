'use client';

import { NextSeo } from 'next-seo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Book, ArrowRight, Clock, User, BookOpen } from "lucide-react";
import Link from "next/link";

const featuredBiographies = [
  {
    title: "Sabahattin Ali: Edebiyatın Asi Ruhu",
    subject: "Sabahattin Ali",
    coverImage: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    period: "1907-1948",
    location: "Gümülcine, Osmanlı İmparatorluğu",
    readTime: "15 dk",
    author: "Prof. Dr. Ayşe Yılmaz",
    excerpt: "Türk edebiyatının en önemli yazarlarından Sabahattin Ali'nin hayatı, eserleri ve trajik sonu...",
    famousWorks: ["Kürk Mantolu Madonna", "Kuyucaklı Yusuf", "İçimizdeki Şeytan"],
    categories: ["Yazar", "Şair", "Öğretmen"]
  },
  {
    title: "Nazım Hikmet: Vatansız Şair",
    subject: "Nazım Hikmet",
    coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    period: "1902-1963",
    location: "Selanik, Osmanlı İmparatorluğu",
    readTime: "18 dk",
    author: "Dr. Mehmet Demir",
    excerpt: "Modern Türk şiirinin öncüsü Nazım Hikmet'in sürgünlerle dolu hayatı ve edebi mirası...",
    famousWorks: ["Memleketimden İnsan Manzaraları", "835 Satır", "Piraye'ye Mektuplar"],
    categories: ["Şair", "Senarist", "Aktivist"]
  },
  {
    title: "Ahmet Hamdi Tanpınar: Zamanın Efendisi",
    subject: "Ahmet Hamdi Tanpınar",
    coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    period: "1901-1962",
    location: "İstanbul, Osmanlı İmparatorluğu",
    readTime: "12 dk",
    author: "Doç. Dr. Zeynep Kaya",
    excerpt: "Türk edebiyatının en önemli modernist yazarlarından Tanpınar'ın hayatı ve edebi yolculuğu...",
    famousWorks: ["Huzur", "Saatleri Ayarlama Enstitüsü", "Beş Şehir"],
    categories: ["Yazar", "Şair", "Akademisyen"]
  }
];

const recentBiographies = [
  {
    title: "Orhan Veli Kanık: Garip Akımının Öncüsü",
    subject: "Orhan Veli",
    date: "15 Mart 2024",
    author: "Dr. Can Yücel",
    views: 1245,
    excerpt: "Modern Türk şiirinin devrimci ismi Orhan Veli'nin kısa ama etkili edebi hayatı..."
  },
  {
    title: "Oğuz Atay: Tutunamayanların Yazarı",
    subject: "Oğuz Atay",
    date: "12 Mart 2024",
    author: "Prof. Dr. Selim Işık",
    views: 982,
    excerpt: "Türk edebiyatının postmodern öncüsü Oğuz Atay'ın sıra dışı yaşamı..."
  },
  {
    title: "Tomris Uyar: Modern Öykünün Ustası",
    subject: "Tomris Uyar",
    date: "10 Mart 2024",
    author: "Dr. Elif Şafak",
    views: 876,
    excerpt: "Çağdaş Türk öykücülüğünün güçlü kalemi Tomris Uyar'ın yaşamı ve eserleri..."
  }
];

const categories = [
  {
    title: "Yazarlar",
    count: 145,
    icon: Book,
    color: "text-blue-500"
  },
  {
    title: "Şairler",
    count: 98,
    icon: BookOpen,
    color: "text-green-500"
  },
  {
    title: "Akademisyenler",
    count: 67,
    icon: User,
    color: "text-purple-500"
  }
];

export default function Biyografi() {
  return (
    <>
      <NextSeo
        title="Biyografi - Edebi Akış"
        description="Türk edebiyatının önemli isimlerinin yaşam öyküleri"
        openGraph={{
          title: 'Biyografi - Edebi Akış',
          description: 'Türk edebiyatının önemli isimlerinin yaşam öyküleri',
        }}
      />
      <div className="container-custom py-8">
        {/* Categories */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="group hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-muted ${category.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{category.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {category.count} Biyografi
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Featured Biographies */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">Öne Çıkan Biyografiler</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBiographies.map((bio, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={bio.coverImage}
                      alt={bio.subject}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {bio.categories.map((cat, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary/20 rounded-full text-xs">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold mb-1">{bio.title}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {bio.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {bio.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {bio.excerpt}
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm font-medium">Önemli Eserleri:</p>
                      <div className="flex flex-wrap gap-2">
                        {bio.famousWorks.map((work, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted rounded-full text-xs"
                          >
                            {work}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Biographies */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Son Eklenen Biyografiler</h2>
            <Button variant="outline" asChild>
              <Link href="/biyografi/arsiv">
                Tümünü Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBiographies.map((bio, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {bio.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {bio.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {bio.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">
                        {bio.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{bio.views}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
} 