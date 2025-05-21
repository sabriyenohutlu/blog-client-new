import Home from "@/components/homeComponents/home";
import { fetchNovelRecommendations, fetchNovelReviews } from "./data/data";
export const dynamic = "force-dynamic";
const HomePage = async () => {
  const [novelReviewsList,novelRecommendationList] = await Promise.all([
    fetchNovelReviews(),
    fetchNovelRecommendations()

  ]);
  return <Home novelReviewsList={novelReviewsList} novelRecommendationList={novelRecommendationList} />;
};
export default HomePage;
