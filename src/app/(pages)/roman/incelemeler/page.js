import { fetchNovelReviews } from "@/app/data/data";
import NovelReviews from "@/components/novel/novelReview/novelReviews";
export const dynamic = "force-dynamic";
const RomanIncelemeleri = async () => {
  const novelReviewsList = await fetchNovelReviews();
 
   return <NovelReviews novelReviewsList={novelReviewsList} />;
};
export default RomanIncelemeleri;
