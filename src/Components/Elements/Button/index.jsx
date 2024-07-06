const Button = (props) => {
  const { children, classname } = props;
  return (
    <button type="button" className={`w-full py-2 xl:py-3 rounded-xl font-bold ${classname}`}>
      {children}
    </button>
  );
};

export default Button;
