import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Signup from "./pages/Signup.tsx";
import ChatUi from "./pages/ChatUi.tsx";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  useEffect(
    () => {
      
    }, []
  )
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<ChatUi />} />
      </Routes>
    </>
  );
};

export default App;
