'use client';

import { NextSeo } from 'next-seo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, ThumbsUp, MessageSquare, Bookmark } from "lucide-react";
import Link from "next/link";

const featuredPost = {
  title: "Modern Türk Edebiyatında Postmodern Anlatım Teknikleri",
  excerpt: "Son yıllarda Türk edebiyatında görülen postmodern anlatım tekniklerinin detaylı bir incelemesi ve örnek eserler üzerinden analizi...",
  coverImage: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
  author: "Dr. Ahmet Yılmaz",
  date: "15 Mart 2024",
  readTime: "8 dk",
  category: "Edebi Analiz",
  content: `
    Modern Türk edebiyatı, özellikle 1980'lerden sonra postmodern anlatım teknikleriyle tanışmış ve bu teknikleri başarıyla uygulamaya başlamıştır. Bu değişim, geleneksel anlatım tekniklerinden kopuşu ve yeni bir edebi dilin oluşumunu beraberinde getirmiştir.

    Postmodern Tekniklerin Özellikleri
    --------------------------------
    1. Üstkurmaca
    - Metnin yazılış sürecinin anlatıya dahil edilmesi
    - Yazarın metne müdahalesi
    - Okuyucuyla doğrudan iletişim

    2. Metinlerarasılık
    - Diğer metinlere göndermeler
    - Pastiş ve parodi kullanımı
    - Kolaj tekniği

    3. Çoğul Anlatım
    - Farklı bakış açılarının bir arada kullanılması
    - Zaman ve mekan kavramlarının iç içe geçmesi
    - Gerçeklik algısının sorgulanması

    Örnek Eserler ve Analiz
    ----------------------
    "Tutunamayanlar" - Oğuz Atay
    - Türk edebiyatının ilk postmodern romanı
    - Üstkurmaca tekniğinin yoğun kullanımı
    - Bilinç akışı ve iç monolog teknikleri

    "Kara Kitap" - Orhan Pamuk
    - Metinlerarasılık örnekleri
    - Tasavvufi metinlerle modern anlatının harmanlanması
    - Çoğul anlatım teknikleri

    Sonuç
    -----
    Modern Türk edebiyatında postmodern tekniklerin kullanımı, anlatım olanaklarını genişletmiş ve yeni bir edebi dil yaratmıştır. Bu değişim, Türk edebiyatının dünya edebiyatıyla entegrasyonunu sağlamış ve özgün eserlerin ortaya çıkmasına zemin hazırlamıştır.
  `
};

const recommendedPosts = [
  {
    title: "Şiir ve Müzik: Modern Türk Şiirinde Ritim",
    excerpt: "Modern Türk şiirinde ritim ve müzikalite unsurlarının incelenmesi...",
    author: "Zeynep Kaya",
    date: "12 Mart 2024",
    category: "Şiir Analizi",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    readTime: "6 dk",
    likes: 234,
    comments: 18
  },
  {
    title: "Cumhuriyet Dönemi Romanında Kadın",
    excerpt: "Cumhuriyet dönemi Türk romanında kadın karakterlerin değişimi...",
    author: "Prof. Dr. Mehmet Demir",
    date: "10 Mart 2024",
    category: "Edebi İnceleme",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    readTime: "10 dk",
    likes: 156,
    comments: 23
  },
  {
    title: "Türk Öykücülüğünde Minimalizm",
    excerpt: "Modern Türk öykücülüğünde minimalist anlatım teknikleri...",
    author: "Dr. Ayşe Yıldız",
    date: "8 Mart 2024",
    category: "Öykü",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    readTime: "7 dk",
    likes: 189,
    comments: 15
  }
];

export default function Blog() {
  return (
    <>
      <NextSeo
        title="Blog - Edebi Akış"
        description="Edebi Akış blog yazıları"
        openGraph={{
          title: 'Blog - Edebi Akış',
          description: 'Edebi Akış blog yazıları',
        }}
      />
      <div className="container-custom py-8">
        {/* Featured Post */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="relative h-[400px] w-full">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{featuredPost.title}</h1>
                <p className="text-lg text-gray-200 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
              {featuredPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.includes('-------')) {
                  const [title] = paragraph.split('\n');
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{title}</h2>;
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Önerilen Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedPosts.map((post, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute top-4 right-4">
                      <Button variant="ghost" size="icon" className="text-white">
                        <Bookmark className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-muted rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/blog/arsiv">
                Tüm Yazıları Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
} 