const Main = (props) => {
  const { children, classname } = props;
  return (
    <main className="w-full h-full flex justify-center items-center">
      <section className={`w-11/12 text-sm md:w-8/12 xl:w-6/13 xl:text-base h-auto bg-white p-5 xl:p-9 border rounded flex flex-col items-center justify-center gap-5 xl:gap-9 ${classname}`}>
        {children}
      </section>
    </main>
  );
};

export default Main;
