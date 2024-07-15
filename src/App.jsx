import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={"Github Finder"} />

        <main className="container mx-auto px-3 pb-12">Content</main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
