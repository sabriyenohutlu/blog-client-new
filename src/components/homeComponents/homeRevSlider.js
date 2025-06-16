import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { getRandomImage } from "@/lib/randomImage";
import Link from "next/link";
const HomeRevSlider = ({ novelReviewsList }) => {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const generatedImages = novelReviewsList.map(() => getRandomImage());
    setRandomImages(generatedImages);
  }, [novelReviewsList]);

  // Wait until images are loaded on the client
  if (randomImages.length === 0) return null;
  return (
    <div className="w-full max-w-5xl mx-auto  h-[298px]">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {novelReviewsList.map((slide, index) => (
            <CarouselItem key={index}>
              <Link
                href={`/roman/incelemeler/${slide.url.urledTitle}-${slide.novel_reviewId}`}
              >
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
                      <h2 className="text-sm md:text-lg font-bold mb-4">
                        {slide.novel_reviewTitle}
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" /> */}
      </Carousel>
    </div>
  );
};

export default HomeRevSlider;
