import { useState } from "react";
import country from "../../../Data/country.js";

const InputFieldPhone = (props) => {
  const { type, text, id, register, errors } = props;


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
          <select
           {...register("country")}
            value={selectedCode}
            onChange={handleChange}
            className="border border-gray-200 rounded-e-xl w-7/12"
          >
            {country.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
        </section>
        <input
          className={`py-3 px-2 w-4/6 border border-gray-200 rounded-xl focus:outline-primary-500 ${
            errors?.[id] && "border-red-500 focus:outline-red-500"
          }`}
          type={type}
          name={id}
          id={id}
          {...register("phone", {
            required: "Nomor telepon wajib diisi",
            minLength: {
              value: 10,
              message: "Nomor telepon minimal 10 angka",
            },
            maxLength: {
              value: 13,
              message: "Nomor telepon maksimal 13 angka",
            },
          })}
        />
      </section>
      {errors?.[id] && (
        <p className="text-red-500 text-xs mt-1 text-right w-full">
          {errors?.[id]?.message}
        </p>
      )}
    </section>
  );
};

export default InputFieldPhone;
