"use client"

import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel provider')
  }
  return context
}

export function Carousel({ opts = {}, plugins, className, children, ...props }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...opts,
    loop: true
  }, plugins)

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((emblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const value = React.useMemo(
    () => ({
      emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
    }),
    [emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext]
  )

  return (
    <CarouselContext.Provider value={value}>
      <div className="relative" {...props}>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">{children}</div>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({ className, ...props }) {
  return <div className="flex" {...props} />
}

export function CarouselItem({ className, ...props }) {
  return <div className="min-w-0 flex-[0_0_100%]" {...props} />
}

export function CarouselPrevious({ className, ...props }) {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

export function CarouselNext({ className, ...props }) {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
} 