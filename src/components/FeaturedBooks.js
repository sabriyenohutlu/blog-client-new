"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Book,
  BookOpen,
  BookMarked,
  ArrowRight,
  Star,
  Clock,
  User,
  Icon,
} from "lucide-react";
import Link from "next/link";
const categories = [
  {
    title: "Roman İncelemeleri",
    description: "Detaylı roman analizleri ve eleştirel değerlendirmeler",
    icon: BookOpen,
    href: "/roman/incelemeler/arsiv",
    color: "bg-blue-500/10 text-blue-500",
    featured: {
      title: "Tutunamayanlar",
      author: "Oğuz Atay",
      year: "1972",
      rating: 4.8,
      readTime: "25 dk",
      reviewer: "Prof. Dr. Ahmet Yılmaz",
      review:
        "Modern Türk edebiyatının başyapıtlarından biri olarak kabul edilen bu eser, postmodern anlatım teknikleriyle geleneksel roman kalıplarını kıran...",
      tags: ["Postmodern", "Toplumsal Eleştiri", "Yabancılaşma"],
    },
  },
  {
    title: "Roman Önerileri",
    description: "Sizin için seçtiğimiz özel roman tavsiyeleri",
    icon: BookMarked,
    href: "/roman/oneriler/arsiv",
    color: "bg-purple-500/10 text-purple-500",
    featured: {
      title: "Beyaz Geceler",
      author: "Dostoyevski",
      year: "1848",
      rating: 4.7,
      readTime: "18 dk",
      reviewer: "Doç. Dr. Zeynep Kaya",
      review:
        "İnsanın iç dünyasını derinden analiz eden, duygusal yoğunluğu yüksek bir başyapıt. Petersburg'un beyaz gecelerinde geçen...",
      tags: ["Psikolojik", "Romantik", "Klasik"],
    },
  },
];

export default function FeaturedBooks(pinnedReview) {
  console.log("pinnedReview", pinnedReview);
  return (
    <div className="container ">
      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-2 gap-6">
        <Link
          href={`/roman/incelemeler/${pinnedReview?.pinnedReview?.url.urledTitle}-${pinnedReview?.pinnedReview?.novel_reviewId}`}
        >
          <Card className="group hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div
                // className={cn(
                //   "p-3 rounded-xl transition-colors",
                //   category?.color
                // )}
                ></div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Roman İncelemeleri
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Detaylı roman analizleri ve eleştirel değerlendirmeler
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Öne Çıkan</h4>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">
                      {pinnedReview?.pinnedReview?.rating}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-lg group-hover:text-primary transition-colors">
                      {pinnedReview.pinnedReview?.novel_reviewTitle}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                      <span>{pinnedReview.pinnedReview?.bookauthor_name}</span>
                      <span>•</span>
                      {/* <span>{pinnedReview.pinnedReview?.createdAt}</span> */}
                    </div>
                  </div>

                  {/* <p className="text-sm text-muted-foreground line-clamp-3">
                  {pinnedReview.featured.review}
                </p> */}

                  {/* <div className="flex flex-wrap gap-2">
                  {pinnedReview.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-background rounded-full text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {pinnedReview.pinnedReview?.author_id}
                    </div>
                    {/* <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {category.featured.readTime}
                      </div> */}
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>
        </Link>
          {/* <Link href="/roman/incelemeler"   className="w-full group/btn hover:bg-primary hover:text-white transition-all">
                  <span>Tümünü Gör</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link> */}
      </div>
    </div>
  );
}
