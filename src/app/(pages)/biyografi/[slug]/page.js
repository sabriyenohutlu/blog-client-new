"use client"
import BiographyDetail from '@/components/biography/biographyDetail'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const BiyografiDetay = () => {
  const pathname = usePathname();
      const slugStr = pathname.split("/").pop();
      const urlParts = slugStr?.split("-") || [];
      const biography_id = urlParts[urlParts.length - 1];

      const [biographyData, setBiographyData] = useState(null);
      const [biographyDataArticle, setBiographyDataArticle] = useState(null);

      const [loading, setLoading] = useState(true);
      if(!biography_id){
        return <div>Loading...</div>;
      }

      useEffect(() => {
        if (!biography_id) return;
        const getBiographies = async () => {
          try {
            setLoading(true);
            const { biographyData, biographyDataArticle } = await fetchBiography(
              String(biography_id)
            );
            setBiographyData(biographyData);
            setBiographyDataArticle(biographyDataArticle);
          } catch (error) {
            console.error("Biography fetch error:", error);
          } finally {
            setLoading(false);
          }
        };
        getBiographies();

      },[biography_id]);
      if (loading || !biographyData || !biographyDataArticle) {
        return <div>Yükleniyor...</div>;
      }
  return (
     <BiographyDetail biographyData={biographyData} biographyDataArticle={biographyDataArticle}/>
   )

}

export default BiyografiDetay