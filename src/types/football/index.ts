export type {
  ICoverage,
  IFootballLeague,
  IFootballLeagueCountry,
  IFootballLeagueResponse,
  IFootballSeason,
  ISupabaseFootballLeague,
} from "./league";

export type {
  rapidFootballTeamStandingResponse,
  rapidFootballTeamStanding,
  rapidFootballTeamInfoResponse,
  rapidFootballCoachInfoResponse,
  rapidFootballTeamDetailStandingResponse,
  rapidFootballTeamLeaguesResponse,
} from "./team";

export type {
  rapidFootballLiveMatchResponse,
  rapidFootballNextMatchesResponse,
} from "./schedule";

export type { rapidFootballLineUpResponse } from "./live";

export type { rapidPlayerResponse, Player, PlayerSelectType } from "./player";

export type { LocalNewsResponse, GlobalNewsResponse } from "./news";
