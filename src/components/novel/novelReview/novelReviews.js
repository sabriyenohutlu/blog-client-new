"use client";
import { NextSeo } from "next-seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, Calendar, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import toTitleCase from "@/utils/titleCase";

const novelReviews = ({ novelReviewsList }) => {
  const coverImage =
    "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3";
  const lastPost = novelReviewsList[0];
  const image =
    "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3";

  return (
    <>
      <NextSeo
        title="Roman İncelemeleri - Edebi Akış"
        description="Detaylı roman analizleri ve eleştirel değerlendirmeler"
        openGraph={{
          title: "Roman İncelemeleri - Edebi Akış",
          description: "Detaylı roman analizleri ve eleştirel değerlendirmeler",
        }}
      />
      <div className="container-custom py-8">
        {/* Featured Review */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="relative h-[400px] w-full">
              <img
                src={coverImage}
                alt={lastPost.novel_reviewTitle}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-4">
                  {toTitleCase(lastPost?.novel_reviewTitle)}
                </h1>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {lastPost?.rating}/5.0
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <User className="h-4 w-4" /> */}
                    {lastPost.bookauthor_name}
                  </div>
                  <div className="flex items-start gap-4">
                    <span>
                      {lastPost.novel_bookCategory.map((category) => (
                        <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                          {category}
                        </span>
                      ))}
                    </span>
                    {/* <span className="text-gray-300">
                  {lastPost.author}
                </span> */}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(
                      lastPost.novel_recordedDate.seconds * 1000
                    ).toLocaleString("tr-TR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {lastPost.bookauthor_name} 
                  </div> */}
                </div>
              </div>
            </div>
            <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
              <p>{lastPost.novel_summaryInfo || ""}</p>
            </div>
          </CardContent>
        </Card>
        {/* Recommended Reviews */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Diğer İncelemeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novelReviewsList.slice(1, 4).map((review, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={image}
                      alt={review?.novel_reviewTitle}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {toTitleCase(review?.novel_reviewTitle)}
                    </h3>
                    <h3 className="text-sm text-muted-foreground mb-3">
                      {review?.bookauthor_name}
                    </h3>
                    {/* <div>
                      {review.novel_bookCategory.map((category) => (
                        <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                          {category}
                        </span>
                      ))}
                    </div> */}
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
  );
};

export default novelReviews;
