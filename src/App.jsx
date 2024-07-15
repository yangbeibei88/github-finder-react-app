import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={"Github Finder"} />

        <main>Content</main>
      </div>
    </BrowserRouter>
  );
};
