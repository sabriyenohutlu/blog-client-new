import { db } from "../../firebase";
import { doc, collection, query, limit as limitFn,getDocs, orderBy, getDoc } from "firebase/firestore";

export const fetchNovelReviews = async () => {
  const reviewsCollection = query(collection(db, "novelReview"));
  const q = query(reviewsCollection, orderBy('createdAt', 'desc'));
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
export const fetchNovelReviewsWithLimit = async (limit) => {
  try {
    const reviewCol = collection(db, "novelReview"); // Doğrudan koleksiyon referansı
    const q = query(reviewCol, orderBy("createdAt", "desc"), limitFn(limit)); // limit() fonksiyon olarak kullanılmalı
    const querySnapshot = await getDocs(q);

    const novelReviewsListWithLimit = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return novelReviewsListWithLimit;
  } catch (error) {
    console.error("Error fetching novel reviews:", error);
    return [];
  }
};
export const fetchNovelReview = async (novel_reviewId) => {
  try {
    const docRef = doc(db, "novelReview", novel_reviewId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching novel review:", error);
    return null;
  }
}
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
