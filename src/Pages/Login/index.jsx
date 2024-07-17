import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/MainAuth";
import Form from "../../Components/Fragments/Form";
import FormInput from "../../Components/Fragments/Form/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import Button from "../../Components/Elements/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ModalAuth from "../../Components/Modal/ModalAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (
      userData &&
      data.email === userData.email &&
      data.password === userData.password
    ) {
      const isLogin = JSON.stringify({
        isLogin: true,
        name: userData.username,
      });
      localStorage.setItem("isLogin", isLogin);
      setIsModalOpen(true);
    } else {
      setError(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
              <Button className="bg-primary-500 hover:bg-green-500 text-white">Masuk</Button>
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
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          textH={`Login Berhasil`}
          textP={`Selamat datang kembali ${
            JSON.parse(localStorage.getItem("isLogin"))?.name
          }`}
        />
      </Main>
    </div>
  );
};

export default LoginPage;
