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

interface rapidFootballTeamStanding {
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

interface rapidFootballLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: rapidFootballTeamStanding;
}

export type rapidFootballTeamStandingResponse = rapidFootballLeague[];
