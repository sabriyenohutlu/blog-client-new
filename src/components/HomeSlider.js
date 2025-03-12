'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  {
    title: "Edebiyatın İzinde",
    description: "Türk edebiyatının en seçkin eserlerini keşfedin",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3",
    category: "Genel",
    link: "/hakkimizda"
  },
  {
    title: "Şiirin Büyülü Dünyası",
    description: "Klasik ve modern Türk şiirinin en güzel örnekleri",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3",
    category: "Şiir",
    link: "/siir/arsiv"
  },
  {
    title: "Roman İncelemeleri",
    description: "Türk romanının başyapıtlarına derinlemesine bakış",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    category: "Roman",
    link: "/roman/incelemeler/arsiv"
  }
]

export default function HomeSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-none overflow-hidden">
                <CardContent className="relative aspect-[21/9] sm:aspect-[16/7] flex items-center justify-center p-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                  </div>
                  <div className="relative z-10 text-white p-8 md:p-12 max-w-3xl ml-4 md:ml-12">
                    <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-sm mb-4">
                      {slide.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
                      {slide.description}
                    </p>
                    <Button 
                      asChild
                      variant="secondary" 
                      size="lg"
                      className="group hover:bg-primary hover:text-white transition-colors"
                    >
                      <Link href={slide.link}>
                        Keşfet
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 hover:scale-110 transition-transform" />
        <CarouselNext className="right-4 md:right-8 hover:scale-110 transition-transform" />
      </Carousel> */}
    </div>
  )
} 