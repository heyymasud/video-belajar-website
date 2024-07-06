import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/Main";
import Form from "../../Components/Fragments/Form";
import FormInput from "../../Components/Fragments/Form/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Main classname="h-full">
        <Form>
          <FormInput>
            <InputFieldCommon type="email" id="email" text="Email" />
            <InputFieldPassword
              type="password"
              id="password"
              text="Kata Sandi"
              icon={<FontAwesomeIcon icon="fa-solid fa-eye" />}
            />
          </FormInput>
        </Form>
      </Main>
    </div>
  );
};

export default LoginPage;
