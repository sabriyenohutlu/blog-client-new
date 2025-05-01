import { fetchNovelRecommendations } from "@/app/data/data";
import NovelRecommendations from "@/components/novel/novelRecommendation/novelRecommendations";
export const dynamic = "force-dynamic";
const RomanOnerileri = async () => {
  const novelRecommendationsList = await fetchNovelRecommendations();
 return <NovelRecommendations novelRecommendationsList={novelRecommendationsList}/>;

}
export default RomanOnerileri