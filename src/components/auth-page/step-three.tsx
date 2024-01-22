import Button from "../common/button";
import { useAuthStepStore } from "../../stores/auth-step-store";
import { supabase } from "../../libs/superbase-client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface IStepThreeProps {}

const StepThree: React.FunctionComponent<IStepThreeProps> = (props) => {
  const { sports, setStep } = useAuthStepStore();
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSave = async () => {
    const userId = (await supabase.auth.getSession()).data.session?.user.id;

    if (userId) {
      for (const sport of sports) {
        const { error } = await supabase
          .from("user_sports")
          .insert({ user_id: userId, sport_id: sport.id })
          .select();

        if (error) {
          toast.error(error.message);
          setError(error.message);
          break;
        }
      }

      if (!error) {
        nav("/", { replace: true });
        setStep(1);
      }
    } else {
      toast.error("인증된 유저가 아니에요!");
    }
  };

  return (
    <>
      <h2 className="my-10 text-xl ">
        🎉 축하합니다 이제 <strong className="mx-2 text-Main">SpoLink</strong>를
        즐겨보세요! 🎉
      </h2>
      <div className="flex items-center gap-x-2">
        <Button size="wide" color="secondary" onClick={() => setStep(2)}>
          Back
        </Button>
        <Button size="wide" color="main" onClick={handleSave} className="z-10">
          Go!
        </Button>
      </div>
    </>
  );
};

export default StepThree;
