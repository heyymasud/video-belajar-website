import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import Beranda from "./Pages/Beranda";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
