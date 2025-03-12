import NovelReviewDetail from "@/components/novel/novelReview/novelReviewDetail";

 const BookReviewPage = ({params}) => {
  const { novel_reviewId } = params;
  return <NovelReviewDetail novel_reviewId={novel_reviewId} />
}
export default BookReviewPage;