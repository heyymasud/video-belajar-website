import { useState } from "react";
import header from "../../../Data/header";
import Button from "../../Elements/Button";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("isLogin"));
  const [dropDown, setDropDown] = useState(false);
  const [isLogin, setIsLogin] = useState(user?.isLogin);

  const handleLogout = () => {
    localStorage.setItem("isLogin", JSON.stringify({ isLogin: false }));
    setIsLogin(false);
  };
  return (
    <header className="w-full h-auto">
      <nav className="w-full h-auto bg-white shadow-lg xl:shadow px-[120px] py-4 xl:py-3 flex justify-between items-center">
        <img className="mx-[22px] max-sm:w-40 h-auto" src={header.logo} alt="logo" />
        {isLogin ? (
          <section className="relative flex items-center gap-9">
            <p className="text-slate-500 font-medium cursor-pointer">
              Kategori
            </p>
            <img
              alt="profile"
              className="w-11 h-11 rounded-xl cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
              src={header.profilePhoto}
            />
            {dropDown && (
              <ul
                className={`absolute top-14 right-0 bg-white rounded-lg shadow-2xl py-1 w-52 cursor-pointer z-10`}
              >
                {header.dropdown.map((item, index) => (
                  <li
                    className={`text-slate-500 font-medium px-3 py-4 hover:bg-slate-100 border-b ${
                      index === header.dropdown.length - 1 &&
                      "text-error-200 gap-1 flex"
                    }`}
                    key={index}
                    onClick={index === header.dropdown.length - 1 && handleLogout}
                  >
                    {item}{" "}
                    {index === header.dropdown.length - 1 && (
                      <img src={header.logoutLogo} alt="logout" />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ) : (
          location.pathname !== "/login" && location.pathname !== "/register" && (
          <section className="flex gap-4">
            <Button className="bg-primary-500 text-white px-6" onClick={() => navigate("/login")} >Login</Button>
            <Button className="bg-white text-primary-500 border border-primary-500 px-6" onClick={() => navigate("/register")} >
              Register
            </Button>
          </section>
          )
        )}
      </nav>
    </header>
  );
};

export default Navbar;
