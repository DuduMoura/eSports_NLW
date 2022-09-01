export default function Checkbox({value, name}: any) {
  return (
    <>
      <div className="relative mt-2 px-1 items-center">
          <input id="link-checkbox" type="checkbox" value={value} className="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 checked:bg-purple-500" />
          <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-300 ">{name}</label>
      </div>
    </>
  );
}
