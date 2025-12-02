import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import User from "../models/User";

export async function createUser(user) {
  try {
    const userRef = doc(db, "users", user.id);
    await setDoc(userRef, user.toFirestore());
    console.log("User saved:", user.id);
    return true;
  } catch (error) {
    console.error("Error saving user:", error);
    return false;
  }
}

export async function getUser(userId) {
  try {
    const userRef = doc(db, "users", userId);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) return null;

    return new User({
      id: userId,
      ...snapshot.data(),
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}


