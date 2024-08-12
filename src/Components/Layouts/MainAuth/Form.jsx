import FormHeader from "./FormHeader";
import Button from "../../Elements/Button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../Data/firebase";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../../../redux/slices/authSlices";

const Form = (props) => {
    const { children, onSubmit, textP, textH } = props;
    const dispatch = useDispatch();

    const handleLoginGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = {
            name: result.user.displayName,
            token: token,
            userId: result.user.uid,
          };
          dispatch(loginGoogle(user));

        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode || errorMessage || credential);
        });
    };

    return (
      <>
        <FormHeader textH={textH} textP={textP}  />
        <form onSubmit={onSubmit} className="w-full flex flex-col justify-center gap-5 xl:gap-6">
          {children}
          
          <section className="flex justify-center items-center">
            <hr className="text-slate-500 w-2/5" />
            <span className="text-center w-1/5 text-slate-700">atau</span>
            <hr className="text-slate-500 w-2/5" />
          </section>
          <section className="flex flex-col">
            <Button onClick={handleLoginGoogle} type="button" className="bg-white text-slate-700 border border-gray-200 flex justify-center gap-2">
              <img src="./img/google-icon.png" />
              Masuk dengan Google
            </Button>
          </section>
        </form>
      </>
    );
  };
  
  export default Form;
  