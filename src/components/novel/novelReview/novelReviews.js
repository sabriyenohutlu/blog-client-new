"use client"
import { NextSeo } from 'next-seo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const novelReview = ({novelReviewsWithLimit}) => {
  const coverImage = "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3";
  const lastPost = novelReviewsWithLimit[0]
  const image = "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3"

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
                src={coverImage}
                alt={lastPost.novel_reviewTitle}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-4">{lastPost.novel_reviewTitle}</h1>
                <p className="text-lg text-gray-200 mb-6">{lastPost.novel_summaryInfo}</p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {/* {lastPost.author} */}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(lastPost.novel_recordedDate.seconds * 1000).toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {/* {lastPost.readTime} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
              {/* {lastPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.includes('-------')) {
                  const [title] = paragraph.split('\n');
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{title}</h2>;
                }
                return <p key={index}>{paragraph}</p>;
              })} */}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Reviews */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Diğer İncelemeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novelReviewsWithLimit.slice(1,4).map((review, index) => (
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
                      {review?.novel_reviewTitle}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {review?.novel_summaryInfo}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      {/* <span>{review.author}</span> */}
                      <span>{new Date(review.novel_recordedDate.seconds * 1000).toLocaleString()}</span>
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