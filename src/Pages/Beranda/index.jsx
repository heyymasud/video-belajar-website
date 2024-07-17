import Navbar from "../../Components/Layouts/Navbar";
import MainFooter from "../../Components/Layouts/MainFooter";
import MainBeranda from "../../Components/Layouts/MainBeranda";
import ModalAuth from "../../Components/Modal/ModalAuth";
import { useState } from "react";

const Beranda = () => {
  const user = JSON.parse(localStorage.getItem("isLogin"));
  const [isLogin, setIsLogin] = useState(user?.isLogin || false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.setItem("isLogin", JSON.stringify({ isLogin: false }));
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar
       isLogin={isLogin}
       handleLogout={handleLogout}
       />
      <MainBeranda />
      <ModalAuth
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        textH={`Logout`}
        textP={`Anda telah berhasil keluar`}
      />
      <MainFooter />
    </>
  );
};

export default Beranda;
