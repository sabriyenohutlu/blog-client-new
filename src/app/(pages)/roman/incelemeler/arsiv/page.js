'use client';
import { NextSeo } from 'next-seo';
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

const reviews = [
  {
    title: "Tutunamayanlar: Modern Türk Edebiyatının Başyapıtı",
    excerpt: "Oğuz Atay'ın başyapıtı Tutunamayanlar, Türk edebiyatının en önemli postmodern romanlarından biri olarak kabul edilir. Roman, geleneksel anlatı tekniklerini kırarak yeni bir dil yaratır...",
    author: "Prof. Dr. Ahmet Yılmaz",
    date: "15 Mart 2024",
    category: "Postmodern Roman",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    readTime: "20 dk",
    likes: 856,
    comments: 124,
    book: {
      title: "Tutunamayanlar",
      author: "Oğuz Atay",
      year: "1972"
    }
  },
  {
    title: "Kürk Mantolu Madonna'da Aşk ve Toplum",
    excerpt: "Sabahattin Ali'nin unutulmaz romanı, imkansız bir aşk hikayesinin ötesinde dönemin toplumsal yapısını ve kültürel çatışmalarını ustaca yansıtır...",
    author: "Doç. Dr. Zeynep Kaya",
    date: "12 Mart 2024",
    category: "Modern Roman",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    readTime: "15 dk",
    likes: 734,
    comments: 98,
    book: {
      title: "Kürk Mantolu Madonna",
      author: "Sabahattin Ali",
      year: "1943"
    }
  },
  {
    title: "Mai ve Siyah'ta Hayal-Hakikat Çatışması",
    excerpt: "Halit Ziya Uşaklıgil'in başyapıtı, Servet-i Fünun döneminin edebi anlayışını ve dönemin sosyal yapısını derinlemesine yansıtır...",
    author: "Dr. Mehmet Demir",
    date: "10 Mart 2024",
    category: "Servet-i Fünun",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    readTime: "18 dk",
    likes: 645,
    comments: 86,
    book: {
      title: "Mai ve Siyah",
      author: "Halit Ziya Uşaklıgil",
      year: "1897"
    }
  },
  {
    title: "Yaban'da Aydın-Halk Çatışması",
    excerpt: "Yakup Kadri Karaosmanoğlu'nun Yaban romanı, Türk aydınının halkla olan kopukluğunu ve bunun yarattığı sorunları çarpıcı bir dille anlatır...",
    author: "Prof. Dr. Ayşe Yıldız",
    date: "8 Mart 2024",
    category: "Milli Edebiyat",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    readTime: "16 dk",
    likes: 567,
    comments: 74,
    book: {
      title: "Yaban",
      author: "Yakup Kadri Karaosmanoğlu",
      year: "1932"
    }
  },
  {
    title: "Huzur'da İstanbul ve Medeniyet",
    excerpt: "Ahmet Hamdi Tanpınar'ın başyapıtı, Doğu-Batı sentezini ve modernleşme sürecini İstanbul'un tarihi dokusu içinde ustaca işler...",
    author: "Doç. Dr. Ali Kaya",
    date: "5 Mart 2024",
    category: "Modern Roman",
    image: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-4.0.3",
    readTime: "22 dk",
    likes: 789,
    comments: 112,
    book: {
      title: "Huzur",
      author: "Ahmet Hamdi Tanpınar",
      year: "1949"
    }
  }
];

const categories = [
  { value: "all", label: "Tüm Kategoriler" },
  { value: "modern", label: "Modern Roman" },
  { value: "postmodern", label: "Postmodern Roman" },
  { value: "milli", label: "Milli Edebiyat" },
  { value: "servet-i-funun", label: "Servet-i Fünun" }
];

export default function RomanIncelemelerArsiv() {
  return (
    <>
      <NextSeo
        title="Roman İncelemeleri Arşivi - Edebi Akış"
        description="Detaylı roman analizleri ve eleştirel değerlendirmeler arşivi"
        openGraph={{
          title: 'Roman İncelemeleri Arşivi - Edebi Akış',
          description: 'Detaylı roman analizleri ve eleştirel değerlendirmeler arşivi',
        }}
      />
      <div className="container-custom py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Roman İncelemeleri</h1>
            <p className="text-muted-foreground">
              Türk ve dünya edebiyatından seçme roman incelemeleri
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="group hover-lift">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="icon" className="text-white">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2 py-1 bg-primary/20 rounded-full text-sm">
                      {review.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {review.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">
                      {review.excerpt}
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <div className="text-sm">
                      <span className="font-medium">{review.book.title}</span>
                      <span className="text-muted-foreground"> - {review.book.author}, {review.book.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {review.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {review.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {review.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {review.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {review.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
} 