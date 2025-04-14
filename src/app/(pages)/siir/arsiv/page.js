import { fetchPoetries } from "@/app/data/data";
import PoetryArchive from "@/components/poetry/poetryArchive";

const SiirArsiv = async () => {
  const poetriesList = await fetchPoetries();
   return (
     <PoetryArchive poetriesList={poetriesList}/>
   );

} 
export default SiirArsiv;