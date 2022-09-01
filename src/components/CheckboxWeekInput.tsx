export default function CheckboxWeekInput({value, name}: any) {
  return (
    <>
      <input type="checkbox" id={`react-option-${value}`} value={value} className="hidden peer" />
      <label htmlFor={`react-option-${value}`} className="inline-flex justify-between items-center py-2 px-4 w-full text-gray-500 border-none bg-zinc-900 rounded-lg cursor-pointer peer-checked:bg-purple-600 hover:text-white peer-checked:text-white hover:bg-purple-600" title={name}>                           
          <div className="block">
              <div className="w-full text-lg font-semibold">{value}</div>
          </div>
      </label>
    </>
  );
}
