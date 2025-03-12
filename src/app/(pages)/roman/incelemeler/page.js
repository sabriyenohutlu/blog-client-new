import { fetchNovelReviewsWithLimit } from "@/app/data/data";
import NovelReviews from "@/components/novel/novelReview/novelReviews";
const RomanIncelemeleri = async () => {
  const novelReviewsWithLimit = await fetchNovelReviewsWithLimit(4);

  return <NovelReviews novelReviewsWithLimit={novelReviewsWithLimit} />;
};
export default RomanIncelemeleri;
