"use client";
import { fetchNovelRecommendation } from "@/app/data/data";
import NovelRecommendationDetail from "@/components/novel/novelRecommendation/novelRecommendationDetail";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const RomanOneriDetay = () => {
  const pathname = usePathname(); // örnek: /roman/inceleme/harika-kitap-12345
  // pathname'den son parçayı almak için:
  const slugStr = pathname.split("/").pop(); // 'harika-kitap-12345' gibi

  const urlParts = slugStr?.split("-") || [];
  const novel_recId = urlParts[urlParts.length - 1];

  const [recData, setRecData] = useState(null);
  const [recDataArticle, setRecDataArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  if (!novel_recId) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    if (!novel_recId) return;

    const getRecommendation = async () => {
      try {
        setLoading(true);
        const { recData, recDataArticle } = await fetchNovelRecommendation(
          String(novel_recId)
        );
        setRecData(recData);
        setRecDataArticle(recDataArticle);
      } catch (error) {
        console.error("Recommendation fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecommendation();
  }, [novel_recId]);

  if (loading || !recData || !recDataArticle) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <NovelRecommendationDetail
      recData={recData}
      recDataArticle={recDataArticle}
    />
  );
};

export default RomanOneriDetay;
