import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, MessageSquare, ThumbsUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
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

const HomeSecSlider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto  h-[298px]">
     <Card className="lg:col-span-2 group hover-lift">
          <CardHeader className="pb-4">
            <span>header</span>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">
                  {featuredPoem.poem.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span>{featuredPoem.poem.category}</span>
                  {/* <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPoem.poem.year}
                  </div> */}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-primary transition-colors" />
                <p className="text-sm text-muted-foreground italic whitespace-pre-line pl-6">
                  {featuredPoem.poem.content}
                </p>
              </div>

              {/* <div className="flex items-center justify-between pt-4 border-t border-border">
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
              </div> */}
            </div>
          </CardContent>
        </Card>
    </div>
  );
};

export default HomeSecSlider;
