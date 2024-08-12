import { collection, getDocs } from "firebase/firestore";
import { db } from "../Data/firebase";

export const getCourses = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "courses"));
    return querySnapshot.docs.map((doc) => ({ids: doc.id, ...doc.data()}));
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};
