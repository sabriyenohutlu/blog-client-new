import { db } from "../../firebase";
import {
  doc,
  collection,
  query,
  limit as limitFn,
  getDocs,
  orderBy,
  getDoc,
  where,
} from "firebase/firestore";

export const fetchNovelReviews = async () => {
  const reviewsCollection = query(collection(db, "novelReview"));
  const q = query(reviewsCollection, orderBy("createdAt", "desc"));
  try {
    const querySnapshot = await getDocs(q);

    const novelReviewsList = querySnapshot.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id, // doc.id kullanımı için 'id' anahtarı daha açıklayıcı olur,
        createdAt: doc.createdAt?.toDate(),
        novel_recordedDate: doc.novel_recordedDate?.toDate(),
        updatedAt: doc.updatedAt?.toDate(),
      }))
      .filter((item) => item.status === "completed");
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

    const novelReviewsListWithLimit = querySnapshot.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.createdAt?.toDate(),
        novel_recordedDate: doc.novel_recordedDate?.toDate(),
        updatedAt: doc.updatedAt?.toDate(),
      }))
      .filter((item) => item.status === "completed");

    return novelReviewsListWithLimit;
  } catch (error) {
    console.error("Error fetching novel reviews:", error);
    return [];
  }
};
export const fetchNovelReview = async (novel_reviewId) => {
  try {
    const q = doc(db, "novelReview", novel_reviewId);
    const qarticle = doc(
      db,
      "novelReview",
      novel_reviewId,
      "reviewBody",
      novel_reviewId
    );
    let reviewData = null;
    let reviewDataArticle = null;

    const docSnap = await getDoc(q);
    if (docSnap.exists()) {
      reviewData = {
        ...docSnap.data(),
        doc: docSnap.id,
        createdAt: docSnap.createdAt?.toDate(),
        novel_recordedDate: docSnap.novel_recordedDate?.toDate(),
        updatedAt: docSnap.updatedAt?.toDate(),
      };
    }

    const articleSnap = await getDoc(qarticle);
    if (articleSnap.exists()) {
      reviewDataArticle = articleSnap.data();
    }
    return { reviewData, reviewDataArticle };
  } catch (error) {
    console.error("Error fetching novel review detail:", error);
    return { reviewData: [], reviewDataArticle: [] };
  }
};

export const fetchCategories = async () => {
  const q = query(collection(db, "categories"));
  try {
    const querySnapshot = await getDocs(q);
    const categoriesList = querySnapshot.docs.map(() => ({
      ...doc.data(),
      id: doc.id,
      created_date: doc.created_date?.toDate(),
      updated_date: doc.updated_date?.toDate(),
    }));
    return categoriesList;
  } catch (error) {
    console.log("Error categoriesList / fetchCategories", error);
    return [];
  }
};

export const fetchPoetries = async () => {
  const q = query(collection(db, "poetry"),orderBy("createdAt", "desc"));
  try {
    const querySnapshot = await getDocs(q);
    const poetriesList = querySnapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        id: doc.id,
        createdAt: data.createdAt?.toDate(),
        poetry_recordedDate: data.poetry_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      }
    
    }).filter((item) => item.status === "completed");
    return poetriesList;
  } catch (error) {
    console.log("Error poetriesList / fetchPoetries", error);
    return [];
  }
};

export const fetchPoetry = async (poetry_id) => {
  try {
    const q = doc(db, "poetry", poetry_id);
    const qarticle = doc(db, "poetry", poetry_id, "poetryBody", poetry_id);
    let poetryData = null;
    let poetryDataArticle = null;

    const docSnap = await getDoc(q);
    if (docSnap.exists()) {
      const data = docSnap.data();
      poetryData = {
        ...data,
        doc: docSnap.id,
        createdAt: data.createdAt?.toDate(),
        poetry_recordedDate: data.poetry_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      };
    }

    const articleSnap = await getDoc(qarticle);
    if (articleSnap.exists()) {
      poetryDataArticle = articleSnap.data();
    }
    return { poetryData, poetryDataArticle };
  } catch (error) {
    console.error("Error fetching novel review detail:", error);
    return { poetryData: [], poetryDataArticle: [] };
  }
};

export const fetchPinnedPoetryList = async () => {
  const q = query(collection(db, "poetry"));
  try {
    const querySnapshot = await getDocs(q);
    const pinnedPoetryList = querySnapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        id: doc.id,
        createdAt: data.createdAt?.toDate(),
        poetry_recordedDate: data.poetry_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      }
    
    }).filter((item) => item.status === 'completed' && item.pinned === true); // status'u "completed" olanları filtrele
    return pinnedPoetryList;
  } catch (error) {
    console.log("Error poetryList / fetcPoetries", error);
    return [];
  }
}

export const fetchLatestPoetries = async () => {
  const q = query(
    collection(db, "poetry"),
    orderBy("createdAt", "desc"),
    limitFn(3)
  );
  try {
    const querySnapshot = await getDocs(q);
    const latestPoetryList = querySnapshot.docs
      .map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          createdAt: data.createdAt?.toDate(),
          poetry_recordedDate: data.poetry_recordedDate?.toDate(),
          updatedAt: data.updatedAt?.toDate(),
        }
   
      })
      .filter((item) => item.status === "completed");
      console.log("latestPoetryList", latestPoetryList);
    return latestPoetryList;
  } catch (error) {
    console.log("Error latestPoetryList / fetchLatestPoetries", error);
    return [];
  }
};

export const fetchLatestStories = async () => {
  const q = query(
    collection(db, "story"),
    orderBy("createdAt", "desc"),
    limitFn(3)
  );
  try {
    const querySnapshot = await getDocs(q);
    const latestStoriesList = querySnapshot.docs
      .map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          createdAt: data.createdAt?.toDate(),
          poetry_recordedDate: data.poetry_recordedDate?.toDate(),
          updatedAt: data.updatedAt?.toDate(),
        }
   
      })
      .filter((item) => item.status === "completed");
      console.log("latestPoetryList", latestStoriesList);
    return latestStoriesList;
  } catch (error) {
    console.log("Error poetryList / fetcPoetries", error);
    return [];
  }
};

export const fetchStory = async (story_id) => {
  try {
    const q = doc(db, "story", story_id);
    const qarticle = doc(db, "story", story_id, "storyBody", story_id);
    let storyData = null;
    let storyDataArticle = null;

    const docSnap = await getDoc(q);
    if (docSnap.exists()) {
      const data = docSnap.data();
      storyData = {
        ...data,
        doc: docSnap.id,
        story_recordedDate: data.story_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        createdAt: data.createdAt?.toDate(),
      };
    }

    const articleSnap = await getDoc(qarticle);
    if (articleSnap.exists()) {
      storyDataArticle = articleSnap.data();
    }
    return { storyData, storyDataArticle };
  } catch (error) {
    console.error("Error fetching novel review detail:", error);
    return { storyData: [], storyDataArticle: [] };
  }
};

export const fetchStories = async () => {
  const q = query(collection(db, "story"),orderBy("createdAt", "desc"));
  try {
    const querySnapshot = await getDocs(q);
    const storiesList = querySnapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        id: doc.id,
        story_recordedDate: data.story_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        createdAt: data.createdAt?.toDate(),
      }
      
    });
    return storiesList;
  } catch (error) {
    console.log("Error storiesList / fetchStories", error);
    return [];
  }
};

export const fetchPinnedStories = async () => {
  const q = query(collection(db, "story"));
  try {
    const querySnapshot = await getDocs(q);
    const storiesListPinned = querySnapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        id: doc.id,
        story_recordedDate: data.story_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        createdAt: data.createdAt?.toDate(),
      }
      
    }).filter((item) => item.status === 'completed' && item.pinned === true); // status'u "completed" olanları filtrele
    return storiesListPinned;
  } catch (error) {
    console.log("Error storiesList / fetchStories", error);
    return [];
  }
};

export const fetchNovelRecommendations = async () => {
  const reviewsCollection = query(collection(db, "novelRecommendation"));
  const q = query(reviewsCollection, orderBy("createdAt", "desc"));
  try {
    const querySnapshot = await getDocs(q);

    const novelRecommendationList = querySnapshot.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id, // doc.id kullanımı için 'id' anahtarı daha açıklayıcı olur
        novel_recordedDate: doc.novel_recordedDate?.toDate(),
        updatedAt: doc.updatedAt?.toDate(),
        createdAt: doc.createdAt?.toDate(),
      }))
      .filter((item) => item.status === "completed");
    return novelRecommendationList;
  } catch (error) {
    console.log("Error fetching novel reviews:", error);
    return [];
  }
};

export const fetchNovelRecommendation = async (novel_recId) => {
  try {
    const q = doc(db, "novelRecommendation", novel_recId);
    const qarticle = doc(
      db,
      "novelRecommendation",
      novel_recId,
      "recBody",
      novel_recId
    );
    let recData = null;
    let recDataArticle = null;

    const docSnap = await getDoc(q);
    if (docSnap.exists()) {
      recData = {
        ...docSnap.data(),
        doc: docSnap.id,
        novel_recordedDate: docSnap.novel_recordedDate?.toDate(),
        updatedAt: docSnap.updatedAt?.toDate(),
        createdAt: docSnap.createdAt?.toDate(),
      };
    }

    const articleSnap = await getDoc(qarticle);
    if (articleSnap.exists()) {
      recDataArticle = articleSnap.data();
    }
    return { recData, recDataArticle };
  } catch (error) {
    console.error("Error fetching novel review detail:", error);
    return { recData: [], recDataArticle: [] };
  }
};

export const fetchNovelRecommendationsWithLimit = async (limit) => {
  try {
    const recCol = collection(db, "novelRecommendation"); // Doğrudan koleksiyon referansı
    const q = query(recCol, orderBy("createdAt", "desc"), limitFn(limit)); // limit() fonksiyon olarak kullanılmalı
    const querySnapshot = await getDocs(q);

    const novelRecommendationListWithLimit = querySnapshot.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
        novel_recordedDate: doc.novel_recordedDate?.toDate(),
        updatedAt: doc.updatedAt?.toDate(),
        createdAt: doc.createdAt?.toDate(),
      }))
      .filter((item) => item.status === "completed"); // status'u "completed" olanları filtrele

    return novelRecommendationListWithLimit;
  } catch (error) {
    console.error("Error fetching novel reviews:", error);
    return [];
  }
};

export const fetchBlogs = async () => {
  const blogCollection = query(collection(db, "blog"));
  const q = query(blogCollection, orderBy("createdAt", "desc"));

  try {
    const querySnapshot = await getDocs(q);

    const blogList = querySnapshot.docs
    .map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        blog_recordedDate: data.blog_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        createdAt: data.createdAt?.toDate(),
      };
    })
      .filter((item) => (item.status = "completed"));
    return blogList;
  } catch (error) {
    console.log("Error fetching blog:", error);
    return [];
  }
};

export const fetchBlogWithLimit = async (limit) => {
  try {
    const blogCol = collection(db, "blog"); // Doğrudan koleksiyon referansı
    const q = query(blogCol, orderBy("createdAt", "desc"), limitFn(limit)); // limit() fonksiyon olarak kullanılmalı
    const querySnapshot = await getDocs(q);

    const blogListWithLimit = querySnapshot.docs
    .map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        blog_recordedDate: data.blog_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        createdAt: data.createdAt?.toDate(),
      };
    })
      .filter((item) => item.status === "completed"&& item.pinned === false); // status'u "completed" olanları filtrele
    return blogListWithLimit;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return [];
  }
};
export const fetchPinnedBlogs = async () => {
  try {
    const blogCol = collection(db, "blog"); // Doğrudan koleksiyon referansı
    const q = query(blogCol, orderBy("createdAt", "desc")); 
    const querySnapshot = await getDocs(q);

    const blogListWithPin = querySnapshot.docs
    .map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        blog_recordedDate: data.blog_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        createdAt: data.createdAt?.toDate(),
      };
    })
      .filter((item) => item.status === 'completed' && item.pinned === true); // status'u "completed" olanları filtrele
       return blogListWithPin;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return [];
  }
}

export const fetchBlog = async (blog_id) => {
  try {
    const q = doc(db, "blog", blog_id);
    const qarticle = doc(
      db,
      "blog",
      blog_id,
      "blogBody",
      blog_id
    );
    let blogData = null;
    let blogDataArticle = null;

    const docSnap = await getDoc(q);
    if (docSnap.exists()) {
      const data = docSnap.data();

      blogData = {
        ...data,
        doc: docSnap.id,
        blog_recordedDate: data.blog_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        createdAt: data.createdAt?.toDate(),
      };
    }

    const articleSnap = await getDoc(qarticle);
    if (articleSnap.exists()) {
      blogDataArticle = articleSnap.data();
    }
    return { blogData, blogDataArticle };
  } catch (error) {
    console.error("Error fetching novel review detail:", error);
    return { blogData: [], blogDataArticle: [] };
  }
}

export const fetchDailyWords = async () => {
  const q = query(collection(db, "dailyWord"), orderBy("createdAt", "desc"));
  try {
    const querySnapshot = await getDocs(q);
    const dailyWordsList = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        createdAt: data.createdAt?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      }
    }).filter((item) => item.status === "completed");
    return dailyWordsList;
  } catch (error) {
    console.log("Error fetching daily words:", error);
    return [];
  }
}

export const fetchBiography = async (biography_id) => {
  try {
    const q = doc(db, "biography", biography_id);
    const qarticle = doc(
      db,
      "biography",
      biography_id,
      "bioBody",
      biography_id
    );
    let biographyData = null;
    let biographyDataArticle = null;

    const docSnap = await getDoc(q);
    if (docSnap.exists()) {
      const data = docSnap.data();
      biographyData = {
        ...data,
        doc: docSnap.id,
        createdAt: data.createdAt?.toDate(),
        biography_recordedDate: data.biography_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      };
    }

    const articleSnap = await getDoc(qarticle);
    if (articleSnap.exists()) {
      biographyDataArticle = articleSnap.data();
    }
    return { biographyData, biographyDataArticle };
  } catch (error) {
    console.error("Error fetching novel review detail:", error);
    return { biographyData: [], biographyDataArticle: [] };
  }
}
export const fetchBiographies = async () => {
  const q = query(collection(db, "biography"), orderBy("createdAt", "desc"));
  try {
    const querySnapshot = await getDocs(q);
    const biographyList = querySnapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        id: doc.id,
        createdAt: data.createdAt?.toDate(),
        biography_recordedDate: data.biography_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      }
    
    }).filter((item) => item.status === "completed");
    return biographyList;
  } catch (error) {
    console.log("Error biographyList / fetchBiographies", error);
    return [];
  }

}
export const fetchBiographiesWithLimit = async () => {
  try {
    const biographyCol = collection(db, "biography"); // Doğrudan koleksiyon referansı
    const q = query(biographyCol, orderBy("createdAt", "desc"), limitFn(3)); // limit() fonksiyon olarak kullanılmalı
    const querySnapshot = await getDocs(q);

    const biographyListWithLimit = querySnapshot.docs
      .map((doc) => {
        const data = doc.data()
        return {
          ...data,
          id: doc.id,
          createdAt: data.createdAt?.toDate(),
          biography_recordedDate: data.biography_recordedDate?.toDate(),
          updatedAt: data.updatedAt?.toDate(),
        }
    
      })
      .filter((item) => item.status === "completed"); // status'u "completed" olanları filtrele

    return biographyListWithLimit;
  } catch (error) {
    console.error("Error fetching biography:", error);
    return [];
  }
}
export const fetchPinnedBiographies = async () => {
  const q = query(collection(db, "biography"));
  try {
    const querySnapshot = await getDocs(q);
    const biographyListPinned = querySnapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        id: doc.id,
        createdAt: data.createdAt?.toDate(),
        biography_recordedDate: data.biography_recordedDate?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      }
    
    }).filter((item) => item.status === 'completed' && item.pinned === true); // status'u "completed" olanları filtrele
    return biographyListPinned;
  } catch (error) {
    console.log("Error biographyList / fetchBiographies", error);
    return [];
  } 
}