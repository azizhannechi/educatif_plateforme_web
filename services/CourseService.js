import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Course from "../models/Course";

export const createCourse = async (courseData) => {
  const ref = await addDoc(collection(db, "courses"), courseData);
  return new Course({ id: ref.id, ...courseData });
};

export const getCourses = async () => {
  const querySnapshot = await getDocs(collection(db, "courses"));
  return querySnapshot.docs.map(doc => new Course({ id: doc.id, ...doc.data() }));
};
