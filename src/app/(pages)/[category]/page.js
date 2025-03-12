import CategoryComponents from "@/components/categoryComponents/categoryComponents";

const CategoryPage = async ({ params }) => {
  const { category } = params;
  return <CategoryComponents category={category}/>;
};

export default CategoryPage;
