export interface Sports {
  name: string;
  icon: string;
  value: string;
}

export interface InsertSports extends Sports {
  user_id?: string;
}

export interface SoccerLeague {
  name: string;
}
