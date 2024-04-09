import clsx from "clsx";

interface ILatestFormProps {
  form: string;
}

const LatestForm: React.FunctionComponent<ILatestFormProps> = ({ form }) => {
  return (
    <div className="flex items-center gap-x-1">
      {form.split("").map((el, i) => (
        <span
          key={el + i}
          className={clsx(
            "flex h-5 w-5 items-center justify-center rounded-full text-center text-xs font-semibold text-White",
            el === "W" ? "bg-green-500" : "",
            el === "D" ? "bg-gray-500" : "",
            el === "L" ? "bg-red-500" : "",
          )}
        >
          {el}
        </span>
      ))}
    </div>
  );
};

export default LatestForm;
