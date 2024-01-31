import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import clsx from "clsx";
import { flattenedArray, isIncludeInArray } from "utils/util";

import useModalsStore from "../../stores/modals-store";
import useThemeStore from "../../stores/theme-store";
import useSportStore from "stores/sports-store";

import {
  leagueQueryKey,
  useLeagueQuery,
  useSaveLeagueQuery,
} from "hooks/services/quries/use-league-query";

import Modal from "./modal";
import MultiSelect from "components/auth-page/multi-select";
import Button from "components/common/button";
import Loading from "components/common/loading";

import { ISupabaseLeague } from "types/football/league";
import {
  deleteAllSupabaseLeague,
  insertAllSupabaseLeague,
} from "hooks/services/apis/league";

interface ILeagueSettingModalProps {}

const LeagueSettingModal: React.FunctionComponent<
  ILeagueSettingModalProps
> = () => {
  const queryClient = useQueryClient();

  const { isOpenLeagueSettingModal, closeLeagueSettingModal } =
    useModalsStore();

  const { theme } = useThemeStore();

  const { selectedSport } = useSportStore();

  const {
    data: leagueData,
    isLoading: isLeagueLoading,
    isError: isLeagueError,
  } = useLeagueQuery(selectedSport?.id ? selectedSport.id : "");

  const {
    data: saveLeagueData,
    isLoading: isSaveLeagueLoading,
    isError: isSaveLeagueError,
  } = useSaveLeagueQuery(selectedSport?.id ? selectedSport.id : "");

  const [isSaveLoading, setSaveLoading] = useState(false);
  const [tempSelectLeagues, setTempSelectLeague] = useState<
    ISupabaseLeague[] | null
  >([]);

  const handleSelectedItem = (item: ISupabaseLeague) => {
    if (isIncludeInArray(tempSelectLeagues!, item)) {
      setTempSelectLeague(
        tempSelectLeagues
          ? tempSelectLeagues.filter((el) => el.id !== item.id)
          : [],
      );
    } else {
      setTempSelectLeague([...tempSelectLeagues!, item]);
    }
  };

  const handleCancel = () => {
    queryClient.invalidateQueries({
      queryKey: [leagueQueryKey.saveLeagueQuery],
    });
    setTempSelectLeague(flattenedArray(saveLeagueData || [], "league"));

    closeLeagueSettingModal();
  };

  const handleSave = async () => {
    if (tempSelectLeagues && tempSelectLeagues?.length < 1) return;
    setSaveLoading(true);

    // db clear
    const isDelete = await deleteAllSupabaseLeague(leagueData!);

    // db save
    if (!isDelete) {
      setSaveLoading(false);
      return;
    }
    await insertAllSupabaseLeague(tempSelectLeagues!);

    // state update
    setTempSelectLeague([]);
    queryClient.invalidateQueries({
      queryKey: [leagueQueryKey.saveLeagueQuery],
    });
    setSaveLoading(false);
    closeLeagueSettingModal();
  };

  useEffect(() => {
    setTempSelectLeague(flattenedArray(saveLeagueData || [], "league"));
  }, [saveLeagueData]);

  if (isLeagueLoading || isSaveLeagueLoading) {
    return (
      <Modal
        title=""
        desc=""
        isOpen={isOpenLeagueSettingModal}
        onClose={closeLeagueSettingModal}
      >
        <div
          className={clsx(
            `mx-auto min-h-[200px] min-w-[375px] rounded-md px-4 py-4 shadow-lg`,
            theme === "light" && "bg-LightGreyLightBg",
            theme === "dark" && "bg-VeryDarkGreyDark",
          )}
        >
          <Loading size="lg" />
        </div>
      </Modal>
    );
  }

  if (isLeagueError || isSaveLeagueError) {
    return (
      <Modal
        title=""
        desc=""
        isOpen={isOpenLeagueSettingModal}
        onClose={closeLeagueSettingModal}
      >
        <div
          className={clsx(
            `mx-auto min-h-[200px] min-w-[375px] rounded-md px-4 py-4 shadow-lg`,
            theme === "light" && "bg-LightGreyLightBg",
            theme === "dark" && "bg-VeryDarkGreyDark",
          )}
        >
          Error
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      title=""
      desc=""
      isOpen={isOpenLeagueSettingModal}
      onClose={closeLeagueSettingModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          `mx-auto min-w-[200px] max-w-xl rounded-md px-4 py-4 shadow-lg`,
          theme === "light" && "bg-LightGreyLightBg",
          theme === "dark" && "bg-VeryDarkGreyDark",
        )}
      >
        <div className="text-lg capitalize">
          {selectedSport?.icon} {selectedSport?.name} Sports의 리그를
          골라보세요!
        </div>
        <div className="mt-4">
          {leagueData && (
            <MultiSelect
              isImg
              items={leagueData}
              selectedItems={tempSelectLeagues || []}
              handleSelect={handleSelectedItem}
            />
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <div className="flex gap-x-2">
            <Button
              disabled={isSaveLoading}
              size="sm"
              color="secondary"
              onClick={handleCancel}
            >
              취소
            </Button>
            <Button
              disabled={isSaveLoading}
              size="sm"
              color="main"
              onClick={handleSave}
            >
              {isSaveLoading ? <Loading size="sm" /> : "저장"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LeagueSettingModal;
