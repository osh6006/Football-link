import { MoveRight } from "lucide-react";

import Button from "../common/button";
import MultiSelect from "./multi-select";
import { useAuthStepStore } from "../../stores/auth-step-store";
import { useEffect, useState } from "react";
import { supabase } from "libs/superbase-client";
import { ISport } from "types";
import toast from "react-hot-toast";

interface IStepTwoProps {}

const StepTwo: React.FunctionComponent<IStepTwoProps> = () => {
  const { sports, setSports, setStep } = useAuthStepStore();
  const [selectSports, setSelectSports] = useState<ISport[]>([]);

  useEffect(() => {
    const checkSport = async () => {
      const { data, error } = await supabase.from("sports").select("*");

      if (error) {
        toast.error(error.message);
      }

      if (data) {
        setSelectSports(data);
      }
    };

    checkSport();
  }, [setSelectSports]);

  console.log(sports);

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base">선호하는 스포츠를 골라 주세요</p>
      </div>
      <div className="mt-2 flex flex-col gap-y-2">
        <MultiSelect
          items={selectSports}
          handleSelect={setSports}
          selectedItems={sports}
        />
      </div>
      <div className="mt-4 flex w-full justify-start">
        <Button
          onClick={() => setStep(3)}
          size="wide"
          color="main"
          className="z-10"
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
