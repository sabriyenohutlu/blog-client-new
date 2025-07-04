"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getRandomImage } from "@/lib/randomImage";
import { useEffect, useState } from "react";

export default function HomeSlider({ novelRecommendationList }) {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const generatedImages = novelRecommendationList.map(() => getRandomImage());
    setRandomImages(generatedImages);
  }, [novelRecommendationList]);

  // Wait until images are loaded on the client
  if (randomImages.length === 0) return null;
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel className="w-full">
        <CarouselContent>
          {novelRecommendationList.map((slide, index) => (
            <CarouselItem key={index}>
              <Link href={`/roman/oneriler/${slide.url.urledTitle}-${slide.novel_recId}`}>
                <Card className="border-0 shadow-none">
                  <CardContent className="relative aspect-[3/2] flex items-center justify-center p-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${randomImages[index].url})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-10 text-start p-4 text-white ">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {slide.novel_recTitle}
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
