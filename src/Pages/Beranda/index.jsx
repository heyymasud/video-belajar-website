import Navbar from "../../Components/Layouts/Navbar";
import MainFooter from "../../Components/Layouts/MainFooter";
import MainBeranda from "../../Components/Layouts/MainBeranda";
import ModalAuth from "../../Components/Modal/ModalAuth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal, logout, openModal } from "../../redux/slices/authSlices";
import { clearCart } from "../../redux/slices/cartSlices";

const Beranda = () => {
  const userAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {modalOpen} = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Navbar
       isLogin={userAuth.isAuthenticated.isLogin}
       handleLogout={handleLogout}
       />
      <MainBeranda />
      <ModalAuth
        isOpen={modalOpen}
        onClose={handleCloseModal}
        textH={`Logout`}
        textP={`Anda telah berhasil keluar`}
      />
      <MainFooter />
    </>
  );
};

export default Beranda;
