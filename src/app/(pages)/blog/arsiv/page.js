import { fetchBlogs } from "@/app/data/data";
import BlogArsiv from "@/components/blog/blogArsiv";

const BlogArsivPage = async () => {
  const blogList = await fetchBlogs();
  return <BlogArsiv blogList={blogList} />;
};
export default BlogArsivPage;
