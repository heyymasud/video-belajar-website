import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/MainAuth";
import Form from "../../Components/Fragments/Form";
import FormInput from "../../Components/Fragments/Form/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import InputFieldPhone from "../../Components/Elements/InputField/InputFieldPhone";
import Button from "../../Components/Elements/Button";
import { useForm } from "react-hook-form";
import auth from "../../Data/authData.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalAuth from "../../Components/Modal/ModalAuth/index.jsx";
import InputSelect from "../../Components/Elements/InputSelect/index.jsx";

const RegisterPage = () => {
  const navigate = useNavigate();
  const country = auth[0].country;
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  // Handle Submit
  const onSubmit = (data) => {
    // Menggabung kode dan nomor telpon
    const fullPhone = data.country + data.phone;
    // Mengambil nama negara
    const countryName = country.find((c) => c.code === data.country).country;
    // Menggabungkan semua data
    const finalData = { ...data, phone: fullPhone, countryName };
    // Menghapus data yang tidak dibutuhkan
    delete finalData["confirm-password"];
    delete finalData["country"];
    // Menyimpan data ke local storage
    localStorage.setItem("user", JSON.stringify(finalData));
    // Menampilkan modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Main classname="h-auto py-16">
        <Form
          textH="Pendaftaran Akun"
          textP="Yuk, daftarkan akunmu sekarang juga!"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput>
            <InputFieldCommon
              type="text"
              id="username"
              text="Nama Lengkap"
              register={{
                ...register("username", {
                  required: "Nama lengkap wajib diisi",
                }),
              }}
              errors={errors}
            />
            <InputFieldCommon
              type="email"
              id="email"
              text="Email"
              register={{
                ...register("email", {
                  required: "Email wajib diisi",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email tidak valid",
                  },
                }),
              }}
              errors={errors}
            />
            <InputSelect
            text="Jenis Kelamin"
            id="gender"
            register={register}
            errors={errors} />
            <InputFieldPhone
              type="number"
              id="phone"
              text="Nomor Telepon"
              register={register}
              errors={errors}
            />
            <InputFieldPassword
              id="password"
              text="Kata Sandi"
              register={{
                ...register("password", {
                  required: "Kata sandi wajib diisi",
                  minLength: {
                    value: 6,
                    message: "Kata sandi minimal 6 karakter",
                  },
                }),
              }}
              errors={errors}
            />
            <InputFieldPassword
              id="confirm-password"
              text="Konfirmasi Kata Sandi"
              register={{
                ...register("confirm-password", {
                  required: "Kata sandi wajib diisi",
                  validate: (value) =>
                    value === watch("password") || "Kata sandi tidak sama",
                }),
              }}
              errors={errors}
            />
            <section className="flex flex-col gap-4">
              <Button className="bg-primary-500 text-white" type="submit">
                Daftar
              </Button>
              <Button
                type="button"
                onClick={() => navigate("/login")}
                className="bg-primary-100 text-primary-500"
              >
                Masuk
              </Button>
            </section>
          </FormInput>
        </Form>
      </Main>
      <ModalAuth
        textH="Registrasi Berhasil"
        textP="Akun Anda telah berhasil dibuat."
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RegisterPage;
