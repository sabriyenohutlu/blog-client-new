import Home from "@/components/homeComponents/home";
import { fetchNovelRecommendations } from "./data/data";
export const dynamic = "force-dynamic";
const HomePage = async () => {
  const novelRecommendationList = await fetchNovelRecommendations();
  return <Home novelRecommendationList={novelRecommendationList} />;
};
export default HomePage;
