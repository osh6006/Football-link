import { useState } from "react";
import clsx from "clsx";

import useModalsStore from "../../stores/modals-store";
import useThemeStore from "../../stores/theme-store";

import Modal from "./modal";
import Button from "components/common/button";
import {
  sportsQueryKey,
  useServerSportsQuery,
  useSportsQuery,
} from "hooks/services/quries/use-sports-query";
import ComponentStatusContainer from "components/layouts/component-status-container";
import Loading from "components/common/loading";

import { ISport } from "types";
import {
  deleteUserSupabaseSports,
  insertAllSupabaseSports,
} from "hooks/services/apis/sports";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface ISportsSettingModalProps {}

const SportsSettingModal: React.FunctionComponent<
  ISportsSettingModalProps
> = () => {
  const queryClient = useQueryClient();

  const { isOpenSportsSettingModal, closeSportsSettingModal } =
    useModalsStore();

  const [saveLoading, setSaveLoading] = useState(false);
  const { theme } = useThemeStore();

  // 내가 선택한 스포츠 리그
  const { data: selectedSports, isLoading, isError } = useSportsQuery();

  // 서버에 저장된 스포츠 리그
  const { data: serverSports } = useServerSportsQuery();

  const [tempSports, setTempSports] = useState<ISport[]>(selectedSports || []);

  const handleTempSelected = (sports: ISport) => {
    if (tempSports.find((el) => el.id === sports.id)) {
      setTempSports(tempSports.filter((el) => el.id !== sports.id));
    } else {
      setTempSports([...tempSports, sports]);
    }
  };

  const handleSave = async () => {
    if (tempSports?.length < 1) return;

    // db clear
    setSaveLoading(true);
    const isDelete = await deleteUserSupabaseSports();

    // db save
    if (!isDelete) {
      setSaveLoading(false);
      return;
    }

    const isInsert = await insertAllSupabaseSports(tempSports!);
    if (!isInsert) {
      console.log("INSERT ERROR");
      setSaveLoading(false);
      return;
    }

    queryClient.invalidateQueries({
      queryKey: [sportsQueryKey.useSportsQuery],
    });

    setSaveLoading(false);
    closeSportsSettingModal();
    toast.success("🎉 Success sports setting! 🎉");
  };

  const handleCancle = () => {
    closeSportsSettingModal();
  };

  return (
    <Modal
      title=""
      desc=""
      isOpen={isOpenSportsSettingModal}
      onClose={() => closeSportsSettingModal()}
    >
      {isLoading ? (
        <ComponentStatusContainer height={"500"} state="loading">
          <Loading size="md" />
        </ComponentStatusContainer>
      ) : isError ? (
        <ComponentStatusContainer height={"500"} state="loading">
          Something Error
        </ComponentStatusContainer>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={clsx(
            `mx-auto w-fit min-w-[370px] rounded-md px-5 py-8 text-MediumGrey shadow-lg`,
            theme === "light" && "bg-LightGreyLightBg",
            theme === "dark" && "bg-VeryDarkGreyDark",
          )}
        >
          <h1 className="text-xl font-bold">Select your favorite sports</h1>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {serverSports?.map((el) => (
              <li
                key={el.id}
                className={clsx(
                  "cursor-pointer rounded-md border px-3 py-2 uppercase transition-colors hover:bg-Main hover:text-White",
                  tempSports.find((item) => item.id === el.id)
                    ? "bg-Main text-White"
                    : "",
                )}
                onClick={() => handleTempSelected(el)}
              >
                {el.icon} {el.name}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <div className="flex gap-x-2">
              <Button
                size="sm"
                disabled={saveLoading}
                color="secondary"
                onClick={handleCancle}
              >
                취소
              </Button>
              <Button
                size="sm"
                disabled={saveLoading}
                color="main"
                onClick={handleSave}
              >
                {saveLoading ? <Loading size="sm" /> : "저장"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default SportsSettingModal;
