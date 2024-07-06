import FormHeader from "./FormHeader";
import Button from "../../Elements/Button";
import { Link } from "react-router-dom";

const Form = (props) => {
    const { children } = props;
    return (
      <>
        <FormHeader />
        <form className="w-full flex flex-col justify-center gap-5 xl:gap-6">
          {children}
          <section className="flex flex-col gap-4">
            <Button classname="bg-primary-500 text-white">Masuk</Button>
            <Button classname="bg-primary-100 text-primary-500" ><Link to={"/register"} className="w-full">Daftar</Link></Button>
          </section>
          <section className="flex justify-center items-center">
            <hr className="text-slate-500 w-2/5" />
            <span className="text-center w-1/5 text-slate-700">atau</span>
            <hr className="text-slate-500 w-2/5" />
          </section>
          <section>
            <Button classname="bg-white text-slate-700 border border-gray-200 flex justify-center gap-2">
              <img src="./img/google-icon.png" />
              Masuk dengan Google
            </Button>
          </section>
        </form>
      </>
    );
  };
  
  export default Form;
  