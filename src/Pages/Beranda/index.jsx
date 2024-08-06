import Navbar from "../../Components/Layouts/Navbar";
import MainFooter from "../../Components/Layouts/MainFooter";
import MainBeranda from "../../Components/Layouts/MainBeranda";
import ModalAuth from "../../Components/Modal/ModalAuth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlices";
import { clearCart } from "../../redux/slices/cartSlices";

const Beranda = () => {
  const userAuth = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar
       isLogin={userAuth.isAuthenticated.isLogin}
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
