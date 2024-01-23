import { useEffect, useState } from "react";

import clsx from "clsx";
import { isIncludeInArray } from "utils/util";

import useModalsStore from "../../stores/modals-store";
import useThemeStore from "../../stores/theme-store";
import useSportStore from "stores/sports-store";
import useLeagueStore from "stores/league-store";

import { useLeagueQuery, useSaveLeagueQuery } from "hooks/use-league";

import Modal from "./modal";
import MultiSelect from "components/auth-page/multi-select";
import Button from "components/common/button";

import { ISupabaseLeague } from "types/football/league";
import Loading from "components/common/loading";
import {
  deleteAllSupabaseLeague,
  getSupabaseLeague,
  insertAllSupabaseLeague,
} from "services/league";

interface ILeagueSettingModalProps {}

const LeagueSettingModal: React.FunctionComponent<
  ILeagueSettingModalProps
> = () => {
  const { isOpenLeagueSettingModal, closeLeagueSettingModal } =
    useModalsStore();

  const { theme } = useThemeStore();

  const { selectedSport } = useSportStore();

  const { data, isLoading, isError } = useLeagueQuery(
    selectedSport?.id ? selectedSport.id : "",
  );

  const { leagues, setLeagues } = useLeagueStore();

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
    setTempSelectLeague([]);
    closeLeagueSettingModal();
  };

  const handleSave = async () => {
    if (tempSelectLeagues && tempSelectLeagues?.length < 1) return;

    setSaveLoading(true);

    // db clear
    const isDelete = await deleteAllSupabaseLeague(leagues);
    // db save
    if (isDelete) {
      await insertAllSupabaseLeague(tempSelectLeagues!);
    }
    // state update
    setLeagues(tempSelectLeagues!);
    setTempSelectLeague([]);
    setSaveLoading(false);
    closeLeagueSettingModal();
  };

  useEffect(() => {
    const initLeague = async () => {
      const data = await getSupabaseLeague();
      // console.log(data);
      // setTempSelectLeague(data);
    };

    initLeague();
  }, []);

  if (isLoading) {
    <div
      className={clsx(
        `mx-auto min-h-[200px] min-w-[375px] rounded-md px-4 py-4 shadow-lg`,
        theme === "light" && "bg-LightGreyLightBg",
        theme === "dark" && "bg-VeryDarkGreyDark",
      )}
    >
      <Loading size="lg" />
    </div>;
  }

  if (isError) {
    <div
      className={clsx(
        `mx-auto min-h-[200px] min-w-[375px] rounded-md px-4 py-4 shadow-lg`,
        theme === "light" && "bg-LightGreyLightBg",
        theme === "dark" && "bg-VeryDarkGreyDark",
      )}
    >
      Error!
    </div>;
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
          `mx-auto w-fit rounded-md px-4 py-4 shadow-lg`,
          theme === "light" && "bg-LightGreyLightBg",
          theme === "dark" && "bg-VeryDarkGreyDark",
        )}
      >
        <div className="text-lg capitalize">
          {selectedSport?.icon} {selectedSport?.name} Sports의 리그를
          골라보세요!
        </div>
        <div className="mt-4">
          {data && (
            <MultiSelect
              items={data}
              isImg
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
