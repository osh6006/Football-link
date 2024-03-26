interface ICoverage {
  fixtures: {
    events: boolean;
    lineups: boolean;
    statistics_fixtures: boolean;
    statistics_players: boolean;
  };
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

export interface ILeagueSeason {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: ICoverage;
}

interface ICountry {
  name: string;
  code: string;
  flag: string;
}

interface ILeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface ILeagueResponse {
  league: ILeague;
  country: ICountry;
  seasons: ILeagueSeason[];
}
