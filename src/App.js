import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import Projects from "./pages/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
