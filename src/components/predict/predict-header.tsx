import clsx from "clsx";
import { useEffect } from "react";

import { CheckIcon, ImageOffIcon } from "lucide-react";
import { Listbox } from "@headlessui/react";
import ListBox from "components/common/list-box";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useLeagueStore } from "stores/league-store";
import { useTeamRankQuery } from "hooks/services/quries/use-rank-query";
import { usePredictActions, usePredicts } from "stores/predict-store";

interface IPredictHeaderProps {}

const PredictHeader: React.FunctionComponent<IPredictHeaderProps> = (props) => {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const { homeTeam, awayTeam, teamArr } = usePredicts((state) => state);
  const { setAwayTeam, setHomeTeam, setTeamArr } = usePredictActions(
    (state) => state,
  );

  const { data, isLoading, isError } = useTeamRankQuery(
    selectedLeague?.leagueId!,
    selectedLeague?.season!,
  );

  useEffect(() => {
    const teamArr = data?.league.standings.at(-1);
    setTeamArr(teamArr!);
  }, [data, setTeamArr]);

  const items = teamArr
    ?.filter((el) => {
      if (
        el.team.id === homeTeam?.team.id ||
        el.team.id === awayTeam?.team.id
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      let nameA = a.team.name.toLowerCase();
      let nameB = b.team.name.toLowerCase();

      if (nameA < nameB) {
        return -1; // a를 b보다 앞에 정렬
      } else if (nameA > nameB) {
        return 1; // a를 b보다 뒤에 정렬
      } else {
        return 0; // 순서를 변경하지 않음
      }
    });

  const handleSetHomeTeam = (teamName: string) => {
    console.log(items?.find((el) => el.team.name === teamName));
    setHomeTeam(items?.find((el) => el.team.name === teamName) || null);
  };
  const handleSetAwayTeam = (teamName: string) => {
    setAwayTeam(items?.find((el) => el.team.name === teamName) || null);
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="">
        <ListBox
          items={items || []}
          selectedItem={homeTeam}
          setSelectedItem={handleSetHomeTeam}
          renderSelectedItem={(selectedItem) => {
            return (
              <span className="flex items-center gap-x-2 truncate">
                {selectedItem?.team.logo ? (
                  <LazyLoadImage
                    src={selectedItem?.team.logo}
                    className="aspect-square h-6 w-6"
                    alt={"teamLogo"}
                  />
                ) : (
                  <ImageOffIcon />
                )}
                {selectedItem?.team.name || "Select Home Team"}
              </span>
            );
          }}
          renderOption={(item) => {
            return (
              <Listbox.Option
                key={item?.team.id}
                className={({ active }) =>
                  clsx(
                    "relative cursor-default select-none py-2 pl-10 pr-4",
                    active ? "bg-Main text-white" : "text-MediumGrey",
                  )
                }
                value={item?.team.name}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`flex items-center gap-x-2 truncate text-lg ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      <LazyLoadImage
                        src={item?.team.logo}
                        className="aspect-square h-6 w-6"
                        alt={"teamLogo"}
                      />
                      {item?.team.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-Main">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            );
          }}
          className="py-4"
        />
      </div>
      <div className="">
        <ListBox
          items={items || []}
          selectedItem={awayTeam}
          setSelectedItem={handleSetAwayTeam}
          renderSelectedItem={(selectedItem) => {
            return (
              <span className="flex items-center gap-x-2 truncate">
                {selectedItem?.team.logo ? (
                  <LazyLoadImage
                    src={selectedItem?.team.logo}
                    className="aspect-square h-6 w-6"
                    alt={"teamLogo"}
                  />
                ) : (
                  <ImageOffIcon />
                )}
                {selectedItem?.team.name || "Select Away Team"}
              </span>
            );
          }}
          renderOption={(item) => {
            return (
              <Listbox.Option
                key={item?.team.id}
                className={({ active }) =>
                  clsx(
                    "relative cursor-default select-none py-2 pl-10 pr-4",
                    active ? "bg-Main text-white" : "text-MediumGrey",
                  )
                }
                value={item?.team.name}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`flex items-center gap-x-2 truncate text-lg ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      <LazyLoadImage
                        src={item?.team.logo}
                        className="aspect-square h-6 w-6"
                        alt={"teamLogo"}
                      />
                      {item?.team.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-Main">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            );
          }}
          className="py-4"
        />
      </div>
    </div>
  );
};

export default PredictHeader;
