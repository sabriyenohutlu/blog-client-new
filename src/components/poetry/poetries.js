"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Share2,
  BookOpen,
  ArrowRight,
  Calendar,
  User,
} from "lucide-react";
import Link from "next/link";
const featuredPoems = [
  {
    title: "Sessiz Gemi",
    author: "Yahya Kemal Beyatlı",
    coverImage:
      "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    category: "Lirik Şiir",
    year: "1925",
    excerpt: `Artık demir almak günü gelmişse zamandan,
  Meçhule giden bir gemi kalkar bu limandan.
  Hiç yolcusu yokmuş gibi sessizce alır yol;
  Sallanmaz o kalkışta ne mendil ne de bir kol.`,
    themes: ["Ölüm", "Yolculuk", "Hüzün"],
  },
  {
    title: "İstanbul'u Dinliyorum",
    author: "Orhan Veli Kanık",
    coverImage:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    category: "Modern Şiir",
    year: "1947",
    excerpt: `İstanbul'u dinliyorum, gözlerim kapalı
  Önce hafiften bir rüzgar esiyor;
  Yavaş yavaş sallanıyor
  Yapraklar, ağaçlarda;`,
    themes: ["İstanbul", "Şehir", "Yaşam"],
  },
  {
    title: "Yaşamaya Dair",
    author: "Nazım Hikmet",
    coverImage:
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    category: "Toplumcu Şiir",
    year: "1962",
    excerpt: `Yaşamak şakaya gelmez,
  büyük bir ciddiyetle yaşayacaksın
  bir sincap gibi mesela,
  yani, yaşamanın dışında ve ötesinde hiçbir şey beklemeden`,
    themes: ["Yaşam", "Umut", "Mücadele"],
  },
];

const popularPoets = [
  {
    name: "Cahit Sıtkı Tarancı",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    poemCount: 45,
    famousPoem: "Otuz Beş Yaş",
    era: "Cumhuriyet Dönemi",
  },
  {
    name: "Attila İlhan",
    image:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    poemCount: 62,
    famousPoem: "Ben Sana Mecburum",
    era: "Modern Dönem",
  },
  {
    name: "Cemal Süreya",
    image:
      "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    poemCount: 53,
    famousPoem: "Üvercinka",
    era: "İkinci Yeni",
  },
];

const recentPoems = [
  {
    title: "Lavinia",
    author: "Özdemir Asaf",
    date: "15 Mart 2024",
    likes: 234,
    excerpt: "Seni sevmek kaderimde varmış / Bir ömür boyu aşkınla yanmış...",
  },
  {
    title: "Kar Musikileri",
    author: "Ahmet Hamdi Tanpınar",
    date: "12 Mart 2024",
    likes: 186,
    excerpt: "Ne güzel geçti bütün yaz, / Geceler küçük bahçede...",
  },
  {
    title: "Gül",
    author: "İsmet Özel",
    date: "10 Mart 2024",
    likes: 157,
    excerpt:
      "Gül devrini yaşıyoruz, kan kırmızı / Gül kokusundan geçilmiyor ortalık...",
  },
];
const Poetries = ({ latestPoetryList, pinnedPoetryList }) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return (
      <div className="container py-8">
        {/* Featured Poems */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">Öne Çıkan Şiirler</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedPoetryList.map((poem, index) => (
              <Link
                key={index}
                href={`/siir/${poem.url.urledTitle}-${poem.poetry_id}`}
              >
                <Card className="group hover-lift">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        src={
                          "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3"
                        }
                        alt={poem.poetry_title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        {/* <div className="flex items-center gap-2 text-sm mb-2">
                        <span className="px-2 py-1 bg-primary/20 rounded-full">
                          {poem.category}
                        </span>
                      </div> */}
                        <h2 className="text-xl font-bold mb-1">
                          {poem.poetry_title}
                        </h2>
                        <p className="text-sm text-gray-300">
                          {poem.poetryOfWho}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground italic mb-4 whitespace-pre-line line-clamp-4">
                        {poem.poetry_summaryInfo}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        {/* <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button> 
                      </div> */}
                        <span className="text-sm text-muted-foreground">
                          {poem.createdAt.toLocaleString("tr-TR", options)}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {poem.themes.map((theme, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted rounded-full text-xs"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Poets */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Popüler Şairler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPoets.map((poet, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={poet.image}
                        alt={poet.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {poet.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {poet.era}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{poet.poemCount} Şiir</span>
                      <span>En Ünlü: {poet.famousPoem}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Recent Poems */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Son Eklenen Şiirler</h2>
            <Button variant="outline" asChild>
              <Link href="/siir/arsiv">
                Tümünü Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPoetryList.map((poem, index) => (
              <Link
                key={index}
                href={`/siir/${poem.url.urledTitle}-${poem.poetry_id}`}
              >
                <Card className="group hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {poem.poetry_title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            {/* <User className="h-4 w-4" /> */}
                            {poem.poetryOfWho}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {poem.createdAt.toLocaleString("tr-TR", options)}
                          </div>
                        </div>
                        {/* <p className="text-muted-foreground italic line-clamp-2">
                      {poem.excerpt}
                    </p> */}
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <span className="text-xs text-muted-foreground">
                          {poem.likes}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
  );
};

export default Poetries;
