import NovelReviewDetail from "@/components/novel/novelReview/novelReviewDetail";
import { fetchNovelReview } from "@/app/data/data";
 const BookReviewPage = async ({params}) => {
  const { slug } = await params;
 
  const url = slug.split('-');
  const novel_reviewId = url[url.length - 1];
  
   if (!novel_reviewId) {
    return <div>Loading...</div>;  // Ya da bir hata mesajı gösterebilirsiniz
  } 
  
  const reviewData = await fetchNovelReview(novel_reviewId);

  return <NovelReviewDetail reviewData={reviewData} />
}
export default BookReviewPage;