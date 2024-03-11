interface Fixture {
  id: number;
  referee: null | string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: null | number;
    second: null | number;
  };
  venue: {
    id: null | number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: number;
  };
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: any;
}

interface Teams {
  home: Team;
  away: Team;
}

interface Goals {
  home: number | null;
  away: number | null;
}

interface Event {
  time: {
    elapsed: null | number;
    extra: null | number;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: {
    id: null | number;
    name: null | string;
  };
  assist: {
    id: null | number;
    name: null | string;
  };

  type: string;
  detail: string;
  comments: null | string;
}

export interface rapidFootballLiveMatchResponse {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: {
    halftime: Goals;
    fulltime: Goals;
    extratime: Goals;
    penalty: Goals;
  };
  events: Event[];
}

export interface rapidFootballNextMatchesResponse
  extends Omit<rapidFootballLiveMatchResponse, "events"> {}
