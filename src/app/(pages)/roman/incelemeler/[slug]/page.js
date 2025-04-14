import NovelReviewDetail from "@/components/novel/novelReview/novelReviewDetail";
import { fetchNovelReview } from "@/app/data/data";
 const BookReviewPage = async ({params}) => {
  const url = String(params.slug).split('-');
  const novel_reviewId = url[url.length - 1];
  
   if (!novel_reviewId) {
    return <div>Loading...</div>;  
  } 

  const result = await fetchNovelReview(novel_reviewId);
  const { reviewData, reviewDataArticle } = result;
   return <NovelReviewDetail reviewData={reviewData} reviewDataArticle={reviewDataArticle}/>

}
export default BookReviewPage;