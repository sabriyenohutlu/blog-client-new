import { db } from "../../firebase";
import { doc, collection, query, getDocs } from "firebase/firestore";

export const fetchNovelReviews = async () => {
  const q = query(collection(db, "novelReview"));
  try {
    const querySnapshot = await getDocs(q);
    const novelReviewsList = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id, // doc.id kullanımı için 'id' anahtarı daha açıklayıcı olur
    }));
    return novelReviewsList;
  } catch (error) {
    console.log("Error fetching novel reviews:", error);
    return [];
  }
};
export const fetchCategories = async () => {
  const q = query(collection(db, "categories"));
  try {
    const querySnapshot = await getDocs(q);
    const categoriesList = querySnapshot.docs.map(() => ({
      ...doc.data(),
      id: doc.id,
    }));
    return categoriesList;
  } catch (error) {
    console.log("Error categoriesList / fetchCategories", error);
    return [];
  }
};
