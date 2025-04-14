"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
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
const NovelReviewsArchive = ({ novelReviewsList }) => {
  const categories = [
    { value: "all", label: "Tüm Kategoriler" },
    { value: "modern", label: "Modern Roman" },
    { value: "postmodern", label: "Postmodern Roman" },
    { value: "milli", label: "Milli Edebiyat" },
    { value: "servet-i-funun", label: "Servet-i Fünun" },
  ];
  return (
    <>
      <div className="container-custom py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Roman İncelemeleri</h1>
            <p className="text-muted-foreground">
              Türk ve dünya edebiyatından seçme roman incelemeleri
            </p>
          </div>
          {/* <div className="w-full md:w-auto">
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
          </div> */}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {novelReviewsList.map((review, index) => (
            <Link href={`/roman/incelemeler/${review.url.urledTitle}-${review.novel_reviewId}`} key={index}>
              <Card key={index} className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={
                        "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3"
                      }
                      alt={review.novel_reviewTitle}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                    {/* <div className="absolute top-4 right-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white"
                      >
                        <Bookmark className="h-5 w-5" />
                      </Button>
                    </div> */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex flex-row gap-2">
                        {review.novel_bookCategory.map((item)=><span className="px-2 py-1 bg-primary/20 rounded-full text-sm">{item}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {review.novel_reviewTitle}
                      </h2>
                      <p className="text-muted-foreground line-clamp-2">
                        {review.novel_summaryInfo}
                      </p>
                    </div>
{/* 
                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <div className="text-sm">
                        <span className="font-medium">{review.novel_name}</span>
                        <span className="text-muted-foreground">
                          {" "}
                          - {review.bookauthor_name}
                        </span>
                      </div>
                    </div> */}

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        {/* <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {review.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {review.comments}
                        </div> */}
                        {/* <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {review.readTime} 
                        </div> */}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {review.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(
                          review.createdAt.seconds * 1000
                        ).toLocaleString("tr-TR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
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

export default NovelReviewsArchive;
