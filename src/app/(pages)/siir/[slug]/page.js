import PoetryDetail from "@/components/poetry/poetryDetail";

const SiirDetay = async ({ params }) => {
  const url = String(params.slug).split("-");
  const poetry_id = url[url.length - 1];

  if (!poetry_id) {
    return <div>Loading...</div>;
  }

  const result = await fetchNovelRecommendation(poetry_id);
  const { poetryData, poetryDataArticle } = result;
   return (
     <PoetryDetail
       poetryData={poetryData}
       poetryDataArticle={poetryDataArticle}
     />
   );

};
export default SiirDetay;
