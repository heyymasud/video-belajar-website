import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/MainAuth";
import Form from "../../Components/Fragments/Form";
import FormInput from "../../Components/Fragments/Form/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import InputFieldPhone from "../../Components/Elements/InputField/InputFieldPhone";
import Button from "../../Components/Elements/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
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
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Main classname="h-auto py-16">
        <Form onsubmit={handleSubmit(onSubmit)}>
          <FormInput>
            <InputFieldCommon type="text" id="username" text="Nama Lengkap" />
            <InputFieldCommon type="email" id="email" text="Email" />
            <InputFieldPhone type="number" id="phone" text="Nomor Telepon" />
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
              <Button classname="bg-primary-500 text-white" type="submit">
                Daftar
              </Button>
              <Button classname="bg-primary-100 text-primary-500">
                <Link to={"/login"} className="w-full">
                  Masuk
                </Link>
              </Button>
            </section>
          </FormInput>
        </Form>
      </Main>
    </div>
  );
};

export default RegisterPage;
