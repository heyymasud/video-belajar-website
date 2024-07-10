const Button = (props) => {
  const { children, classname, onclick, type } = props;
  return (
    <button onClick={onclick} type={type} className={`flex justify-center items-center w-full py-2 xl:py-3 rounded-xl font-bold ${classname}`}>
      {children}
    </button>
  );
};

export default Button;
