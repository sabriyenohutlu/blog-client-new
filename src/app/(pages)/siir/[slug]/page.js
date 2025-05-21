"use client";
import { fetchPoetry } from "@/app/data/data";
import PoetryDetail from "@/components/poetry/poetryDetail";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SiirDetay = () => {
  const pathname = usePathname();
  const slugStr = pathname.split("/").pop();
  const urlParts = slugStr?.split("-") || [];
  const poetry_id = urlParts[urlParts.length - 1];
  const [poetryData, setPoetryData] = useState(null);
  const [poetryDataArticle, setPoetryDataArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  if (!poetry_id) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (!poetry_id) return;

    const getPoetries = async () => {
      try {
        setLoading(true);
        const { poetryData, poetryDataArticle } = await fetchPoetry(
          String(poetry_id)
        );
        setPoetryData(poetryData);
        setPoetryDataArticle(poetryDataArticle);
      } catch (error) {
        console.error("Poetry fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getPoetries();
  }, [poetry_id]);

  if (loading || !poetryData || !poetryDataArticle) {
    return <div>Yükleniyor...</div>;
  }
  return (
    <PoetryDetail
      poetryData={poetryData}
      poetryDataArticle={poetryDataArticle}
    />
  );
};
export default SiirDetay;
