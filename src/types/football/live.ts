export interface rapidFootballLiveMatchResponse {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: string;
    timestamp: number;
  };

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

  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };

  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
  };

  goals: {
    home: number;
    away: number;
  };

  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };

    fulltime: {
      home: number | null;
      away: number | null;
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
  events: {
    time: {
      elapsed: number | null;
      extra: number | null;
    };
    team: {
      id: number;
      name: string;
      logo: string;
    };

    player: {
      id: null | number;
      name: string | null;
    };

    assist: {
      id: null | number;
      name: null | string;
    };

    type: string;
    detail: string;
    comments: null | string;
  }[];
}
