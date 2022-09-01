import CheckboxWeekInput from "./CheckboxWeekInput";

export default function CheckboxWeek({
  label,
  placeholder,
  errors,
  w,
  type,
}: any) {
  const weeks = [
    {
      value: "D",
      name: "Domingo",
    },
    {
      value: "S",
      name: "Segunda-feira",
    },
    {
      value: "T",
      name: "Terça-feira",
    },
    {
      value: "Q",
      name: "Quarta-feira",
    },
    {
      value: "Q",
      name: "Quinta-feira",
    },
    {
      value: "S",
      name: "Sexta-feira",
    },
    {
      value: "S",
      name: "Sábado",
    },
  ];
  return (
    <div className={`relative mb-3 px-1 md:w-${w}/12 w-full`}>
      <label className="block text-white text-lg font-bold mb-2">{label}</label>
      <ul className="flex gap-6 w-full">
        {weeks.map((item) => {
          return (
            <li key={item.value}>
              <CheckboxWeekInput value={item.value} name={item.name} />
            </li>
          );
        })}
      </ul>
      <small className="text-red-700">{errors.address?.message}</small>
    </div>
  );
}
