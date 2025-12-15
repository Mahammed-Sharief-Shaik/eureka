import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar1 } from "./components/shadcn/Navbar1.tsx";
import Footer from "./components/ui/Footer.tsx";
import { Toaster } from "sonner";
import App from "./App.tsx";
import useStoreData from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    
      
        <Navbar1 />
      <App />
      <Footer />
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  </StrictMode>
);
