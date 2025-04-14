import { fetchNovelReviews } from '@/app/data/data';
import NovelReviewsArchive from '@/components/novel/novelReview/novelReviewsArchive';

 const RomanIncelemelerArsiv = async() => {
  const novelReviewsList = await fetchNovelReviews();
   return (
    <NovelReviewsArchive novelReviewsList={novelReviewsList} />
   )
} 
export default RomanIncelemelerArsiv;