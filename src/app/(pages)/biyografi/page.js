import {
  fetchBiographiesWithLimit,
  fetchPinnedBiographies,
} from "@/app/data/data";
import Biographies from "@/components/biography/biographies";
export const dynamic = "force-dynamic";
const Biyografi = async () => {
  const [biographyListPinned, biographyListWithLimit] = await Promise.all([
    fetchPinnedBiographies(),
    fetchBiographiesWithLimit(),
  ]);

  return <Biographies biographyListPinned={biographyListPinned} biographyListWithLimit={biographyListWithLimit}/>;
};
export default Biyografi;
