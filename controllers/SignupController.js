import { signup } from "./AuthController";

const handleSignup = async () => {
  try {
    await signup(email, password, name, "student"); 
    alert("Compte créé !");
    navigate("/login");
  } catch (err) {
    alert(err.message);
  }
};