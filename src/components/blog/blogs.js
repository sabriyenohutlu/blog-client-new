"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, Calendar, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const Blogs = ({ blogListWithLimit, blogListWithPin }) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return (
    <div className="container py-8">
      {/* Featured Stories */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">Öne Çıkan Yazılar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogListWithPin.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.url.urledTitle}-${blog.blog_id}`}
            >
              <Card className="group hover-lift">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={
                        "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3"
                      }
                      alt={blog.blog_title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h2 className="text-xl font-bold mb-1">
                        {blog.blog_title}
                      </h2>

                      <p className="text-sm text-gray-300">
                        {blog.author_name}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      {/* <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {story.readTime}
                      </div> */}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {blog.createdAt.toLocaleString("tr-TR", options)}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {blog.blog_summaryInfo}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {blog.blog_category?.map((category, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted rounded-full text-xs"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Stories */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Son Eklenen Yazılar</h2>
          <Button variant="outline" asChild>
            <Link href="/blog/arsiv">
              Tümünü Gör
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogListWithLimit.map((blog, index) => (
            <Link
              href={`/blog/${blog.url.urledTitle}-${blog.blog_id}`}
              key={index}
            >
              <Card className="group hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {blog.blog_title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {blog.author_name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {blog.readTime || ""}
                        </div>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">
                        {blog.blog_summaryInfo}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="mt-1">
                      <BookOpen className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
