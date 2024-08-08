import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/MainAuth";
import Form from "../../Components/Layouts/MainAuth/Form";
import FormInput from "../../Components/Layouts/MainAuth/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import Button from "../../Components/Elements/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ModalAuth from "../../Components/Modal/ModalAuth";
import { useDispatch } from "react-redux";
import { closeModal, login } from "../../redux/slices/authSlices";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../Data/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [isNormalLogin, setIsNormalLogin] = useState(false);
  const { modalOpen } = useSelector((state) => state.auth);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [error, setError] = useState(false);

  const onSubmit = async (data) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map((doc) => doc.data());

      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = {
        ...data,
        name: users.find((user) => user.email === data.email).username,
        token: userCredential.user.accessToken,
      };
      dispatch(login(user));
      setIsNormalLogin(true);
      setError(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode || errorMessage);
      setError(true);
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Main classname="h-full py-9">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          textH="Masuk ke Akun"
          textP="Yuk, lanjutin belajarmu di videobelajar."
        >
          <FormInput>
            <InputFieldCommon
              type="email"
              id="email"
              text="Email"
              register={register("email", { required: "Email wajib diisi" })}
              errors={errors}
            />
            <InputFieldPassword
              id="password"
              text="Kata Sandi"
              register={register("password", {
                required: "Kata sandi wajib diisi",
              })}
              errors={errors}
            />
            {error && (
              <p className="text-red-500">
                Email atau kata sandi yang anda masukkan salah.
              </p>
            )}
            <section className="flex flex-col gap-4">
              <Button className="bg-primary-500 hover:bg-green-500 text-white">
                Masuk
              </Button>
              <Button
                className="bg-primary-100 hover:bg-[#e2fcd9] text-primary-500"
                type="button"
                onClick={() => navigate("/register")}
              >
                Daftar
              </Button>
            </section>
          </FormInput>
        </Form>

        <ModalAuth
          isOpen={modalOpen}
          onClose={handleCloseModal}
          textH={isNormalLogin ? `Login Berhasil` : `Login dengan google berhasil`}
          textP={`Selamat datang kembali ${
            JSON.parse(localStorage.getItem("authData"))?.name
          }`}
        />
      </Main>
    </div>
  );
};

export default LoginPage;
