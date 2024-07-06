import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/Main";
import Form from "../../Components/Fragments/Form";
import FormInput from "../../Components/Fragments/Form/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputFieldPhone from "../../Components/Elements/InputField/InputFieldPhone";

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
              type="password"
              id="password"
              text="Kata Sandi"
              icon={<FontAwesomeIcon icon="fa-solid fa-eye" />}
            />
            <InputFieldPassword
              type="password"
              id="confirm-password"
              text="Konfirmasi Kata Sandi"
              icon={<FontAwesomeIcon icon="fa-solid fa-eye" />}
            />
          </FormInput>
        </Form>
      </Main>
    </div>
  );
};

export default RegisterPage;
