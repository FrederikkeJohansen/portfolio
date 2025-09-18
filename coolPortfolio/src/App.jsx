import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import "../src/styles/Font.css";

function App() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as you create more pages */}
        {/* Example: <Route path="/project/:id" element={<ProjectPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
