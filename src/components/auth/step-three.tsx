import * as React from "react";
import Button from "../common/Button";
import { MoveRightIcon } from "lucide-react";

interface IStepThreeProps {}

const StepThree: React.FunctionComponent<IStepThreeProps> = (props) => {
  return (
    <>
      <h2 className="my-10 text-xl ">
        🎉 축하합니다 이제 <strong className="mx-2 text-Main">SpoLink</strong>를
        즐겨보세요! 🎉
      </h2>
      <div className="flex items-center gap-x-2">
        <Button size="wide" color="secondary" onClick={() => {}}>
          Back
        </Button>
        <Button size="wide" color="main" onClick={() => {}}>
          Go!
        </Button>
      </div>
    </>
  );
};

export default StepThree;
