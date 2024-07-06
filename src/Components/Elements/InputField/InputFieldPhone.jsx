const InputFieldPhone = (props) => {
    const { type, text, id } = props;
    return (
      <section>
        <label className="text-slate-700 mb-1" htmlFor={id}>
          {text} <span className="text-red-500">*</span>
        </label>
        <input
          className="py-3 px-2 block w-full border border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          type={type}
          name={id}
          id={id}
        />
      </section>
    );
  };

  export default InputFieldPhone;