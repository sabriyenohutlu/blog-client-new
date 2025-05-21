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
import Image from "next/image";
const similarReviews = [
  {
    image: "",
    title: "İnsan Ne İle Yaşar İncelemesi",
    date: "07 Nisan 2025",
    readTime: "4 dk",
    author: "Tolstoy",
    likes: 123,
    comments: 8,
  },
  {
    image: "",
    title: "Yüzyıllık Yalnızlık: Büyülü Gerçekçilik",
    date: "05 Nisan 2025",
    readTime: "6 dk",
    author: "Gabriel Garcia Mart",
    likes: 123,
    comments: 8,
  },
];

const NovelReviewDetail = ({reviewData,reviewDataArticle}) => {
  const {
    novel_reviewTitle,
    novel_summaryInfo,
    author_id,
    createdAt,
    rating
  } = reviewData;

  const statusAuthor = {
    "V8zCwWuxkGggIlUl02sC9hJvP8p2": 'Sabriye N.',
    "41dq6CLozJSoeL5uAIq4vMt5SFu1": 'Hüseyin N.'
};
  
  return (
      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ana İçerik */}
          <div className="lg:col-span-2">
            <Card>
              <article className="max-w-4xl mx-auto px-4 py-8">
                {/* Header Section */}
                <header className="mb-8">
                  <h1 className="text-3xl font-bold mb-4">
                    {novel_reviewTitle}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span>Yazar: {statusAuthor[author_id]}</span>
                    <span>•</span>
                    {/* <span>İnceleme: {reviewData.reviewBody}</span> */}
                    <span>•</span>
                    <span>
                      {createdAt}
                    </span>
                  </div>
                  <div className="relative w-full h-[400px] mb-6">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3"
                      }
                      alt={novel_reviewTitle}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">⭐</span>
                    <span className="font-bold">{rating}/5</span>
                  </div>
                </header>

                {/* Content Section */}
                <div className="prose prose-lg max-w-none">
                  {/* <h2 className="text-2xl font-bold mb-4">Özet</h2> */}
                  {/* <p className="mb-6">{novel_summaryInfo}</p> */}
                  <p
                    className="whitespace-pre-line mb-8"
                    dangerouslySetInnerHTML={{
                      // __html: DOMPurify.sanitize(body),
                      __html: reviewDataArticle.body || "",
                    }}
                  ></p>
                  {/* Recommendations Section */}
                  <section className="mt-12">
                    {/* <h2 className="text-2xl font-bold mb-6">Benzer Eserler</h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* {reviewData.recommendations.map((book, index) => (
                          <a
                            key={index}
                            href={book.link}
                            className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <h3 className="font-semibold">{book.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{book.author}</p>
                          </a>
                        ))} */}
                    </div>
                  </section>
                </div>
              </article>
            </Card>
          </div>

          {/* Sidebar - Benzer Yazılar */}
          {/* <div className="space-y-6">
            <h2 className="text-2xl font-bold">Benzer İncelemeler</h2>
            <div className="space-y-4">
              {similarReviews?.map((review, index) => (
                <Card key={index} className="group hover-lift">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={review.image}
                          alt={review.title}
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 96px, 96px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground">
                            {review.date}
                          </span>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {review.readTime}
                          </div>
                        </div>
                        <h3 className="font-bold text-base mb-1 truncate group-hover:text-primary transition-colors">
                          {review.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {review.author}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-3 w-3" />
                            {review.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {review.comments}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild variant="outline" className="w-full">
              <Link href="/roman/incelemeler/arsiv">
                Tüm İncelemeleri Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
  );
};

export default NovelReviewDetail;
