const InputFieldPassword = (props) => {
  const { type, text, id, icon} = props;
  return (
    <section>
      <label className="text-slate-700 mb-1" htmlFor={id}>
        {text} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          className="py-3 px-2 block w-full border border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          type={type}
          name={id}
          id={id}
        />
        <button
          type="button"
          data-hs-toggle-password='{
          "target": "#hs-toggle-password"
        }'
          className="absolute top-0 end-0 p-3.5 rounded-e-md opacity-40"
        >
          {icon}
          </button>
      </div>
    </section>
  );
};























          {/* <svg
                className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  className="hs-password-active:hidden"
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                ></path>
                <line
                  className="hs-password-active:hidden"
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                ></line>
                <path
                  className="hidden hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                ></path>
                <circle
                  className="hidden hs-password-active:block"
                  cx="12"
                  cy="12"
                  r="3"
                ></circle>
              </svg> */}
        

export default InputFieldPassword;
