'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ThumbsUp, MessageSquare, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const featuredPoem = {
  title: "Günün Şiiri",
  poem: {
    title: "Sessiz Gemi",
    content: `Artık demir almak günü gelmişse zamandan,
Meçhule giden bir gemi kalkar bu limandan.
Hiç yolcusu yokmuş gibi sessizce alır yol;
Sallanmaz o kalkışta ne mendil ne de bir kol.`,
    poet: "Yahya Kemal Beyatlı",
    year: "1925",
    category: "Lirik Şiir",
    likes: 856,
    comments: 124
  }
};

const popularPoems = [
  {
    title: "Otuz Beş Yaş",
    poet: "Cahit Sıtkı Tarancı",
    excerpt: "Yaş otuz beş! Yolun yarısı eder. Dante gibi ortasındayız ömrün...",
    year: "1946",
    category: "Modern Şiir",
    likes: 734,
    comments: 98
  },
  {
    title: "İstanbul'u Dinliyorum",
    poet: "Orhan Veli Kanık",
    excerpt: "İstanbul'u dinliyorum, gözlerim kapalı; Önce hafiften bir rüzgar esiyor...",
    year: "1947",
    category: "Serbest Şiir",
    likes: 645,
    comments: 86
  },
  {
    title: "Üç Şehitler Destanı",
    poet: "Fazıl Hüsnü Dağlarca",
    excerpt: "Bir değil, beş değil, bin değil, Şehitler yurdu bu cennet vatan...",
    year: "1949",
    category: "Destan",
    likes: 567,
    comments: 74
  }
];

export default function FeaturedPoems() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Günün Şiiri */}
        <Card className="lg:col-span-2 group hover-lift">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>{featuredPoem.title}</span>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/siir/arsiv" className="text-sm group">
                  Tüm Şiirler
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {featuredPoem.poem.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span>{featuredPoem.poem.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPoem.poem.year}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-primary transition-colors" />
                <p className="text-lg text-muted-foreground italic whitespace-pre-line pl-6">
                  {featuredPoem.poem.content}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-medium">{featuredPoem.poem.poet}</span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    {featuredPoem.poem.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {featuredPoem.poem.comments}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Popüler Şiirler */}
        <Card className="hover-lift">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-primary" />
              Popüler Şiirler
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {popularPoems.map((poem, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="space-y-2">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {poem.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{poem.category}</span>
                      <span>•</span>
                      <span>{poem.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {poem.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                      <span>{poem.poet}</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          {poem.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {poem.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index !== popularPoems.length - 1 && (
                    <hr className="my-4 border-border" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 