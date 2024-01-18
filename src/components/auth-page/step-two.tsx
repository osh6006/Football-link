import { MoveRight } from "lucide-react";

import Button from "../common/button";
import MultiSelect from "./multi-select";
import { useAuthStepStore } from "../../stores/auth-step-store";

interface IStepTwoProps {}

const StepTwo: React.FunctionComponent<IStepTwoProps> = () => {
  const { sports, setSports, setStep } = useAuthStepStore();

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="mt-10 text-sm sm:mt-12 sm:text-base">
          선호하는 스포츠를 골라 주세요
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-y-2">
        <MultiSelect items={sports} handleSelect={setSports} />
      </div>
      <div className="mt-4 flex w-full justify-start">
        <Button
          onClick={() => setStep(3)}
          size="wide"
          color="main"
          disabled={sports.length < 1}
        >
          다음으로
          <MoveRight />
        </Button>
      </div>
    </>
  );
};

export default StepTwo;
