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

const stories = [
    {
      title: "Kaşağı",
      author: "Ömer Seyfettin",
      year: "1919",
      category: "Milli Edebiyat",
      image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
      excerpt: "Bir çocuğun vicdan azabını ve kardeşlik duygularını anlatan, Ömer Seyfettin'in en bilinen hikayelerinden biri...",
      readTime: "15 dk",
      likes: 2456,
      comments: 184,
      date: "15 Mart 2024",
      themes: ["Vicdan", "Kardeşlik", "Çocukluk"],
      mainCharacters: ["Hasan", "Dadaruh"]
    },
    {
      title: "Son Kuşlar",
      author: "Sait Faik Abasıyanık",
      year: "1952",
      category: "Modern Hikaye",
      image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
      excerpt: "İstanbul'un değişen yüzünü ve kaybolan değerlerini kuşlar üzerinden anlatan nostaljik bir hikaye...",
      readTime: "12 dk",
      likes: 1856,
      comments: 142,
      date: "12 Mart 2024",
      themes: ["Doğa", "Şehirleşme", "Nostalji"],
      mainCharacters: ["Anlatıcı"]
    },
    {
      title: "Yüksek Ökçeler",
      author: "Haldun Taner",
      year: "1959",
      category: "Toplumsal Hikaye",
      image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
      excerpt: "Toplumsal değerlerin değişimini ve yozlaşmayı ironik bir dille anlatan eleştirel bir hikaye...",
      readTime: "18 dk",
      likes: 1654,
      comments: 128,
      date: "10 Mart 2024",
      themes: ["Toplumsal Eleştiri", "İroni", "Değişim"],
      mainCharacters: ["Şefik Bey", "Şefika Hanım"]
    },
    {
      title: "Gramofon Avrat",
      author: "Memduh Şevket Esendal",
      year: "1928",
      category: "Köy Hikayesi",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
      excerpt: "Anadolu'da modernleşmenin yarattığı çatışmaları ve değişimi anlatan gerçekçi bir hikaye...",
      readTime: "20 dk",
      likes: 1432,
      comments: 98,
      date: "8 Mart 2024",
      themes: ["Modernleşme", "Kültürel Çatışma", "Köy Yaşamı"],
      mainCharacters: ["Murat Efendi", "Emine"]
    },
    {
      title: "Bir Şehir Hikayesi",
      author: "Tomris Uyar",
      year: "1971",
      category: "Modern Hikaye",
      image: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-4.0.3",
      excerpt: "Modern kent yaşamının birey üzerindeki etkilerini ve yalnızlaşmayı anlatan çarpıcı bir hikaye...",
      readTime: "16 dk",
      likes: 1876,
      comments: 156,
      date: "5 Mart 2024",
      themes: ["Kent Yaşamı", "Yalnızlık", "Modernizm"],
      mainCharacters: ["Ayşe", "Mehmet"]
    }
  ];
  
  const categories = [
    { value: "all", label: "Tüm Kategoriler" },
    { value: "milli", label: "Milli Edebiyat" },
    { value: "modern", label: "Modern Hikaye" },
    { value: "toplumsal", label: "Toplumsal Hikaye" },
    { value: "koy", label: "Köy Hikayesi" }
  ];

const StoryArchive = () => {
  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Hikaye Arşivi</h1>
          <p className="text-muted-foreground">
            Türk edebiyatının en etkileyici hikayeleri
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

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story, index) => (
          <Card key={index} className="group hover-lift">
            <CardContent className="p-0">
              <div className="relative h-48">
                <img
                  src={story.image}
                  alt={story.title}
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
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {story.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    {story.author}, {story.year}
                  </p>
                  <p className="text-muted-foreground line-clamp-2">
                    {story.excerpt}
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium mb-2">Ana Karakterler:</p>
                  <div className="flex flex-wrap gap-2">
                    {story.mainCharacters.map((character, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-background rounded-full text-xs"
                      >
                        {character}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {story.themes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted rounded-full text-xs"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {story.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {story.comments}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {story.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {story.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {story.date}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default StoryArchive