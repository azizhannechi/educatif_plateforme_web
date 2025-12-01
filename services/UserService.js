import { db } from "../firebase/firebaseConfig.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import User from "../models/User.js";

export const createUser = async (userId, userData) => {
  await setDoc(doc(db, "users", userId), userData);
  return new User({ id: userId, ...userData });
};

export const getUser = async (userId) => {
  const snap = await getDoc(doc(db, "users", userId));
  return snap.exists() ? new User({ id: userId, ...snap.data() }) : null;
};
