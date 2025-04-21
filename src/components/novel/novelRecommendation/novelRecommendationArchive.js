"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Star,
  ThumbsUp,
  MessageSquare,
  Bookmark,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const recommendations = [
  {
    title: "Yüzyıllık Yalnızlık",
    author: "Gabriel García Márquez",
    year: "1967",
    category: "Büyülü Gerçekçilik",
    image:
      "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3",
    description:
      "Latin Amerika edebiyatının başyapıtı, yedi nesil boyunca Buendía ailesinin destansı öyküsünü anlatırken, insanlık tarihinin bir mikrokozmosunu sunar...",
    rating: 4.9,
    readTime: "18 saat",
    difficulty: "Orta",
    likes: 3456,
    comments: 245,
    recommendedBy: "Prof. Dr. Ahmet Yılmaz",
    date: "15 Mart 2024",
    themes: ["Aile", "Tarih", "Büyülü Gerçekçilik"],
  },
  {
    title: "Sefiller",
    author: "Victor Hugo",
    year: "1862",
    category: "Klasik Roman",
    image:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    description:
      "Adalet, merhamet ve kurtuluş temalı bu başyapıt, 19. yüzyıl Fransa'sında geçen unutulmaz bir destan sunar...",
    rating: 4.8,
    readTime: "25 saat",
    difficulty: "Zor",
    likes: 2987,
    comments: 198,
    recommendedBy: "Doç. Dr. Zeynep Kaya",
    date: "12 Mart 2024",
    themes: ["Adalet", "Merhamet", "Toplumsal Eleştiri"],
  },
  {
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    year: "1866",
    category: "Psikolojik Roman",
    image:
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    description:
      "İnsan psikolojisinin derinliklerine inen, suç ve vicdanı sorgulayan bu başyapıt, modern edebiyatın temel taşlarından biridir...",
    rating: 4.9,
    readTime: "20 saat",
    difficulty: "Zor",
    likes: 3124,
    comments: 276,
    recommendedBy: "Dr. Mehmet Demir",
    date: "10 Mart 2024",
    themes: ["Psikoloji", "Suç", "Vicdan"],
  },
  {
    title: "1984",
    author: "George Orwell",
    year: "1949",
    category: "Distopya",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    description:
      "Totaliter bir dünyada özgürlük ve bireysellik mücadelesini anlatan, günümüzde bile geçerliliğini koruyan bir distopya klasiği...",
    rating: 4.7,
    readTime: "12 saat",
    difficulty: "Orta",
    likes: 4567,
    comments: 389,
    recommendedBy: "Prof. Dr. Ayşe Yıldız",
    date: "8 Mart 2024",
    themes: ["Distopya", "Özgürlük", "Totalitarizm"],
  },
  {
    title: "Bülbülü Öldürmek",
    author: "Harper Lee",
    year: "1960",
    category: "Modern Klasik",
    image:
      "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-4.0.3",
    description:
      "Irkçılık ve adaletsizliğe karşı mücadeleyi bir çocuğun gözünden anlatan, Amerikan edebiyatının başyapıtlarından biri...",
    rating: 4.8,
    readTime: "15 saat",
    difficulty: "Kolay",
    likes: 2876,
    comments: 234,
    recommendedBy: "Doç. Dr. Ali Kaya",
    date: "5 Mart 2024",
    themes: ["Adalet", "Irkçılık", "Büyüme"],
  },
];

// const categories = [
//   { value: "all", label: "Tüm Kategoriler" },
//   { value: "klasik", label: "Klasik Roman" },
//   { value: "modern", label: "Modern Klasik" },
//   { value: "psikolojik", label: "Psikolojik Roman" },
//   { value: "distopya", label: "Distopya" },
//   { value: "buyulu-gercekcilik", label: "Büyülü Gerçekçilik" }
// ];

// const difficulties = [
//   { value: "all", label: "Tüm Zorluklar" },
//   { value: "kolay", label: "Kolay" },
//   { value: "orta", label: "Orta" },
//   { value: "zor", label: "Zor" }
// ];

const NovelRecommendationArchive = ({ novelRecommendationList }) => {
  const image =
    "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3";
  return (
    <>
      <div className="container-custom py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Roman Önerileri</h1>
            <p className="text-muted-foreground">
              Editörlerimizin seçtiği unutulmaz romanlar
            </p>
          </div>
          {/* <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
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
                    <SelectValue placeholder="Zorluk seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty.value} value={difficulty.value}>
                        {difficulty.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div> */}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {novelRecommendationList.map((book, index) => (
            <Link
              href={`/roman/oneriler/${book.url.urledTitle}-${book.novel_recId}`}
              key={index}
            >
              <Card key={index} className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={image}
                      alt={book.novel_recTitle}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white"
                      >
                        <Bookmark className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          {book.novel_bookCategory.map((category) => (
                            <span
                              key={category}
                              className="px-2 py-1 bg-primary/20 rounded-full text-sm"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{book.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {book.novel_recTitle}
                      </h2>
                      {/* <p className="text-sm text-muted-foreground mb-2">
                      {book.author}, {book.year}
                    </p> */}
                      <p className="text-muted-foreground line-clamp-2">
                        {book.novel_summaryInfo}
                      </p>
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
                      </div>
                      <div className="flex items-center gap-4">
                        {/* <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {book.readTime}
                      </div> */}
                        {/* <span className="px-2 py-1 bg-muted rounded-full text-xs">
                        {book.difficulty}
                      </span> */}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                      <div>
                        <span className="block text-xs">Öneren</span>
                        {/* <span className="font-medium text-foreground">
                        {book.recommendedBy}
                      </span> */}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {book.createdAt.seconds}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NovelRecommendationArchive;
