import { fetchLatestPoetries } from "@/app/data/data";
import Poetries from "@/components/poetry/poetries";

const Siir = async () => {
  const latestPoetryList = await fetchLatestPoetries();

  return <Poetries latestPoetryList={latestPoetryList}/>;
};
export default Siir;
