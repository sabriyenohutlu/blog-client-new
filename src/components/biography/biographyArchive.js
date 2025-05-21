'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ThumbsUp, MessageSquare, Bookmark, Award, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const biographies = [
  {
    name: "Yahya Kemal Beyatlı",
    lifespan: "1884-1958",
    category: "Şair",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    birthPlace: "Üsküp",
    shortBio: "Modern Türk şiirinin en önemli temsilcilerinden biri olan Yahya Kemal, geleneksel şiir ile modern şiiri başarıyla sentezlemiştir...",
    readTime: "12 dk",
    likes: 2456,
    comments: 184,
    date: "15 Mart 2024",
    periods: ["II. Meşrutiyet", "Cumhuriyet"],
    notableWorks: ["Kendi Gök Kubbemiz", "Aziz İstanbul", "Sessiz Gemi"],
    awards: ["TBMM Üstün Hizmet Madalyası", "İstanbul Üniversitesi Fahri Doktorası"]
  },
  {
    name: "Halide Edip Adıvar",
    lifespan: "1884-1964",
    category: "Romancı",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    birthPlace: "İstanbul",
    shortBio: "Türk edebiyatının öncü kadın yazarlarından olan Halide Edip, Kurtuluş Savaşı'na katılmış ve milli mücadeleyi eserlerinde işlemiştir...",
    readTime: "15 dk",
    likes: 1987,
    comments: 156,
    date: "12 Mart 2024",
    periods: ["II. Meşrutiyet", "Milli Mücadele", "Cumhuriyet"],
    notableWorks: ["Ateşten Gömlek", "Sinekli Bakkal", "Vurun Kahpeye"],
    awards: ["İnönü Armağanı", "Uluslararası Mark Twain Derneği Şeref Üyeliği"]
  },
  {
    name: "Ahmet Hamdi Tanpınar",
    lifespan: "1901-1962",
    category: "Romancı",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    birthPlace: "İstanbul",
    shortBio: "Türk edebiyatının en özgün yazarlarından olan Tanpınar, Doğu-Batı sentezini ve zaman kavramını eserlerinde ustaca işlemiştir...",
    readTime: "14 dk",
    likes: 1856,
    comments: 142,
    date: "10 Mart 2024",
    periods: ["Cumhuriyet"],
    notableWorks: ["Huzur", "Saatleri Ayarlama Enstitüsü", "Beş Şehir"],
    awards: ["İstanbul Üniversitesi Edebiyat Fakültesi Profesörlüğü"]
  },
  {
    name: "Nazım Hikmet",
    lifespan: "1902-1963",
    category: "Şair",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    birthPlace: "Selanik",
    shortBio: "Çağdaş Türk şiirinin öncülerinden olan Nazım Hikmet, serbest nazımın Türk edebiyatındaki en önemli temsilcisidir...",
    readTime: "16 dk",
    likes: 3124,
    comments: 276,
    date: "8 Mart 2024",
    periods: ["Cumhuriyet"],
    notableWorks: ["Memleketimden İnsan Manzaraları", "835 Satır", "Kuvâyi Milliye"],
    awards: ["Uluslararası Barış Ödülü", "Lenin Barış Ödülü"]
  },
  {
    name: "Orhan Veli Kanık",
    lifespan: "1914-1950",
    category: "Şair",
    image: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-4.0.3",
    birthPlace: "İstanbul",
    shortBio: "Garip akımının kurucularından olan Orhan Veli, Türk şiirinde yeni bir çığır açmış ve gündelik hayatı şiire taşımıştır...",
    readTime: "10 dk",
    likes: 2876,
    comments: 234,
    date: "5 Mart 2024",
    periods: ["Cumhuriyet"],
    notableWorks: ["Garip", "Vazgeçemediğim", "İstanbul'u Dinliyorum"],
    awards: ["CHP Şiir Ödülü"]
  }
];

const categories = [
  { value: "all", label: "Tüm Kategoriler" },
  { value: "sair", label: "Şair" },
  { value: "romanci", label: "Romancı" },
  { value: "hikayeci", label: "Hikayeci" },
  { value: "elestirel", label: "Eleştirmen" }
];

const periods = [
  { value: "all", label: "Tüm Dönemler" },
  { value: "mesrutiyet", label: "II. Meşrutiyet" },
  { value: "milli-mucadele", label: "Milli Mücadele" },
  { value: "cumhuriyet", label: "Cumhuriyet" }
];


const BiographyArchive = () => {
  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Yazar Biyografileri</h1>
          <p className="text-muted-foreground">
            Türk edebiyatının usta kalemlerinin hayat hikayeleri
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
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Dönem seçin" />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Biographies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {biographies.map((bio, index) => (
          <Card key={index} className="group hover-lift">
            <CardContent className="p-0">
              <div className="relative h-48">
                <img
                  src={bio.image}
                  alt={bio.name}
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
                      {bio.category}
                    </span>
                    <span className="px-2 py-1 bg-black/60 rounded-full text-sm">
                      {bio.lifespan}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {bio.name}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    {bio.birthPlace}
                  </div>
                  <p className="text-muted-foreground line-clamp-2">
                    {bio.shortBio}
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium mb-2">Önemli Eserleri:</p>
                  <div className="flex flex-wrap gap-2">
                    {bio.notableWorks.map((work, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-background rounded-full text-xs"
                      >
                        {work}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {bio.periods.map((period, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted rounded-full text-xs"
                    >
                      {period}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {bio.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {bio.comments}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {bio.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">Ödüller</p>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm line-clamp-1">
                        {bio.awards.join(", ")}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {bio.date}
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

export default BiographyArchive