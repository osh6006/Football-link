interface rapidFootballTeamStandingTeam {
  id: number;
  name: string;
  logo: string;
}

interface rapidFootballTeamStandingMatchInfo {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goal: {
    for: number;
    against: number;
  };
}

export interface rapidFootballTeamStanding {
  rank: number;
  team: rapidFootballTeamStandingTeam;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: rapidFootballTeamStandingMatchInfo;
  home: rapidFootballTeamStandingMatchInfo;
  away: rapidFootballTeamStandingMatchInfo;
  update: "2024-01-25T00:00:00+00:00";
}

export interface rapidFootballLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: rapidFootballTeamStanding[][];
}

export interface rapidFootballTeamStandingResponse {
  league: rapidFootballLeague;
}

interface Team {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: false;
  logo: string;
}

interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

export interface rapidFootballTeamInfoResponse {
  team: Team;
  venue: Venue;
}

export interface rapidFootballCoachInfoResponse {
  id: number;
  name: string;
  firstname: number;
  lastname: number;
  age: number;
  photo: string;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: null | number;
  weight: null | number;

  team: {
    id: number;
    name: string;
    logo: string;
  };
  career: {
    team: {
      id: number;
      start: string;
    };

    start: string | null;
    end: null | string;
  }[];
}

export interface rapidFootballTeamDetailStandingResponse {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: {
      rank: number;
      team: {
        id: number;
        name: string;
        logo: string;
      };
      points: number;
      goalsDiff: number;
      group: string;
      form: string;
      status: string;
      description: string;
      all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };
      home: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };
      away: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };

      update: string;
    }[][];
  };
}

export interface SquadPlayer {
  age: number;
  id: number;
  name: string;
  number: number;
  photo: string;
  position: string;
}

export interface rapidFootballTeamSquadStandingResponse {
  players: {
    age: number;
    id: number;
    name: string;
    number: number;
    photo: string;
    position: string;
  }[];

  team: {
    id: number;
    logo: string;
    name: string;
  };
}

interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface Country {
  name: string;
  code: string | null;
  flag: string | null;
}

interface Season {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: {
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
  };
}

export interface rapidFootballTeamLeaguesResponse {
  league: League;
  country: Country;
  seasons: Season[];
}
