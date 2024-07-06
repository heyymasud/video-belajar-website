const InputFieldPhone = (props) => {
  const { type, text, id } = props;
  return (
    <section>
      <label className="text-slate-700 mb-1" htmlFor={id}>
        {text} <span className="text-red-500">*</span>
      </label>
      <section className="flex justify-between">
        <section className="flex w-1/3">
          <label className="w-3/12 bg-slate-100 p-3 rounded-s-xl">
            <img src="./img/id.png"></img>
          </label>
          <select className="border border-gray-200 rounded-e-xl w-7/12">
            <option value={+62}>+62</option>
            <option value={+63}>+63</option>
            <option value={+64}>+64</option>
            <option value={+65}>+65</option>
            <option value={+66}>+66</option>
          </select>
        </section>
        <input
          className="py-3 px-2 block w-4/6 border border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          type={type}
          name={id}
          id={id}
        />
      </section>
    </section>
  );
};

export default InputFieldPhone;
