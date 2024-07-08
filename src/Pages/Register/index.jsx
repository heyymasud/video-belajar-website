import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/MainAuth";
import Form from "../../Components/Fragments/Form";
import FormInput from "../../Components/Fragments/Form/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import InputFieldPhone from "../../Components/Elements/InputField/InputFieldPhone";
import Button from "../../Components/Elements/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Main classname='h-auto py-16'>
        <Form>
          <FormInput>
            <InputFieldCommon type="text" id="username" text="Nama Lengkap" />
            <InputFieldCommon type="email" id="email" text="Email" />
            <InputFieldPhone type="number" id="phone" text="Nomor Telepon" />
            <InputFieldPassword
              id="password"
              text="Kata Sandi"
            />
            <InputFieldPassword
              id="confirm-password"
              text="Konfirmasi Kata Sandi"
            />
            <section className="flex flex-col gap-4">
            <Button classname="bg-primary-500 text-white">Daftar</Button>
            <Button classname="bg-primary-100 text-primary-500" ><Link to={"/login"} className="w-full">Masuk</Link></Button>
          </section>
          </FormInput>
        </Form>
      </Main>
    </div>
  );
};

export default RegisterPage;
