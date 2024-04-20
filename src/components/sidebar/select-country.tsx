import iso from "iso-3166-1";
import { findItemUsingKeywordInArray } from "utils/util";

import { CheckIcon, ImageOffIcon } from "lucide-react";
import { Combobox } from "@headlessui/react";
import ComboBox from "components/navbar/combo-box";
import { ICountry, useCountryStore } from "stores/country-store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import clsx from "clsx";
import { useTheme } from "stores/theme-store";
import useSelectBox from "hooks/use-select-box";
import { useLeagueStore } from "stores/league-store";
import { usePredictActions } from "stores/predict-store";

interface ISelectCountryProps {}

const SelectCountry: React.FunctionComponent<ISelectCountryProps> = (props) => {
  const theme = useTheme();

  // countries
  const countries = iso.all().map((el) => {
    return {
      ...el,
      flag: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${el.alpha2.toUpperCase()}.svg`,
    };
  });
  const country = useCountryStore((state) => state.selectedCountry);
  const selectCountry = useCountryStore((state) => state.selectCountry);
  const selectLeague = useLeagueStore((state) => state.selectLeague);
  const predictClear = usePredictActions((state) => state.clear);

  const {
    query: countryQuery,
    setQuery: setCountryQuery,
    isFocused: countryFocused,
    setIsFocused: setCountryFocused,
    filteredItems: countryFilterItems,
  } = useSelectBox<ICountry>("country", countries);

  console.log(countries);

  return (
    <ComboBox
      label="Country"
      items={countries}
      selectedItem={country}
      filteredItems={countryFilterItems || []}
      query={countryQuery}
      setQuery={setCountryQuery}
      isFocused={countryFocused}
      setIsFocused={setCountryFocused}
      onChange={(value) => {
        const findCountry = findItemUsingKeywordInArray<ICountry>(
          "country",
          value,
          countries,
        );

        if (findCountry) {
          selectCountry(findCountry);
          selectLeague(null);
          predictClear();
        }
      }}
      renderInput={(country) => (
        <div className="flex items-center">
          {country ? (
            <img
              className="absolute left-3 h-6 w-6 shadow-md"
              src={country?.flag}
              alt={country?.alpha2}
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
            displayValue={() => country?.country || ""}
            onChange={(event) => {
              return setCountryQuery(event.target.value);
            }}
            onBlur={() => setCountryFocused(false)}
            onFocus={() => setCountryFocused(true)}
          ></Combobox.Input>
        </div>
      )}
      renderOption={(filterItem) => {
        return (
          <Combobox.Option
            key={filterItem?.alpha2}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? "bg-Main text-white" : "text-MediumGrey"
              }`
            }
            value={filterItem?.country}
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
                    alt={filterItem?.alpha2}
                  />
                  {filterItem?.country}
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

export default SelectCountry;
