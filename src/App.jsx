import { Routes, Route } from "react-router-dom"
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
