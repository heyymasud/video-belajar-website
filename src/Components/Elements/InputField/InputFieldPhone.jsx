import { useState } from "react";

const InputFieldPhone = (props) => {
  const { type, text, id } = props;

  const country = [
    {
      code: "+62",
      flag: "./img/id.png",
    },
    {
      code: "+1",
      flag: "./img/usa.png",
    },
    {
      code: "+86",
      flag: "./img/china.png",
    },
  ];

  const [selectedCode, setSelectedCode] = useState(country[0].code);
  const [selectedFlag, setSelectedFlag] = useState(country[0].flag);

  const handleChange = (e) => {
    setSelectedCode(e.target.value);
    setSelectedFlag(country.find((c) => c.code === e.target.value).flag);
  };

  return (
    <section>
      <label className="text-slate-700 mb-1" htmlFor={id}>
        {text} <span className="text-red-500">*</span>
      </label>
      <section className="flex justify-between">
        <section className="flex w-1/3">
          <label className="w-3/12 bg-slate-100 flex justify-center items-center p-2 rounded-s-xl">
            <img src={selectedFlag} />
          </label>
          <select value={selectedCode} onChange={handleChange} className="border border-gray-200 rounded-e-xl w-7/12">
          {country.map((c) => (
            <option key={c.code} value={c.code}>{c.code}</option>
          ))}
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
