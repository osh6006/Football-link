import MultiSelect from "./multi-select";

interface IStepTwoProps {}

const StepTwo: React.FunctionComponent<IStepTwoProps> = (props) => {
  return (
    <>
      <p className="mt-16 text-sm">선호하는 스포츠를 골라 주세요</p>
      <div className="mt-2 flex flex-col gap-y-2">
        <MultiSelect items={[]} />
      </div>
    </>
  );
};

export default StepTwo;
