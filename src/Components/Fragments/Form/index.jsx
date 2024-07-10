import FormHeader from "./FormHeader";
import Button from "../../Elements/Button";

const Form = (props) => {
    const { children, onSubmit } = props;
    return (
      <>
        <FormHeader />
        <form onSubmit={onSubmit} className="w-full flex flex-col justify-center gap-5 xl:gap-6">
          {children}
          
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
  