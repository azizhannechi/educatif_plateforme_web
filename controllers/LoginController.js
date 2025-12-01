import { login } from "./AuthController";
import { getUser } from "../services/UserService";

const handleLogin = async () => {
  try {
    const userCredential = await login(email, password);
    const user = await getUser(userCredential.user.uid);

    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/student");
    }

  } catch (e) {
    alert(e.message);
  }
};