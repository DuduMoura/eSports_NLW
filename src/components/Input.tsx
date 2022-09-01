export default function Input({label, placeholder, errors, w, type}: any) {
  return (
    <div className={`relative mb-3 px-1 md:w-${w}/12 w-full`}>
      <label className="block text-white text-lg font-bold mb-2">
        {label}
      </label>
      <input
        type={type ?? 'text'}
        className="px-3 py-4 placeholder-gray-500 text-gray-500 bg-zinc-900 rounded text-sm shadow w-full focus:outline-none"
        placeholder={placeholder}
        title={placeholder}
      />
      <small className="text-red-700">
      {errors.address?.message}
      </small>
    </div>
  );
}
