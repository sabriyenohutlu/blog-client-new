'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";

const quotes = [
  {
    text: "Yaşamak şakaya gelmez, büyük bir ciddiyetle yaşayacaksın bir sincap gibi mesela.",
    author: "Nazım Hikmet",
    work: "Yaşamaya Dair",
    year: "1947",
    category: "Şiir"
  },
  {
    text: "Hayatta en hakiki mürşit ilimdir, fendir.",
    author: "Mustafa Kemal Atatürk",
    work: "Nutuk",
    year: "1927",
    category: "Söylev"
  },
  {
    text: "Her insan kendi hayatının romancısıdır.",
    author: "Sabahattin Ali",
    work: "Kürk Mantolu Madonna",
    year: "1943",
    category: "Roman"
  },
  {
    text: "Dünyayı güzellik kurtaracak, bir insanı sevmekle başlayacak her şey.",
    author: "Sezai Karakoç",
    work: "Monna Rosa",
    year: "1952",
    category: "Şiir"
  },
  {
    text: "Yaşadığın yeri cennet yapamadığın sürece, kaçtığın her yer cehennemdir.",
    author: "Mevlana",
    work: "Mesnevi",
    year: "1273",
    category: "Tasavvuf"
  },
  {
    text: "Kitaplar, yaşanmamış hayatları yaşamanın en güzel yoludur.",
    author: "Ahmet Hamdi Tanpınar",
    work: "Huzur",
    year: "1949",
    category: "Roman"
  }
];

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Günün Sözleri</h2>
        <p className="text-muted-foreground">Edebiyatın en etkileyici alıntıları</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Carousel 
          className="relative"
          opts={{ loop: true }}
          setApi={(api) => {
            api?.on('select', () => {
              setCurrentIndex(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {quotes.map((quote, index) => (
              <CarouselItem key={index}>
                <Card className="border-none bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center p-8 md:p-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <blockquote 
                      className={cn(
                        "text-xl md:text-2xl lg:text-3xl font-medium mb-8 leading-relaxed",
                        "transition-all duration-500 hover:scale-[1.02]"
                      )}
                    >
                      "{quote.text}"
                    </blockquote>
                    <footer className="space-y-3">
                      <cite className="not-italic">
                        <span className="font-semibold text-lg block">
                          {quote.author}
                        </span>
                        <span className="text-primary/80 font-medium">
                          {quote.work}
                        </span>
                      </cite>
                      <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                        <span>{quote.year}</span>
                        <span>•</span>
                        <span>{quote.category}</span>
                      </div>
                    </footer>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 hover:scale-110 transition-transform" />
          <CarouselNext className="right-2 md:-right-12 hover:scale-110 transition-transform" />
        </Carousel>

        <div className="flex justify-center mt-8 gap-6 items-center">
          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "w-6 bg-primary" 
                    : "bg-primary/20 hover:bg-primary/40"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? "Otomatik Geçişi Durdur" : "Otomatik Geçişi Başlat"}
          </button>
        </div>
      </div>
    </div>
  );
} 