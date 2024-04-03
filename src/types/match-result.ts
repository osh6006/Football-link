interface Player {
  team: {
    id: number;
    name: string;
    logo: string;
    update: string;
  };
  players: {
    player: {
      id: number;
      name: string;
      photo: string;
    };
    statistics: {
      games: {
        minutes: number;
        number: number;
        position: string;
        rating: string;
        captain: boolean;
        substitute: boolean;
      };
      offsides: null | string | boolean;
      shots: {
        total: number;
        on: number;
      };

      goals: {
        total: number | null;
        conceded: number | null;
        assists: number | null;
        saves: number | null;
      };
      passes: {
        total: number;
        key: number;
        accuracy: string;
      };
      tackles: {
        total: null | number;
        blocks: number;
        interceptions: number;
      };
      duels: {
        total: number;
        won: number;
      };
      dribbles: {
        attempts: number;
        success: number;
        past: null | number;
      };
      fouls: {
        drawn: number;
        committed: number;
      };
      cards: {
        yellow: number;
        red: number;
      };
      penalty: {
        won: null | boolean;
        commited: null | number;
        scored: number;
        missed: number;
        saved: number;
      };
    }[];
  };
}

interface Statistic {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  statistics: {
    type: string;
    value: number;
  }[];
}

export interface IMatchResultLineUp {
  team: {
    id: number;
    name: string;
    logo: string;
  };

  coach: {
    id: number;
    name: string;
  };

  formation: string;
  startXI: {
    player: {
      grid: string;
      id: number;
      name: string;
      number: number;
      pos: string;
    };
  }[];
  substitutes: Substitute[];
}

interface Substitute {
  player: {
    grid: string;
    id: number;
    name: string;
    number: number;
    pos: string;
  };
}

interface TeamData {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

interface Event {
  time: {
    elapsed: number;
    extra: any; // 여기서는 타입을 따로 지정하지 않았습니다. 필요에 따라 수정 가능합니다.
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: {
    id: number;
    name: string;
  };
  assist: {
    id: number | null;
    name: string | null;
  };
  type: string;
  detail: string;
  comments: string | null;
}

interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: number;
    second: number;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: number;
  };
}

export interface IMatchResultTeams {
  home: TeamData;
  away: TeamData;
}

export interface rapidFootballTeamLeaguesResponse {
  fixture: Fixture;
  events: Event[];
  lineups: IMatchResultLineUp[];
  statistics: Statistic[];
  players: Player[];
  teams: IMatchResultTeams;
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}
