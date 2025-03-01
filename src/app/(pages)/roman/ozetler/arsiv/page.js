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

const summaries = [
  {
    title: "Kürk Mantolu Madonna",
    author: "Sabahattin Ali",
    year: "1943",
    category: "Modern Roman",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    summary: "Raif Efendi'nin Berlin'de yaşadığı imkansız aşkı ve bunun hayatına etkilerini anlatan roman, dönemin toplumsal yapısını ve kültürel çatışmalarını da yansıtır...",
    readTime: "10 dk",
    likes: 2456,
    comments: 184,
    summarizedBy: "Prof. Dr. Ahmet Yılmaz",
    date: "15 Mart 2024",
    themes: ["Aşk", "Yabancılaşma", "Kültürel Çatışma"],
    mainCharacters: ["Raif Efendi", "Maria Puder"]
  },
  {
    title: "Tutunamayanlar",
    author: "Oğuz Atay",
    year: "1972",
    category: "Postmodern Roman",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    summary: "Selim Işık'ın intiharı üzerine arkadaşı Turgut Özben'in onun hayatını araştırmasıyla başlayan roman, Türk aydınının kimlik bunalımını ve modernleşme sürecini sorgular...",
    readTime: "15 dk",
    likes: 1987,
    comments: 156,
    summarizedBy: "Doç. Dr. Zeynep Kaya",
    date: "12 Mart 2024",
    themes: ["Kimlik", "Yabancılaşma", "Modernleşme"],
    mainCharacters: ["Turgut Özben", "Selim Işık"]
  },
  {
    title: "İnce Memed",
    author: "Yaşar Kemal",
    year: "1955",
    category: "Toplumsal Roman",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    summary: "Çukurova'da adaletsizliğe karşı mücadele eden İnce Memed'in hikayesi üzerinden feodal düzenin eleştirisini yapan roman, halk kahramanı mitini yeniden yorumlar...",
    readTime: "12 dk",
    likes: 1856,
    comments: 142,
    summarizedBy: "Dr. Mehmet Demir",
    date: "10 Mart 2024",
    themes: ["Adalet", "Toplumsal Mücadele", "Eşkıyalık"],
    mainCharacters: ["İnce Memed", "Hatçe", "Abdi Ağa"]
  },
  {
    title: "Huzur",
    author: "Ahmet Hamdi Tanpınar",
    year: "1949",
    category: "Psikolojik Roman",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    summary: "Mümtaz ve Nuran'ın aşk hikayesi etrafında şekillenen roman, Doğu-Batı sentezini ve modernleşme sürecini İstanbul'un tarihi dokusu içinde işler...",
    readTime: "14 dk",
    likes: 1654,
    comments: 128,
    summarizedBy: "Prof. Dr. Ayşe Yıldız",
    date: "8 Mart 2024",
    themes: ["Aşk", "Medeniyet", "Gelenek"],
    mainCharacters: ["Mümtaz", "Nuran", "İhsan"]
  },
  {
    title: "Yaban",
    author: "Yakup Kadri Karaosmanoğlu",
    year: "1932",
    category: "Milli Edebiyat",
    image: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-4.0.3",
    summary: "Kurtuluş Savaşı sırasında bir Anadolu köyüne yerleşen aydın bir subayın gözünden köy gerçeğini ve aydın-halk kopukluğunu anlatan roman...",
    readTime: "11 dk",
    likes: 1432,
    comments: 98,
    summarizedBy: "Doç. Dr. Ali Kaya",
    date: "5 Mart 2024",
    themes: ["Aydın-Halk Çatışması", "Yabancılaşma", "Milli Mücadele"],
    mainCharacters: ["Ahmet Celal", "Emine"]
  }
];

const categories = [
  { value: "all", label: "Tüm Kategoriler" },
  { value: "modern", label: "Modern Roman" },
  { value: "postmodern", label: "Postmodern Roman" },
  { value: "toplumsal", label: "Toplumsal Roman" },
  { value: "psikolojik", label: "Psikolojik Roman" },
  { value: "milli", label: "Milli Edebiyat" }
];

export default function RomanOzetlerArsiv() {
  return (
    <>
      <NextSeo
        title="Roman Özetleri Arşivi - Edebi Akış"
        description="Popüler romanların kapsamlı özetleri"
        openGraph={{
          title: 'Roman Özetleri Arşivi - Edebi Akış',
          description: 'Popüler romanların kapsamlı özetleri',
        }}
      />
      <div className="container-custom py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Roman Özetleri</h1>
            <p className="text-muted-foreground">
              Türk ve dünya edebiyatından seçme roman özetleri
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

        {/* Summaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {summaries.map((book, index) => (
            <Card key={index} className="group hover-lift">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <img
                    src={book.image}
                    alt={book.title}
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
                      {book.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-2">
                      {book.author}, {book.year}
                    </p>
                    <p className="text-muted-foreground line-clamp-2">
                      {book.summary}
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium mb-2">Ana Karakterler:</p>
                    <div className="flex flex-wrap gap-2">
                      {book.mainCharacters.map((character, idx) => (
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
                    {book.themes.map((theme, idx) => (
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
                        {book.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {book.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {book.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                    <div>
                      <span className="block text-xs">Özetleyen</span>
                      <span className="font-medium text-foreground">
                        {book.summarizedBy}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {book.date}
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