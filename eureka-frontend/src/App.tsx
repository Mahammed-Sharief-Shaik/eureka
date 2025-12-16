import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Signup from "./pages/Signup.tsx";
import ChatUi from "./pages/ChatUi.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoutes.tsx";
import { useEffect } from "react";
import { isTokenExpired } from "./utils/auth.ts";
import { toast } from "sonner";
import useStoreData from "./store/store.ts";

const App = () => {
  const logoutUser = useStoreData((state) => state.logoutUser);
  const setIsLoggedIn = useStoreData((state) => state.setIsLoggedIn);
  const setUserName = useStoreData((state) => state.setUserName);
  const setUserId = useStoreData((state) => state.setUserId);
  const setMail = useStoreData((state) => state.setMail);
  const loggedInRecently = useStoreData(state => state.loggedInRecently);

  useEffect(() => {
    const checkLogged = () => {
      if (isTokenExpired() && !loggedInRecently ) {
        toast.warning("Session Expired!", {
          className: "font1-epundu tracking-wider",
        });
        logoutUser();
        return <Navigate to="/" replace />;
      } else {
        setIsLoggedIn(true);
        const { id, email, name } = JSON.parse(localStorage.getItem("user")!);
        setUserName(name);
        setUserId(id);
        setMail(email);
      }
    };

    checkLogged();
  }, []);

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/chat" element={<ChatUi />} />
          </Route>
        </Routes>
    
    </>
  );
};

export default App;
