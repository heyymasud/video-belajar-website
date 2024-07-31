import { Routes, Route } from "react-router-dom"
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import Beranda from "./Pages/Beranda";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="video-belajar-website/" element={<Beranda />} />
        <Route path="video-belajar-website/login" element={<LoginPage />} />
        <Route path="video-belajar-website/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
