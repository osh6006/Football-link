interface TeamColors {
  player: {
    primary: string;
    number: string;
    border: string;
  };
  goalkeeper: {
    primary: string;
    number: string;
    border: string;
  };
}

interface Player {
  player: {
    id: number;
    name: string;
    number: number;
    pos: string;
    grid: string | null;
  };
}

interface Team {
  id: number;
  name: string;
  logo: string;
  colors: TeamColors;
}

interface Coach {
  id: number;
  name: string;
  photo: string;
}

export interface rapidFootballLineUpResponse {
  team: Team;
  formation: string;
  startXI: Player[];
  substitutes: Player[];
  coach: Coach;
}
