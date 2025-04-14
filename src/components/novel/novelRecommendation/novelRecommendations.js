'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, Clock, ThumbsUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const otherRecommendations = [
  {
    title: "Sefiller",
    author: "Victor Hugo",
    genre: "Tarihi Roman",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3",
    description: "Adalet, merhamet ve kurtuluş temalı bu başyapıt, 19. yüzyıl Fransa'sında geçen unutulmaz bir destan..."
  },
  {
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    genre: "Psikolojik Roman",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3",
    description: "İnsan psikolojisinin derinliklerine inen, suç ve vicdanı sorgulayan bir başyapıt..."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Distopya",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
    description: "Totaliter bir dünyada özgürlük ve bireysellik mücadelesini anlatan, zamansız bir klasik..."
  }
];
const NovelRecommendations = ({novelRecommendationsList}) => {
  const lastPost = novelRecommendationsList[0];
  const coverImage = "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3"
  return (
    <>
    <div className="container-custom py-8">
      {/* Featured Recommendation */}
      <Link href={`/roman/oneriler/${lastPost.url.urledTitle}-${lastPost.novel_recId}`}>
      <Card className="mb-12">
        <CardContent className="p-0">
          <div className="relative h-[400px] w-full">
            <img
              src={coverImage}
              alt={lastPost.novel_recTitle}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{lastPost.novel_recTitle}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {lastPost.rating}/5.0
                </div>
                {/* <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {lastPost.readTime}
                </div> */}
                {/* <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  {lastPost.difficulty}
                </div> */}
              </div>
              <div className="flex items-center gap-4">
                {/* <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                  {lastPost.genre}
                </span> */}
                <span className="text-gray-300">
                  {lastPost.author}
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
          <p>{lastPost.novel_summaryInfo || ""}</p>
          </div>
        </CardContent>
      </Card>
      </Link>
   

      {/* Other Recommendations */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Diğer Öneriler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {novelRecommendationsList.slice(1,4).map((book, index) => (
            <Link href={`/roman/oneriler/${book.url.urledTitle}-${book.novel_recId}`}>
            <Card key={index} className="group hover-lift">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <img
                    src={"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3"}
                    alt={book.novel_recTitle}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded-full text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {book.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {book.novel_recTitle}
                    </h3>
                    {/* <ThumbsUp className="h-4 w-4 text-primary" /> */}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {book.author}
                  </p>
                  <div className='py-2'>
                    {book.novel_bookCategory.map((category) => (
                      <span key={category} className="px-3 py-1 bg-primary/20 rounded-full text-sm mr-2">
                        {category}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {book.novel_summaryInfo}
                  </p>
                </div>
              </CardContent>
            </Card>
            </Link>
            
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/roman/oneriler/arsiv">
              Tüm Önerileri Gör
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </>
  )
}

export default NovelRecommendations