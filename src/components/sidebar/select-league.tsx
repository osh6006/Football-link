import clsx from "clsx";
import {
  findItemUsingKeywordInArray,
  getFirstAndLastDayOfMonth,
} from "utils/util";

import { CheckIcon, ImageOffIcon } from "lucide-react";
import { Combobox } from "@headlessui/react";
import ComboBox from "components/navbar/combo-box";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";
import useSelectBox from "hooks/use-select-box";
import { useCountryStore } from "stores/country-store";
import { ILeague, useLeagueStore } from "stores/league-store";
import { useLeagueQueryComboBox } from "hooks/services/quries/use-league-query";
import { usePredictActions } from "stores/predict-store";

import useScheduleStore from "stores/schedule-store";
import useTeamScheduleStore from "stores/team-schedule-store";

interface ISelectLeagueProps {}

const SelectLeague: React.FunctionComponent<ISelectLeagueProps> = () => {
  const theme = useTheme();

  const country = useCountryStore((state) => state.selectedCountry);

  const { data } = useLeagueQueryComboBox(country?.alpha2);

  const {
    query: leagueQuery,
    setQuery: setLeagueQuery,
    isFocused: isLeagueFocused,
    setIsFocused: setLeagueFocused,
    filteredItems: leagueFilterItems,
  } = useSelectBox<ILeague>("name", data);

  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const selectLeague = useLeagueStore((state) => state.selectLeague);
  const predictClear = usePredictActions((state) => state.clear);
  const selectSeason = useScheduleStore((state) => state.setSeason);
  const setDateRagne = useScheduleStore((state) => state.setDateRange);
  const selectTeamSeason = useTeamScheduleStore((state) => state.setSeason);
  const setTeamDateRagne = useTeamScheduleStore((state) => state.setDateRange);

  return (
    <ComboBox
      label="League"
      items={data || []}
      selectedItem={selectedLeague}
      filteredItems={leagueFilterItems || []}
      query={leagueQuery}
      setQuery={setLeagueQuery}
      isFocused={isLeagueFocused}
      setIsFocused={setLeagueFocused}
      onChange={(value) => {
        const findLeague = findItemUsingKeywordInArray<ILeague>(
          "name",
          value,
          data,
        );

        if (findLeague) {
          const lastPossibleSeason = findLeague.possibleSeasons.at(-1) || null;
          const dataRange = getFirstAndLastDayOfMonth(
            lastPossibleSeason?.start || "",
          );

          selectLeague(findLeague);
          predictClear();

          selectSeason(lastPossibleSeason);
          setDateRagne({
            from: new Date(dataRange.firstDay),
            to: new Date(dataRange.lastDay),
          });

          selectTeamSeason(lastPossibleSeason);
          setTeamDateRagne({
            from: new Date(dataRange.firstDay),
            to: new Date(dataRange.lastDay),
          });
        }
      }}
      renderInput={(league) => (
        <div className="flex items-center">
          {league ? (
            <LazyLoadImage
              className="absolute left-3 h-6 w-6 shadow-md"
              src={league?.flag}
              alt={league?.name}
            />
          ) : (
            <ImageOffIcon className="absolute left-3 h-6 w-6 shadow-md" />
          )}
          <Combobox.Input
            className={clsx(
              "w-full py-3 pl-12 pr-10 text-sm font-semibold leading-5 text-MediumGrey focus:outline-none",
              theme === "dark" ? "bg-VeryDarkGreyDark" : "",
              theme === "light" ? "bg-LightGreyLightBg" : "",
            )}
            placeholder={`Search Country`}
            displayValue={() => selectedLeague?.name || ""}
            onChange={(event) => {
              return setLeagueQuery(event.target.value);
            }}
            onBlur={() => setLeagueFocused(false)}
            onFocus={() => setLeagueFocused(true)}
          ></Combobox.Input>
        </div>
      )}
      renderOption={(filterItem) => {
        return (
          <Combobox.Option
            key={filterItem?.leagueId}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? "bg-Main text-white" : "text-MediumGrey"
              }`
            }
            value={filterItem?.name}
          >
            {({ selected, active }) => (
              <>
                <span
                  className={`flex items-center gap-x-3 truncate text-sm ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  <LazyLoadImage
                    src={filterItem?.flag}
                    className="h-5 w-5 "
                    alt={filterItem?.flag}
                  />
                  {filterItem?.name}
                </span>
                {selected ? (
                  <span
                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                      active ? "text-white" : "text-Main"
                    }`}
                  >
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            )}
          </Combobox.Option>
        );
      }}
    />
  );
};

export default SelectLeague;
