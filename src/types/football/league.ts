interface Fixtures {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}

export interface ICoverage {
  fixtures: Fixtures;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

export interface IFootballSeason {
  year: number;
  start: string;
  end: string;
  current: false;
}

export interface IFootballLeagueCountry {
  name: string;
  code: string;
  flag: string;
}

export interface IFootballLeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}
export interface IFootballLeagueResponse {
  response: IFootballLeague & IFootballLeagueCountry & IFootballSeason[];
}

export interface ISupabaseFootballLeague {
  leagueId: number;
  name: string;
  country: string;
  flag: string;
  logo: string;
}

export interface ISupabaseFootballLeagueType {
  premier: ISupabaseFootballLeague;
  budes: ISupabaseFootballLeague;
  serea: ISupabaseFootballLeague;
  league1: ISupabaseFootballLeague;
}

export interface ISupabaseLeague {
  country: string | null;
  created_at: string;
  flag: string | null;
  id: string;
  logo: string | null;
  name: string | null;
  rapid_football_league_id: number | null;
  sports_id: string | null;
}
