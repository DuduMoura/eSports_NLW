export default function Select({ label, placeholder, errors, w, data }: any) {
  
  return (
    <div className={`relative mb-3 px-1 md:w-${w}/12 w-full`}>
      <label className="block text-white text-lg font-bold mb-2">{label}</label>
      <select
        title={placeholder}
        className="px-3 py-4 placeholder-gray-500 text-gray-500 bg-zinc-900 rounded text-sm shadow w-full focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {data?.map((item: any) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      <small className="text-red-700">{errors.address?.message}</small>
    </div>
  );
}
