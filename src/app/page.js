import Home from "@/components/homeComponents/home";
import { fetchNovelRecommendations } from "./data/data";

const HomePage = async () => {
  const novelRecommendationList = await fetchNovelRecommendations();
  return <Home novelRecommendationList={novelRecommendationList} />;
};
export default HomePage;
