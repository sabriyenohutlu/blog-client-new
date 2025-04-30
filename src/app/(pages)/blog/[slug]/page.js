"use client"
import { fetchBlog } from '@/app/data/data';
import BlogDetail from '@/components/blog/blogDetail'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const BlogDetailPage = () => {
  const pathname = usePathname();
    const slugStr = pathname.split("/").pop();
    const urlParts = slugStr?.split("-") || [];
    const blog_id = urlParts[urlParts.length - 1];

   const [blogData, setBlogData] = React.useState(null);
   const [blogDataArticle, setBlogDataArticle] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

  if (!blog_id) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (!blog_id) return;

    const getBlogs = async () => {
      try {
        setLoading(true);
        const { blogData, blogDataArticle } = await fetchBlog(
          String(blog_id)
        );
        setBlogData(blogData);
        setBlogDataArticle(blogDataArticle);
      } catch (error) {
        console.error("Blog fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, [blog_id]);

  if (loading || !blogData || !blogDataArticle) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <BlogDetail blogData={blogData} blogDataArticle={blogDataArticle}/>
  )
}

export default BlogDetailPage