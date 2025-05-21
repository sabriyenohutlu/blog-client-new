'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ThumbsUp, MessageSquare, Bookmark } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const blogPosts = [
  {
    title: "Modern Türk Edebiyatında Postmodern Anlatım Teknikleri",
    excerpt: "Son yıllarda Türk edebiyatında görülen postmodern anlatım tekniklerinin detaylı bir incelemesi ve örnek eserler üzerinden analizi...",
    author: "Dr. Ahmet Yılmaz",
    date: "15 Mart 2024",
    category: "Edebi Analiz",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    readTime: "8 dk",
    likes: 342,
    comments: 28
  },
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
    excerpt: "Cumhuriyet dönemi Türk romanında kadın karakterlerin değişimi ve toplumsal cinsiyet rollerinin edebi eserlere yansıması...",
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
    excerpt: "Modern Türk öykücülüğünde minimalist anlatım teknikleri ve öykü sanatının değişen dinamikleri...",
    author: "Dr. Ayşe Yıldız",
    date: "8 Mart 2024",
    category: "Öykü",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    readTime: "7 dk",
    likes: 189,
    comments: 15
  },
  {
    title: "Tanzimat Edebiyatının Modern Türk Edebiyatına Etkileri",
    excerpt: "Tanzimat dönemi edebi eserlerinin günümüz Türk edebiyatına yansımaları ve edebi geleneğin dönüşümü...",
    author: "Doç. Dr. Ali Kaya",
    date: "5 Mart 2024",
    category: "Edebi Tarih",
    image: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-4.0.3",
    readTime: "12 dk",
    likes: 245,
    comments: 32
  },
  {
    title: "Dijital Çağda Edebiyat: E-kitaplar ve Okuma Kültürü",
    excerpt: "Teknolojinin gelişimiyle değişen okuma alışkanlıkları ve dijital platformların edebiyata etkisi...",
    author: "Merve Demir",
    date: "3 Mart 2024",
    category: "Dijital Kültür",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3",
    readTime: "9 dk",
    likes: 178,
    comments: 21
  }
];

const categories = [
  { value: "all", label: "Tüm Kategoriler" },
  { value: "edebi-analiz", label: "Edebi Analiz" },
  { value: "siir-analizi", label: "Şiir Analizi" },
  { value: "edebi-inceleme", label: "Edebi İnceleme" },
  { value: "oyku", label: "Öykü" },
  { value: "edebi-tarih", label: "Edebi Tarih" },
  { value: "dijital-kultur", label: "Dijital Kültür" }
];

const BlogArsiv = ({blogList}) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
    return (
          <div className="container py-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Blog Arşivi</h1>
                <p className="text-muted-foreground">
                  Tüm blog yazılarımızı keşfedin
                </p>
              </div>
              <div className="w-full md:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Kategori seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
    
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogList.map((blog, index) => (
                <Link href={`/blog/${blog.url.urledTitle}-${blog.blog_id}`} key={index}>
                    <Card  className="group hover-lift">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        src={"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3"}
                        alt={blog.blog_title}
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
                          {blog.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.blog_title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {blog.blog_summaryInfo}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {blog.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {blog.comments}
                          </div>
                        </div>
                        {/* <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div> */}
                      </div>
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {blog.author_name}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {blog.createdAt.toLocaleString("tr-TR",options)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </Link>
            
              ))}
            </div>
          </div>
      );
}

export default BlogArsiv