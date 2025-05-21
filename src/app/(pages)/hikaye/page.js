import Stories from "@/components/story/stories";
import { fetchLatestStories, fetchPinnedStories } from "@/app/data/data";
export const dynamic = "force-dynamic";
const Hikaye = async () => {
   const [ latestStoriesList, storiesListPinned] = await Promise.all([
    fetchLatestStories(),
    fetchPinnedStories()
   ])
   // return (
   //  <Stories latestStoriesList={latestStoriesList} storiesListPinned={storiesListPinned}/>
   // );
   return(<></>)
} 
export default Hikaye;