import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/MainAuth";
import Form from "../../Components/Fragments/Form";
import FormInput from "../../Components/Fragments/Form/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import Button from "../../Components/Elements/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Main classname="h-full">
        <Form textH="Masuk ke Akun" textP="Yuk, lanjutin belajarmu di videobelajar.">
          <FormInput>
            <InputFieldCommon type="email" id="email" text="Email" />
            <InputFieldPassword 
              id="password"
              text="Kata Sandi"
            />
            <section className="flex flex-col gap-4">
            <Button className="bg-primary-500 text-white">Masuk</Button>
            <Button className="bg-primary-100 text-primary-500" type="button" onClick={() => navigate("/register")} >Daftar</Button>
          </section>
          </FormInput>
        </Form>
      </Main>
    </div>
  );
};

export default LoginPage;
