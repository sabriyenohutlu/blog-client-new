"use client";
import NovelReviewDetail from "@/components/novel/novelReview/novelReviewDetail";
import { fetchNovelReview } from "@/app/data/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const BookReviewPage =  () => {
  const pathname = usePathname();
  const slugStr = pathname.split("/").pop();
  const urlParts = slugStr?.split("-") || [];
  const novel_reviewId = urlParts[urlParts.length - 1];

  const [reviewData, setReviewData] = useState(null);
  const [reviewDataArticle, setReviewDataArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  if (!novel_reviewId) {
    return <div>Loading...</div>;
  }

    useEffect(() => {
      if (!novel_reviewId) return;
  
      const getReviews = async () => {
        try {
          setLoading(true);
          const { reviewData, reviewDataArticle } = await fetchNovelReview(
            String(novel_reviewId)
          );
          setReviewData(reviewData);
          setReviewDataArticle(reviewDataArticle);
        } catch (error) {
          console.error("Review fetch error:", error);
        } finally {
          setLoading(false);
        }
      };
  
      getReviews();
    }, [novel_reviewId]);
  
    if (loading || !reviewData || !reviewDataArticle) {
      return <div>Yükleniyor...</div>;
    }
  

  return (
    <NovelReviewDetail
      reviewData={reviewData}
      reviewDataArticle={reviewDataArticle}
    />
  );
};
export default BookReviewPage;
