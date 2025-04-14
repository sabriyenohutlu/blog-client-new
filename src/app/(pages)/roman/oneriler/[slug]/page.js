import { fetchNovelRecommendation } from "@/app/data/data";
import NovelRecommendationDetail from "@/components/novel/novelRecommendation/novelRecommendationDetail";
import React from "react";

const RomanOneriDetay = async ({ params }) => {
  const url = String(params.slug).split("-");
  const novel_recId = url[url.length - 1];

  if (!novel_recId) {
    return <div>Loading...</div>;
  }

  const result = await fetchNovelRecommendation(novel_recId);
  const { recData, recDataArticle } = result;

  return (
    <NovelRecommendationDetail
      recData={recData}
      recDataArticle={recDataArticle}
    />
  );
};

export default RomanOneriDetay;
