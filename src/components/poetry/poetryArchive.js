'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ThumbsUp, MessageSquare, Bookmark, Quote } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const poems = [
  {
    title: "Sessiz Gemi",
    content: `Artık demir almak günü gelmişse zamandan,
Meçhule giden bir gemi kalkar bu limandan.
Hiç yolcusu yokmuş gibi sessizce alır yol;
Sallanmaz o kalkışta ne mendil ne de bir kol.`,
    poet: "Yahya Kemal Beyatlı",
    year: "1925",
    category: "Lirik Şiir",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    likes: 3456,
    comments: 245,
    date: "15 Mart 2024",
    themes: ["Ölüm", "Yolculuk", "Ayrılık"],
    style: "Aruz Vezni"
  },
  {
    title: "Otuz Beş Yaş",
    content: `Yaş otuz beş! Yolun yarısı eder.
Dante gibi ortasındayız ömrün.
Delikanlı çağımızdaki cevher,
Yalvarmak, yakarmak nafile bugün,`,
    poet: "Cahit Sıtkı Tarancı",
    year: "1946",
    category: "Modern Şiir",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    likes: 2987,
    comments: 198,
    date: "12 Mart 2024",
    themes: ["Yaşlılık", "Zaman", "Hayat"],
    style: "Hece Vezni"
  },
  {
    title: "İstanbul'u Dinliyorum",
    content: `İstanbul'u dinliyorum, gözlerim kapalı
Önce hafiften bir rüzgar esiyor;
Yavaş yavaş sallanıyor
Yapraklar, ağaçlarda;`,
    poet: "Orhan Veli Kanık",
    year: "1947",
    category: "Serbest Şiir",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    likes: 3124,
    comments: 276,
    date: "10 Mart 2024",
    themes: ["İstanbul", "Şehir", "Yaşam"],
    style: "Serbest Nazım"
  },
  {
    title: "Yaşamaya Dair",
    content: `Yaşamak şakaya gelmez,
büyük bir ciddiyetle yaşayacaksın
bir sincap gibi mesela,
yani, yaşamanın dışında ve ötesinde hiçbir şey beklemeden`,
    poet: "Nazım Hikmet",
    year: "1962",
    category: "Toplumcu Şiir",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    likes: 4567,
    comments: 389,
    date: "8 Mart 2024",
    themes: ["Yaşam", "Umut", "Mücadele"],
    style: "Serbest Nazım"
  },
  {
    title: "Monna Rosa",
    content: `Monna Rosa, siyah güller, ak güller;
Gülce'nin gülleri ve beyaz yatak.
Kanadı kırık kuş merhamet ister;
Ah, senin yüzünden kana batacak`,
    poet: "Sezai Karakoç",
    year: "1952",
    category: "Modern Şiir",
    image: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-4.0.3",
    likes: 2876,
    comments: 234,
    date: "5 Mart 2024",
    themes: ["Aşk", "Güzellik", "Hüzün"],
    style: "Hece Vezni"
  }
];

const categories = [
  { value: "all", label: "Tüm Kategoriler" },
  { value: "lirik", label: "Lirik Şiir" },
  { value: "modern", label: "Modern Şiir" },
  { value: "serbest", label: "Serbest Şiir" },
  { value: "toplumcu", label: "Toplumcu Şiir" }
];

const styles = [
  { value: "all", label: "Tüm Üsluplar" },
  { value: "aruz", label: "Aruz Vezni" },
  { value: "hece", label: "Hece Vezni" },
  { value: "serbest", label: "Serbest Nazım" }
];


const PoetryArchive = () => {
  return (
    <>
    <div className="container-custom py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Şiir Arşivi</h1>
          <p className="text-muted-foreground">
            Edebiyatın en etkileyici şiirleri
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
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
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[150px]">
              <SelectValue placeholder="Üslup seçin" />
            </SelectTrigger>
            <SelectContent>
              {styles.map((style) => (
                <SelectItem key={style.value} value={style.value}>
                  {style.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Poems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {poems.map((poem, index) => (
          <Card key={index} className="group hover-lift">
            <CardContent className="p-0">
              <div className="relative h-48">
                <img
                  src={poem.image}
                  alt={poem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="text-white">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-primary/20 rounded-full text-sm">
                      {poem.category}
                    </span>
                    <span className="px-2 py-1 bg-black/60 rounded-full text-sm">
                      {poem.style}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {poem.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {poem.poet}, {poem.year}
                  </p>
                  <div className="relative pl-6 mb-4 italic text-muted-foreground">
                    <Quote className="absolute left-0 top-0 h-4 w-4 text-primary" />
                    <p className="line-clamp-4 whitespace-pre-line">
                      {poem.content}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {poem.themes.map((theme, idx) => (
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
                      {poem.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {poem.comments}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {poem.poet}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {poem.date}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </>
  )
}

export default PoetryArchive