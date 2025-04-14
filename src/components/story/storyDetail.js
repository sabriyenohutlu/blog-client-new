"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const story = {
  title: "Kaşağı",
  content: `
      Hasan hasta. Hem de ağır hasta... Dokuz yaşında ancak var. Miniminicik bir çocuk. Bir deri, bir kemik kalmış. Kara kuru yüzü büsbütün kararmış. Kömür gibi iri gözleri büyüdükçe büyümüş. Durmadan bakıyor. Durmadan bakıyor. Çok uzaklara, çok uzaklara bakıyor. Hiç konuşmuyor. Hiç gülmüyor. Hiç ağlamıyor. Durmadan, durmadan bakıyor.
  
      Annem üzülüyor. Kardeşimin bu haline çok üzülüyor. Gözleri yaşla doluyor. Babam da üzülüyor. O da çok üzülüyor. Ama belli etmemeye çalışıyor. Ara sıra yanıma geliyor. Başımı okşuyor. Saçlarımla oynuyor. Sonra gidiyor. Hiçbir şey söylemiyor.
  
      Ben de üzülüyorum. Hem de çok üzülüyorum. Kardeşimin bu hali benim suçum. Hep benim yüzümden oldu. O kaşağı yok mu, o kaşağı... Ah bir elime geçse, paramparça ederim onu. Hep onun yüzünden. Hep o kaşağı yüzünden...
  
      Bir gün babam beni çağırdı. "Oğlum" dedi, "sen artık büyüdün. Atları sen tımar edeceksin." Sevindim. Çok sevindim. Atlara bakacağım. Onları tımar edeceğim. Ne güzel... Hemen ahıra koştum. Atların yanına gittim. Babam kaşağıyı verdi. "Al" dedi, "bununla tımar edeceksin."
  
      Kaşağıyı aldım. Atları tımar etmeye başladım. Ama beceremedim. Bir türlü beceremedim. Atlar huysuzlandı. Tepindiler. Çifte attılar. Korktum. Çok korktum. Kaşağıyı yere attım. Kaçtım.
  
      O gün bugün kardeşim hasta. Hem de ağır hasta... Dokuz yaşında ancak var. Miniminicik bir çocuk. Bir deri, bir kemik kalmış. Kara kuru yüzü büsbütün kararmış. Kömür gibi iri gözleri büyüdükçe büyümüş. Durmadan bakıyor. Durmadan bakıyor. Çok uzaklara, çok uzaklara bakıyor...`,
  author: "Ömer Seyfettin",
  year: "1919",
  category: "Milli Edebiyat",
  readTime: "15 dk",
  themes: ["Vicdan", "Kardeşlik", "Pişmanlık", "Çocukluk"],
  likes: 2456,
  comments: 184,
  coverImage:
    "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
  analysis: `
      Hikaye Analizi
      -------------
      "Kaşağı", Ömer Seyfettin'in en bilinen hikayelerinden biridir. Yazar, çocukluk anılarından yola çıkarak vicdan azabı ve kardeşlik temalarını işler. Hikaye, bir çocuğun yaptığı hatanın ağırlığını taşıması ve bunun sonuçlarıyla yüzleşmesi üzerine kuruludur.
  
      Anlatım Teknikleri
      ----------------
      - İç monolog
      - Geriye dönüş
      - Betimleyici anlatım
      - Birinci tekil şahıs anlatımı
  
      Karakterler
      ----------
      1. Anlatıcı (Ağabey)
      - Vicdan azabı çeken
      - Pişmanlık duyan
      - Sorumluluk sahibi olmaya çalışan
  
      2. Hasan (Kardeş)
      - Masum
      - Hasta
      - Sessiz
  
      3. Anne-Baba
      - Endişeli
      - Sevgi dolu
      - Koruyucu
  
      Temalar ve Motifler
      -----------------
      1. Vicdan azabı
      - Yapılan hatanın ağırlığı
      - Pişmanlığın getirdiği iç hesaplaşma
  
      2. Kardeşlik
      - Kardeşler arası ilişkiler
      - Sorumluluk duygusu
  
      3. Çocukluk
      - Masumiyetin yitimi
      - Büyüme sancıları
    `,
};

const recommendedStories = [
  {
    title: "Son Kuşlar",
    author: "Sait Faik Abasıyanık",
    excerpt:
      "Modernleşen İstanbul'da kaybolan değerleri ve doğal güzellikleri anlatan nostaljik bir hikaye...",
    category: "Modern Hikaye",
    image:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    readTime: "12 dk",
    likes: 1856,
    comments: 142,
  },
  {
    title: "Yalnızlık Paylaşılmaz",
    author: "Özdemir Asaf",
    excerpt:
      "Modern kent yaşamında insanın yalnızlaşmasını ve iletişimsizliği anlatan derin bir hikaye...",
    category: "Çağdaş Hikaye",
    image:
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    readTime: "10 dk",
    likes: 1234,
    comments: 98,
  },
  {
    title: "Bir Kedi, Bir Adam",
    author: "Bilge Karasu",
    excerpt:
      "Kent yaşamında insan-hayvan ilişkisini sorgulayan modern bir hikaye...",
    category: "Modern Hikaye",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    readTime: "8 dk",
    likes: 923,
    comments: 76,
  },
];

const StoryDetail = () => {
  return (
    <>
      <div className="container-custom py-8">
        {/* Hero Section */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="relative h-[400px] w-full">
              <img
                src={story.coverImage}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                    {story.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{story.title}</h1>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {story.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {story.year}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {story.readTime}
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
                {/* Story Content */}
                <div className="mb-8 prose prose-lg dark:prose-invert max-w-none">
                  {story.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>

                {/* Interaction Buttons */}
                <div className="flex items-center gap-4 py-4 border-t border-b border-border">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    {story.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {story.comments}
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
                  {story.themes.map((theme, index) => (
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
                  {story.analysis.split("\n\n").map((paragraph, index) => {
                    if (paragraph.includes("-------")) {
                      const [title] = paragraph.split("\n");
                      return (
                        <h2
                          key={index}
                          className="text-2xl font-bold mt-8 mb-4"
                        >
                          {title}
                        </h2>
                      );
                    }
                    return <p key={index}>{paragraph}</p>;
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Benzer Hikayeler</h2>
            <div className="space-y-4">
              {recommendedStories.map((story, index) => (
                <Card key={index} className="group hover-lift">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground">
                          {story.category}
                        </span>
                        <h3 className="font-bold group-hover:text-primary transition-colors">
                          {story.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {story.author}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-3 w-3" />
                            {story.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {story.comments}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {story.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link href="/hikaye">
                Tüm Hikayeleri Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryDetail;
