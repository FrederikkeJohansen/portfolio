import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "../src/styles/Font.css";

function App() {
  return (
    <div className="w-full h-full bg-[#FCF9FE]">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
