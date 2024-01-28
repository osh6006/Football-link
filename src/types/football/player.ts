interface Birth {
  date: string;
  place: string;
  country: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

interface Games {
  appearences: 35;
  lineups: 35;
  minutes: 3087;
  number: null;
  position: "Attacker";
  rating: "7.642857";
  captain: false;
}

interface Substitutes {
  in: number;
  out: number;
  bench: number;
}

interface Shots {
  total: number;
  on: number;
}

interface Goals {
  total: number;
  conceded: number;
  assists: number;
  saves: number | null;
}

interface Passes {
  total: number;
  key: number;
  accuracy: number;
}

interface Tackles {
  total: number;
  blocks: number;
  interceptions: number;
}

interface Duels {
  total: number;
  won: number;
}

interface Dribbles {
  attempts: number;
  success: number;
  past: number | null;
}

interface Fouls {
  drawn: number;
  committed: number;
}

interface Cards {
  yellow: number;
  yellowred: number;
  red: number;
}

interface Penalty {
  won: null | number;
  commited: null | number;
  scored: number;
  missed: number;
  saved: null | number;
}

interface Statistics {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  takles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

export interface rapidPlayerResponse {
  player: Player;
  statistics: Statistics[];
}
