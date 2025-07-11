"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Quote,
  Bookmark,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import FeaturedPoems from "@/components/FeaturedPoems";
import FeaturedBooks from "@/components/FeaturedBooks";
import HomeMainSlider from "./HomeMainSlider";
import HomeDailyWordSlider from "./homeDailyWordSlider";
import HomeRevSlider from "./homeRevSlider";
import { useEffect, useState } from "react";
import { fetchNovelReviewPinned } from "@/app/data/data";

const Home = ({ novelRecommendationList, novelReviewsList }) => {
  const [pinnedReview, setPinnedReview] = useState(null);
  useEffect(() => {
    const getNovelReviewPinned = async () => {
      try {
        const novelReviewsPinnedList = await fetchNovelReviewPinned();
        setPinnedReview(novelReviewsPinnedList);
      } catch (error) {
        console.error("Novel review pin error:", error);
      }
      
    };
    getNovelReviewPinned()
  }, []);
 
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] ">
        <div className="container flex py-2 px-0 w-full">
          <div className=" w-4/6 ">
            <HomeMainSlider novelRecommendationList={novelRecommendationList} />
          </div>
          <div className="flex flex-col h-full  w-2/6 ">
            <div className="w-full ">
              <HomeDailyWordSlider />
            </div>
            <div className="w-full ">
              <HomeRevSlider novelReviewsList={novelReviewsList} />
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <QuoteSlider />
      </section> */}

      {/* Featured Categories */}
      <section className="py-16 ">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Roman İncelemeleri",
                description: "Klasik ve modern romanların detaylı analizleri",
                icon: BookOpen,
                link: "/roman/incelemeler",
              },
              {
                title: "Roman Önerileri",
                description: "Okuma listeniz için en iyi roman önerileri",
                icon: BookOpen,
                link: "/roman/oneriler",
              },
              {
                title: "Popüler Şiirler",
                description: "En çok okunan ve beğenilen şiirler",
                icon: Quote,
                link: "/siir",
              },
              {
                title: "Blog Yazıları",
                description: "En çok okunan ve beğenilen yazılar",
                icon: TrendingUp,
                link: "/blog",
              },
            ].map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="p-6  rounded-lg border hover-lift hover-glow">
                  <category.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Edebi yolculuğunuza başlayın
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ücretsiz üye olun ve tüm içeriklerimize sınırsız erişim kazanın.
            Yorumlar yapın, koleksiyonlar oluşturun ve edebi tartışmalara
            katılın.
          </p>
            <Link href="/register" className="group">
              Hemen Üye Olun
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Roman Kategorileri</h2>
            <p className="text-muted-foreground">
              Keşfetmeniz için hazırladığımız özel bölümler
            </p>
          </div>
          <FeaturedBooks pinnedReview={pinnedReview}/>
        </div>
      </section>

      {/* Featured Poems */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Şiir Köşesi</h2>
            <p className="text-muted-foreground">
              Türk ve dünya şiirinden seçmeler
            </p>
          </div>
          <FeaturedPoems />
        </div>
      </section>

      {/* Featured Books */}

      {/* CTA Section */}
    </div>
  );
};

export default Home;
