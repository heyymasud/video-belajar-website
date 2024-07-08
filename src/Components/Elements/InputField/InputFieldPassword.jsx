import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputFieldPassword = (props) => {
  const { text, id } = props;

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <section>
      <label className="text-slate-700 mb-1" htmlFor={id}>
        {text} <span className="text-red-500">*</span>
      </label>
      <section className="relative">
        <input
          className="py-3 px-2 w-full border border-gray-200 rounded-xl text-sm focus:outline-primary-500"
          type={open ? "text" : "password"}
          name={id}
          id={id}
        />
        <section className="absolute top-3 right-4 opacity-40 text-2xl cursor-pointer">
          { open ? <FaEyeSlash onClick={toggle} /> : <FaEye onClick={toggle} /> }
        </section>
      </section>
    </section>
  );
};

export default InputFieldPassword;
