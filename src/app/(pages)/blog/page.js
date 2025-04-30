import { fetchBlogWithLimit } from "@/app/data/data";
import Blogs from "@/components/blog/blogs";

 const BlogPage = async() =>{
  const blogListWithLimit = await fetchBlogWithLimit(4);
  return <Blogs blogListWithLimit={blogListWithLimit}/>
} 
export default BlogPage;