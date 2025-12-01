import { auth } from "../firebase/firebaseConfig";
import { createUser } from "../services/UserService";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signup = async (email, password, name, role="student") => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await createUser(userCred.user.uid, {
    email,
    name,
    role,
    createdAt: new Date(),
  });
  return userCred.user;
};

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
