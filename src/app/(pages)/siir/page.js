import { fetchLatestPoetries, fetchPinnedPoetryList } from "@/app/data/data";
import Poetries from "@/components/poetry/poetries";
export const dynamic = "force-dynamic";
const PoemsPage = async () => {
  const [latestPoetryList, pinnedPoetryList] = await Promise.all([
    fetchLatestPoetries(),
    fetchPinnedPoetryList(),
  ]);

  return (
    <Poetries
      latestPoetryList={latestPoetryList}
      pinnedPoetryList={pinnedPoetryList}
    />
  );
};
export default PoemsPage;
