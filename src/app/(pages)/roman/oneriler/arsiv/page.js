import { fetchNovelRecommendations } from "@/app/data/data";
import NovelRecommendationArchive from "@/components/novel/novelRecommendation/novelRecommendationArchive";

 const RomanOnerilerArsiv = async() => {
  const novelRecommendationList = await fetchNovelRecommendations();
   return <NovelRecommendationArchive novelRecommendationList={novelRecommendationList}/>;

}
export default RomanOnerilerArsiv;