"use client"
import { NextSeo } from 'next-seo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredReview = {
    title: "Tutunamayanlar: Modern Türk Edebiyatının Başyapıtı",
    excerpt: "Oğuz Atay'ın başyapıtı Tutunamayanlar, Türk edebiyatının en önemli postmodern romanlarından biri olarak kabul edilir...",
    coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    author: "Ahmet Yılmaz",
    date: "15 Mart 2024",
    readTime: "12 dk",
    content: `
      Oğuz Atay'ın 1971-1972 yıllarında yayımlanan "Tutunamayanlar" romanı, Türk edebiyatının dönüm noktalarından biri olarak kabul edilir. Roman, geleneksel anlatı tekniklerini kırarak, postmodern edebiyatın Türkiye'deki ilk örneklerinden birini oluşturur.
  
      Romanın Özeti ve Ana Karakterler
      -------------------------------
      Romanın merkezinde Turgut Özben karakteri yer alır. Turgut, yakın arkadaşı Selim Işık'ın intiharının ardından onun hayatını araştırmaya başlar. Bu araştırma sürecinde sadece Selim'in değil, kendi kimliğinin de sorgulamasını yapar.
  
      Anlatım Teknikleri ve Üslup
      -------------------------
      Atay, romanda bilinç akışı, montaj, metinlerarasılık gibi modern anlatım tekniklerini ustaca kullanır. Üstkurmaca özelliğiyle roman, kendi yazılış sürecini de anlatının bir parçası haline getirir.
  
      Toplumsal Eleştiri
      ----------------
      Roman, Türk aydınının kimlik bunalımını, Doğu-Batı çatışmasını ve modernleşme sürecinin yarattığı travmaları irdeler. Bürokrasi, akademi ve entelektüel çevreler keskin bir eleştiriye tabi tutulur.
  
      Sonuç
      -----
      "Tutunamayanlar", sadece edebi değil, sosyolojik ve felsefi boyutlarıyla da Türk edebiyatının en önemli eserlerinden biridir. Roman, günümüzde hala güncelliğini korumakta ve yeni okurlarla buluşmaya devam etmektedir.
    `
  };

  const recommendedReviews = [
    {
      title: "Beyaz Geceler: Dostoyevski'nin Duygusal Başyapıtı",
      excerpt: "Petersburg'un beyaz gecelerinde geçen dört günlük bir aşk hikayesi...",
      author: "Zeynep Kaya",
      date: "12 Mart 2024",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3"
    },
    {
      title: "Kürk Mantolu Madonna'da Aşk ve Toplum",
      excerpt: "Sabahattin Ali'nin unutulmaz romanında aşk ve toplumsal normlar...",
      author: "Mehmet Demir",
      date: "10 Mart 2024",
      image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3"
    },
    {
      title: "Fareler ve İnsanlar: Steinbeck'in İnsanlık Dramı",
      excerpt: "Dostluk, yalnızlık ve Amerikan rüyasının karanlık yüzü...",
      author: "Ayşe Yıldız",
      date: "8 Mart 2024",
      image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3"
    }
  ];


const novelReview = () => {
  return (
    <>
       <NextSeo
        title="Roman İncelemeleri - Edebi Akış"
        description="Detaylı roman analizleri ve eleştirel değerlendirmeler"
        openGraph={{
          title: 'Roman İncelemeleri - Edebi Akış',
          description: 'Detaylı roman analizleri ve eleştirel değerlendirmeler',
        }}
      />
      <div className="container-custom py-8">
        {/* Featured Review */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="relative h-[400px] w-full">
              <img
                src={featuredReview.coverImage}
                alt={featuredReview.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-4">{featuredReview.title}</h1>
                <p className="text-lg text-gray-200 mb-6">{featuredReview.excerpt}</p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredReview.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredReview.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredReview.readTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
              {featuredReview.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.includes('-------')) {
                  const [title] = paragraph.split('\n');
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{title}</h2>;
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Reviews */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Diğer İncelemeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedReviews.map((review, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={review.image}
                      alt={review.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {review.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {review.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{review.author}</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/roman/incelemeler/arsiv">
                Tüm İncelemeleri Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default novelReview