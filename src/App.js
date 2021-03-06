import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home/Home";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
