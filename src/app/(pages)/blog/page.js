import { fetchBlogWithLimit, fetchPinnedBlogs } from "@/app/data/data";
import Blogs from "@/components/blog/blogs";
export const dynamic = "force-dynamic";
 const BlogPage = async() =>{
  const [blogListWithLimit, blogListWithPin] = await Promise.all([ // aynı anda iki veri çekiyor
    fetchBlogWithLimit(2), 
    fetchPinnedBlogs(), 
  ]);
  return <Blogs blogListWithLimit={blogListWithLimit} blogListWithPin={blogListWithPin}/>
} 
export default BlogPage;