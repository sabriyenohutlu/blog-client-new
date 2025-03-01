'use client';

import { NextSeo } from 'next-seo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredSummary = {
  title: "Kürk Mantolu Madonna",
  coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
  author: "Sabahattin Ali",
  year: "1943",
  readTime: "10 dk",
  genre: "Psikolojik Roman",
  themes: ["Aşk", "Toplumsal Normlar", "Yabancılaşma"],
  content: `
    Romanın Özeti
    ------------
    "Kürk Mantolu Madonna", Sabahattin Ali'nin kaleme aldığı, 1943 yılında yayımlanan ve Türk edebiyatının en önemli aşk romanlarından biri olarak kabul edilen bir eserdir. Roman, Raif Efendi'nin gizli kalmış aşk hikâyesini anlatır.

    Ana Karakterler
    -------------
    - Raif Efendi: Romanın başkahramanı, içine kapanık ve sanata düşkün bir çevirmen
    - Maria Puder (Kürk Mantolu Madonna): Alman ressam, özgür ruhlu ve modern bir kadın
    - Anlatıcı: Raif Efendi'nin çalıştığı şirketteki genç memur

    Olay Örgüsü
    ----------
    Roman iki ana bölümden oluşur. İlk bölümde anlatıcı, Raif Efendi'yi tanır ve onun günlüğünü bulur. İkinci bölüm, Raif Efendi'nin günlüğünden okuduğumuz Berlin yılları ve Maria Puder ile olan aşk hikâyesidir.

    1920'lerin Berlin'inde genç Raif Efendi, bir gün bir sanat galerisinde Maria Puder'in otoportresi ile karşılaşır. Bu resimden çok etkilenir ve ressama "Kürk Mantolu Madonna" adını verir. Daha sonra Maria ile tanışır ve aralarında derin bir aşk başlar.

    Önemli Temalar
    ------------
    1. Platonik Aşk ve Gerçeklik
    - Raif'in Maria'nın portresine duyduğu hayranlıktan gerçek aşka geçiş
    - İdeal ile gerçek arasındaki çatışma

    2. Toplumsal Cinsiyet Rolleri
    - Maria'nın dönemine göre modern ve bağımsız karakteri
    - Geleneksel toplum yapısı ile modern düşünce arasındaki çatışma

    3. Yalnızlık ve Yabancılaşma
    - Raif'in hem Almanya'da hem de Türkiye'de yaşadığı yabancılaşma
    - İç dünyasında yaşayan bireyin toplumdan kopuşu

    Yazarın Üslubu
    ------------
    Sabahattin Ali, sade ve akıcı bir dil kullanır. Karakterlerin iç dünyalarını derinlemesine analiz eder. Toplumsal eleştiriyi bireysel bir aşk hikâyesi üzerinden ustaca aktarır.

    Sonuç ve Etki
    -----------
    Roman, platonik aşktan gerçek aşka geçişi, kültürel farklılıkları ve toplumsal normları sorgulamasıyla dikkat çeker. Günümüzde hala güncelliğini koruyan temalarıyla modern Türk edebiyatının başyapıtları arasında yer alır.
  `
};

const otherSummaries = [
  {
    title: "Uçurtma Avcısı",
    author: "Khaled Hosseini",
    genre: "Çağdaş Roman",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    description: "Dostluk, ihanet ve kefaret temaları etrafında şekillenen, Afganistan'ın yakın tarihine ışık tutan etkileyici bir roman...",
    readTime: "8 dk"
  },
  {
    title: "Şeker Portakalı",
    author: "José Mauro de Vasconcelos",
    genre: "Otobiyografik Roman",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    description: "Yoksul bir ailenin küçük çocuğu Zezé'nin hayatı ve hayal gücünün sınırlarını zorlayan hikayesi...",
    readTime: "7 dk"
  },
  {
    title: "Simyacı",
    author: "Paulo Coelho",
    genre: "Felsefi Roman",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    description: "Kişisel Menkıbe'sinin peşinden giden çoban Santiago'nun kendini keşif yolculuğu...",
    readTime: "6 dk"
  }
];

export default function RomanOzetleri() {
  return (
    <>
      <NextSeo
        title="Roman Özetleri - Edebi Akış"
        description="Popüler romanların kapsamlı özetleri"
        openGraph={{
          title: 'Roman Özetleri - Edebi Akış',
          description: 'Popüler romanların kapsamlı özetleri',
        }}
      />
      <div className="container-custom py-8">
        {/* Featured Summary */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="relative h-[400px] w-full">
              <img
                src={featuredSummary.coverImage}
                alt={featuredSummary.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-4">{featuredSummary.title}</h1>
                <div className="flex flex-wrap items-center gap-6 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {featuredSummary.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredSummary.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    {featuredSummary.genre}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {featuredSummary.themes.map((theme, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
              {featuredSummary.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.includes('-------')) {
                  const [title] = paragraph.split('\n');
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{title}</h2>;
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </CardContent>
        </Card>

        {/* Other Summaries */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Diğer Özetler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSummaries.map((book, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded-full text-sm">
                      <Clock className="h-3 w-3" />
                      {book.readTime}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {book.author}
                    </p>
                    <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs mb-4">
                      {book.genre}
                    </span>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {book.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/roman/ozetler/arsiv">
                Tüm Özetleri Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
} 