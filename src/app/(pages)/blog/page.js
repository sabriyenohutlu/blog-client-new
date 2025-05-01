import { fetchBlogWithLimit, fetchPinnedBlogs } from "@/app/data/data";
import Blogs from "@/components/blog/blogs";
export const dynamic = "force-dynamic";
 const BlogPage = async() =>{
  const blogListWithLimit = await fetchBlogWithLimit(4);
  const blogListWithPin = await fetchPinnedBlogs();
  return <Blogs blogListWithLimit={blogListWithLimit} blogListWithPin={blogListWithPin}/>
} 
export default BlogPage;