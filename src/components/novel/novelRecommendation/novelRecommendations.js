'use client';
import { NextSeo } from 'next-seo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, Clock, ThumbsUp, ArrowRight } from "lucide-react";
import Link from "next/link";
const featuredRecommendation = {
  title: "Yüzyıllık Yalnızlık: Büyülü Gerçekliğin Başyapıtı",
  coverImage: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
  rating: 4.9,
  readTime: "18 saat",
  difficulty: "Orta",
  genre: "Büyülü Gerçekçilik",
  author: "Gabriel García Márquez",
  year: "1967",
  content: `
    Neden Okumalısınız?
    ------------------
    Gabriel García Márquez'in başyapıtı "Yüzyıllık Yalnızlık", edebiyat dünyasının en etkileyici eserlerinden biridir. Büyülü gerçekçilik akımının en önemli örneği olan roman, yedi nesil boyunca Buendía ailesinin hikayesini anlatırken, Latin Amerika'nın tarihini ve kültürünü de gözler önüne serer.

    Kitap Hakkında
    -------------
    Macondo'nun kuruluşundan yıkılışına kadar geçen sürede, Buendía ailesinin destansı öyküsü, insanlık tarihinin adeta bir mikrokozmosu gibidir. Tekrar eden isimler ve olaylar, zamanın döngüsel doğasını vurgularken, gerçekle hayalin iç içe geçtiği anlatım, okuyucuyu büyülü bir yolculuğa çıkarır.

    Okuyucu İçin Notlar
    -----------------
    - Karakterlerin isimlerinin benzerliği kafa karıştırıcı olabilir; bir aile ağacı çıkarmanız faydalı olacaktır
    - Kitabı okurken not almak, olayları ve karakterleri takip etmenizi kolaylaştıracaktır
    - Büyülü gerçekçilik unsurlarına açık bir zihinle yaklaşın
    - Latin Amerika tarihi hakkında temel bilgi edinmek, kitabı daha iyi anlamanızı sağlayacaktır

    Etkileyici Alıntılar
    ------------------
    "Birçok yıl sonra, bir idam mangasının karşısında dururken, Albay Aureliano Buendía, babasının onu buzu keşfetmeye götürdüğü o uzak öğleden sonrayı hatırlayacaktı."

    "Yalnızlık, anıların yıpranmasına ve geleceğin bulanıklaşmasına yol açar."
  `
};

const otherRecommendations = [
  {
    title: "Sefiller",
    author: "Victor Hugo",
    genre: "Tarihi Roman",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    description: "Adalet, merhamet ve kurtuluş temalı bu başyapıt, 19. yüzyıl Fransa'sında geçen unutulmaz bir destan..."
  },
  {
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    genre: "Psikolojik Roman",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    description: "İnsan psikolojisinin derinliklerine inen, suç ve vicdanı sorgulayan bir başyapıt..."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Distopya",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    description: "Totaliter bir dünyada özgürlük ve bireysellik mücadelesini anlatan, zamansız bir klasik..."
  }
];
const NovelRecommendations = () => {
  return (
    <>
    <NextSeo
      title="Roman Önerileri - Edebi Akış"
      description="Okuyucularımız için seçtiğimiz özel roman tavsiyeleri"
      openGraph={{
        title: 'Roman Önerileri - Edebi Akış',
        description: 'Okuyucularımız için seçtiğimiz özel roman tavsiyeleri',
      }}
    />
    <div className="container-custom py-8">
      {/* Featured Recommendation */}
      <Card className="mb-12">
        <CardContent className="p-0">
          <div className="relative h-[400px] w-full">
            <img
              src={featuredRecommendation.coverImage}
              alt={featuredRecommendation.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{featuredRecommendation.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {featuredRecommendation.rating}/5.0
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredRecommendation.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  {featuredRecommendation.difficulty}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                  {featuredRecommendation.genre}
                </span>
                <span className="text-gray-300">
                  {featuredRecommendation.author}, {featuredRecommendation.year}
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
            {featuredRecommendation.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.includes('-------')) {
                const [title] = paragraph.split('\n');
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{title}</h2>;
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </CardContent>
      </Card>

      {/* Other Recommendations */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Diğer Öneriler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherRecommendations.map((book, index) => (
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
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {book.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <ThumbsUp className="h-4 w-4 text-primary" />
                  </div>
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
            <Link href="/roman/oneriler/arsiv">
              Tüm Önerileri Gör
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </>
  )
}

export default NovelRecommendations