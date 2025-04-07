import { db } from "../../firebase";
import { doc, collection, query, limit as limitFn,getDocs, orderBy, getDoc, where } from "firebase/firestore";

export const fetchNovelReviews = async () => {
  const reviewsCollection = query(collection(db, "novelReview"));
  const q = query(reviewsCollection, orderBy('createdAt', 'desc'));
  try {
    const querySnapshot = await getDocs(q);
    
    const novelReviewsList = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id, // doc.id kullanımı için 'id' anahtarı daha açıklayıcı olur
    })).filter((item) => item.status === "completed");
    return novelReviewsList;
  } catch (error) {
    console.log("Error fetching novel reviews:", error);
    return [];
  }
};
export const fetchNovelReviewsWithLimit = async (limit) => {
  try {
    const reviewCol = collection(db, "novelReview"); // Doğrudan koleksiyon referansı
    const q = query(reviewCol, orderBy("createdAt", "desc")); // limit() fonksiyon olarak kullanılmalı
    const querySnapshot = await getDocs(q);

    const novelReviewsListWithLimit = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })).filter((item) => item.status === "completed");

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

export const getThisNews = async ( idArray,idForThisNews, category) => {
  const q = doc(db, category, idForThisNews);
  const qarticle = doc(
    db,
    category,
    idForThisNews,
    "article",
    idForThisNews
  );
  const thisPage = [];
  const thisPageArticle = [];

  await getDoc(q).then((doc) => thisPage.push({ ...doc.data(), doc: doc.id }));
  await getDoc(qarticle).then((doc) => {
    if (doc.exists) {
      thisPageArticle.push(doc.data());
    }
  });
  console.log(thisPage)
  return thisPage,thisPageArticle
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

export const fetchLatestPoetries = async () => {
  const q = query(collection(db, "poetry"), orderBy("createdAt", "desc"),limitFn(3));
  try {
    const querySnapshot = await getDocs(q);
    const latestPoetryList = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })).filter((item) => item.status === "completed");
    return latestPoetryList;
  } catch (error) {
    console.log("Error poetryList / fetcPoetries", error);
    return [];
  }
}

export const fetchNovelRecommendations = async () => {
  const reviewsCollection = query(collection(db, "novelRecommendation"));
  const q = query(reviewsCollection, orderBy('createdAt', 'desc'));
  try {
    const querySnapshot = await getDocs(q);
    
    const novelRecommendationList = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id, // doc.id kullanımı için 'id' anahtarı daha açıklayıcı olur
    })).filter((item) => item.status === "completed");
    return novelRecommendationList;
  } catch (error) {
    console.log("Error fetching novel reviews:", error);
    return [];
  }
};
export const fetchNovelRecommendationsWithLimit = async (limit) => {
  try {
    const recCol = collection(db, "novelRecommendation"); // Doğrudan koleksiyon referansı
    const q = query(recCol, orderBy("createdAt", "desc"), limitFn(limit)); // limit() fonksiyon olarak kullanılmalı
    const querySnapshot = await getDocs(q);

    const novelRecommendationListWithLimit = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })).filter((item) => item.status === "completed"); // status'u "completed" olanları filtrele

    return novelRecommendationListWithLimit;
  } catch (error) {
    console.error("Error fetching novel reviews:", error);
    return [];
  }
};