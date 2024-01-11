import { MoveRight } from "lucide-react";
import { useAuthStore } from "../../stores/auth-store";

import Button from "../common/Button";
import MultiSelect from "./multi-select";

interface IStepTwoProps {}

const StepTwo: React.FunctionComponent<IStepTwoProps> = () => {
  const { sports, setSports } = useAuthStore();

  return (
    <>
      <p className="mt-10 text-sm sm:mt-16">선호하는 스포츠를 골라 주세요</p>
      <div className="mt-2 flex flex-col gap-y-2">
        <MultiSelect items={sports} handleSelect={setSports} />
      </div>
      <div className="mt-4 flex w-full justify-start">
        <Button
          onClick={() => {}}
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
