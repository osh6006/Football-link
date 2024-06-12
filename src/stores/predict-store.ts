import { rapidFootballTeamStanding } from "types/football";
import { SelectorHook, createStore } from "./root-store";
import { produce } from "immer";

interface IPredictState {
  homeTeam: rapidFootballTeamStanding | null;
  awayTeam: rapidFootballTeamStanding | null;
  teamArr: rapidFootballTeamStanding[] | null | undefined;
}

interface IPredictActions {
  setHomeTeam: (team: rapidFootballTeamStanding | null) => void;
  setAwayTeam: (team: rapidFootballTeamStanding | null) => void;
  setTeamArr: (teamArr: rapidFootballTeamStanding[]) => void;
  clear: () => void;
}

type IPredictType = IPredictState & IPredictActions;

const usePredictStore = createStore<IPredictType>((set) => ({
  homeTeam: null,
  awayTeam: null,
  teamArr: [],
  setHomeTeam: (team) => {
    set(
      produce((state) => {
        state.homeTeam = team;
      }),
    );
  },
  setAwayTeam: (team) => {
    set(
      produce((state) => {
        state.awayTeam = team;
      }),
    );
  },
  setTeamArr: (teamArr) => {
    set(
      produce((state) => {
        state.teamArr = teamArr;
      }),
    );
  },
  clear: () => {
    set(
      produce((state) => {
        state.homeTeam = null;
        state.awayTeam = null;
        state.teamArr = null;
      }),
    );
  },
}));

export const usePredicts: SelectorHook<IPredictState, "homeTeam"> = (
  selector = (state: IPredictState) => state.homeTeam,
) => usePredictStore(selector);

export const usePredictActions: SelectorHook<IPredictActions, "setHomeTeam"> = (
  selector = (state: IPredictActions) => state.setHomeTeam,
) => usePredictStore(selector);
