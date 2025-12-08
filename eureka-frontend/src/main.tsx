import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import { Navbar1 } from "./components/shadcn/Navbar1.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/ui/Footer.tsx";
import Signup from "./pages/Signup.tsx";
import Chat from "./pages/Chat.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
       <Toaster richColors position="top-right" /> 
    </BrowserRouter>
  </StrictMode>
);
