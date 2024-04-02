interface Team {
  country: string;
  founded: number | null;
  id: number;
  logo: string;
  name: string;
  national: boolean;
}

interface Venue {
  address: string | null;
  capacity: number | null;
  city: string | null;
  id: number | null;
  image: string | null;
  name: string | null;
  surface: string | null;
}

export interface ITeamSearchResult {
  team: Team;
  venue: Venue;
}

interface BirthInfo {
  date: string;
  place: string;
  country: string;
}

interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: BirthInfo;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

interface TeamInfo {
  id: number;
  name: string;
  logo: string;
}

interface LeagueInfo {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

interface GamesInfo {
  appearences: number;
  lineups: number;
  minutes: number;
  number: number | null;
  position: string;
  rating: string;
  captain: boolean;
}

interface SubstitutesInfo {
  in: number;
  out: number;
  bench: number;
}

interface ShotsInfo {
  total: number;
  on: number;
}

interface GoalsInfo {
  total: number;
  conceded: number | null;
  assists: number;
  saves: number | null;
}

interface PassesInfo {
  total: number;
  key: number;
  accuracy: number;
}

interface TacklesInfo {
  total: number | null;
  blocks: number | null;
  interceptions: number;
}

interface DuelsInfo {
  total: number | null;
  won: number | null;
}

interface DribblesInfo {
  attempts: number;
  success: number;
  past: number | null;
}

interface FoulsInfo {
  drawn: number;
  committed: number;
}

interface CardsInfo {
  yellow: number;
  yellowred: number;
  red: number;
}

interface PenaltyInfo {
  won: number | null;
  commited: number | null;
  scored: number;
  missed: number;
  saved: number | null;
}

interface PlayerStatistics {
  team: TeamInfo;
  league: LeagueInfo;
  games: GamesInfo;
  substitutes: SubstitutesInfo;
  shots: ShotsInfo;
  goals: GoalsInfo;
  passes: PassesInfo;
  tackles: TacklesInfo;
  duels: DuelsInfo;
  dribbles: DribblesInfo;
  fouls: FoulsInfo;
  cards: CardsInfo;
  penalty: PenaltyInfo;
}

export interface IPlayerSearchResult {
  player: Player;
  statistics: PlayerStatistics[];
}
