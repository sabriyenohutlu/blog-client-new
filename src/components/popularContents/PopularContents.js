"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Bookmark, Clock, MessageSquare, ThumbsUp, User } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
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
  
  const categories = [
    { name: "Tümü", value: "all" },
    { name: "Roman İncelemeleri", value: "roman" },
    { name: "Şiir Tahlilleri", value: "siir" },
    { name: "Öykü Analizleri", value: "oyku" },
    { name: "Edebi Makaleler", value: "makale" },
  ];
  
  const sortOptions = [
    { name: "En Çok Okunan", value: "most-read" },
    { name: "En Çok Beğenilen", value: "most-liked" },
    { name: "En Çok Yorumlanan", value: "most-commented" },
    { name: "En Yeni", value: "newest" },
  ];
  
  const popularPosts = [
    ...recommendedPosts,
    {
      title: "Ahmet Hamdi Tanpınar'ın Zaman Algısı",
      excerpt: "Huzur ve Saatleri Ayarlama Enstitüsü'nde zaman kavramının incelenmesi...",
      author: "Prof. Dr. Ali Yıldırım",
      date: "5 Mart 2024",
      category: "Roman İncelemeleri",
      image: "https://images.unsplash.com/photo-1557592722-a0a649c8c5f7?ixlib=rb-4.0.3",
      readTime: "12 dk",
      likes: 312,
      comments: 45,
      views: 1250
    },
    {
      title: "İkinci Yeni Şiirinde İmge Kullanımı",
      excerpt: "İkinci Yeni akımının öncü şairlerinin eserlerinde imge kullanımı...",
      author: "Doç. Dr. Zeynep Aydın",
      date: "3 Mart 2024",
      category: "Şiir Tahlilleri",
      image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-4.0.3",
      readTime: "9 dk",
      likes: 289,
      comments: 32,
      views: 980
    },
    {
      title: "Sait Faik Öykülerinde İstanbul",
      excerpt: "Sait Faik'in öykülerinde İstanbul'un mekansal ve toplumsal yansımaları...",
      author: "Dr. Mehmet Kartal",
      date: "1 Mart 2024",
      category: "Öykü Analizleri",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3",
      readTime: "8 dk",
      likes: 245,
      comments: 28,
      views: 867
    }
  ];
const PopularContents = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedSort, setSelectedSort] = useState("most-read");
    const [searchQuery, setSearchQuery] = useState("");
  
    return (
      <>
        <div className="container-custom py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Popüler İçerikler</h1>
            <p className="text-muted-foreground text-lg">
              En çok okunan, beğenilen ve yorumlanan edebi içeriklerimiz
            </p>
          </div>
  
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="İçeriklerde ara..."
                className="w-full px-4 py-2 rounded-lg border bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 rounded-lg border bg-background"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                className="px-4 py-2 rounded-lg border bg-background"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPosts.map((post, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute top-4 right-4 flex gap-2">
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
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div>
                        {post.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
  
          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <Button variant="outline" disabled>
              Önceki
            </Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">
              Sonraki
            </Button>
          </div>
        </div>
      </>
    );
}

export default PopularContents