export interface PredictResponse {
  fixture: Fixture;
  periods: Periods;
  venue: Venue;
  status: Status;
  league: League;
  teams: Teams;
  goals: Goals;
}

interface Fixture {
  id: string;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
}

interface Periods {
  first: number;
  second: number;
}

interface Venue {
  id: null;
  name: string;
  city: string;
}

interface Status {
  long: string;
  short: string;
  elapsed: number;
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
  winner: boolean;
}

interface Teams {
  home: Team;
  away: Team;
}

interface Score {
  home: number | null;
  away: number | null;
}

interface GameScore {
  halftime: Score;
  fulltime: Score;
  extratime: Score; // 혹은 별도의 인터페이스로 정의 가능
  penalty: Score; // 혹은 별도의 인터페이스로 정의 가능
}

interface Goals {
  home: number;
  away: number;
  score: GameScore;
}
