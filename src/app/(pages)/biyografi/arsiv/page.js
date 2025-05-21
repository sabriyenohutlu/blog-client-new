import { fetchBiographies } from "@/app/data/data";
import BiographyArchive from "@/components/biography/biographyArchive";
export const dynamic = "force-dynamic";
 const BiyografiArsiv = async () => {
  const biographyList = await fetchBiographies();
   return (
     <BiographyArchive biographyList={biographyList}/>
   );

} 
export default BiyografiArsiv;