'use client';

import { NextSeo } from 'next-seo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ThumbsUp, MessageSquare, Share2, Bookmark, ArrowRight } from "lucide-react";
import Link from "next/link";

const poem = {
  title: "Sessiz Gemi",
  content: `Artık demir almak günü gelmişse zamandan,
Meçhule giden bir gemi kalkar bu limandan.
Hiç yolcusu yokmuş gibi sessizce alır yol;
Sallanmaz o kalkışta ne mendil ne de bir kol.

Rıhtımda kalanlar bu seyahatten elemli,
Günlerce siyah ufka bakar gözleri nemli.
Biçare gönüller! Ne giden son gemidir bu!
Hicranlı hayatın ne de son matemidir bu!

Dünyada sevilmiş ve seven nafile bekler;
Bilmez ki giden sevgililer dönmeyecekler.
Birçok gidenin her biri memnun ki yerinden,
Birçok seneler geçti; dönen yok seferinden.`,
  poet: "Yahya Kemal Beyatlı",
  year: "1925",
  category: "Lirik Şiir",
  themes: ["Ölüm", "Ayrılık", "Yolculuk", "Hüzün"],
  likes: 1245,
  comments: 86,
  coverImage: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
  analysis: `
    Şiir Analizi
    -----------
    "Sessiz Gemi", Yahya Kemal Beyatlı'nın en bilinen şiirlerinden biridir. Şair, ölüm temasını bir gemi yolculuğu metaforu üzerinden işler. Şiirdeki gemi, insanı ebediyete götüren bir vasıta olarak sembolize edilmiştir.

    Biçim Özellikleri
    ---------------
    - Aruz vezniyle yazılmıştır
    - Kafiye düzeni: aa/bb/cc şeklindedir
    - Beyitler halinde yazılmıştır

    İçerik ve Temalar
    ---------------
    1. Ölüm teması
    - Ölümün kaçınılmazlığı
    - Ölümün sessiz ve vakur tabiatı
    
    2. Ayrılık teması
    - Geride kalanların hüznü
    - Vedalaşmanın imkansızlığı

    3. Yolculuk metaforu
    - Hayattan ölüme geçiş
    - Dönüşü olmayan yolculuk
  `
};

const recommendedPoems = [
  {
    title: "Otuz Beş Yaş",
    poet: "Cahit Sıtkı Tarancı",
    excerpt: "Yaş otuz beş! Yolun yarısı eder. Dante gibi ortasındayız ömrün...",
    category: "Lirik Şiir",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    likes: 856,
    comments: 42
  },
  {
    title: "İstanbul'u Dinliyorum",
    poet: "Orhan Veli Kanık",
    excerpt: "İstanbul'u dinliyorum, gözlerim kapalı; Önce hafiften bir rüzgar esiyor...",
    category: "Modern Şiir",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    likes: 734,
    comments: 38
  },
  {
    title: "Yaşamaya Dair",
    poet: "Nazım Hikmet",
    excerpt: "Yaşamak şakaya gelmez, büyük bir ciddiyetle yaşayacaksın...",
    category: "Toplumcu Şiir",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    likes: 923,
    comments: 56
  }
];

export default function SiirDetay() {
  return (
    <>
      <NextSeo
        title={`${poem.title} - ${poem.poet} | Edebi Akış`}
        description={`${poem.poet}'in ${poem.title} adlı şiiri ve şiir analizi`}
        openGraph={{
          title: `${poem.title} - ${poem.poet} | Edebi Akış`,
          description: `${poem.poet}'in ${poem.title} adlı şiiri ve şiir analizi`,
        }}
      />
      <div className="container-custom py-8">
        {/* Hero Section */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="relative h-[400px] w-full">
              <img
                src={poem.coverImage}
                alt={poem.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                    {poem.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{poem.title}</h1>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {poem.poet}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {poem.year}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                {/* Poem Content */}
                <div className="mb-8">
                  <pre className="font-serif text-lg whitespace-pre-line leading-relaxed">
                    {poem.content}
                  </pre>
                </div>

                {/* Interaction Buttons */}
                <div className="flex items-center gap-4 py-4 border-t border-b border-border">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    {poem.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {poem.comments}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>

                {/* Themes */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {poem.themes.map((theme, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                {/* Analysis */}
                <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
                  {poem.analysis.split('\n\n').map((paragraph, index) => {
                    if (paragraph.includes('-------')) {
                      const [title] = paragraph.split('\n');
                      return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{title}</h2>;
                    }
                    return <p key={index}>{paragraph}</p>;
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Benzer Şiirler</h2>
            <div className="space-y-4">
              {recommendedPoems.map((poem, index) => (
                <Card key={index} className="group hover-lift">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <img
                          src={poem.image}
                          alt={poem.title}
                          className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground">
                          {poem.category}
                        </span>
                        <h3 className="font-bold group-hover:text-primary transition-colors">
                          {poem.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {poem.poet}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-3 w-3" />
                            {poem.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {poem.comments}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link href="/siir">
                Tüm Şiirleri Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
} 