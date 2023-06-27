export type Team = {
  team_id: string;
  abbreviation: string;
  active: boolean;
  first_name: string;
  last_name: string;
  conference: string;
  division: string;
  site_name: string;
  city: string;
  state: string;
  full_name: string;
};

export type BasketballPlayerStats = {
  last_name: string;
  first_name: string;
  display_name: string;
  position: string;
  minutes: number;
  points: number;
  assists: number;
  turnovers: number;
  steals: number;
  blocks: number;
  field_goals_attempted: number;
  field_goals_made: number;
  three_point_field_goals_attempted: number;
  three_point_field_goals_made: number;
  free_throws_attempted: number;
  free_throws_made: number;
  defensive_rebounds: number;
  offensive_rebounds: number;
  personal_fouls: number;
  team_abbreviation: string;
  is_starter: boolean;
  field_goal_percentage: number;
  three_point_percentage: number;
  free_throw_percentage: number;
};

export type BaseballBatterStats = {
  last_name?: string;
  first_name?: string;
  display_name?: string;
  position?: string;
  bat_order?: number;
  sub_bat_order?: number;
  sacrifices: number;
  at_bats: number;
  plate_appearances: number;
  singles: number;
  doubles: number;
  triples: number;
  home_runs: number;
  sac_flies: number;
  sac_hits: number;
  stolen_bases: number;
  caught_stealing: number;
  rbi_with_two_outs: number;
  total_bases: number;
  runs: number;
  hits: number;
  rbi: number;
  walks: number;
  strike_outs: number;
  left_on_base: number;
  hit_by_pitch: number;
  team_abbreviation: string;
  ops: number;
  avg: number;
  obp: number;
  slg: number;
  at_bats_per_home_run: number;
  at_bats_per_rbi: number;
  walk_rate: number;
  plate_appearances_per_rbi: number;
  plate_appearances_per_home_run: number;
  extra_base_hits: number;
  stolen_base_average: number;
  strikeout_rate: number;
  ops_string: string;
  slg_string: string;
  obp_string: string;
  avg_string: string;
  batting_highlights: string;
};

export type BaseballPitcherStats = {
  last_name?: string;
  first_name?: string;
  display_name?: string;
  pitch_order?: number;
  win: boolean;
  loss: boolean;
  save: boolean;
  hold: boolean;
  era: number;
  whip: number;
  innings_pitched: number;
  hits_allowed: number;
  runs_allowed: number;
  earned_runs: number;
  walks: number;
  intentional_walks: number;
  strike_outs: number;
  home_runs_allowed: number;
  pitch_count: number;
  pitches_strikes: number;
  wild_pitches: number;
  hit_by_pitch: number;
  errors: number;
  team_abbreviation: string;
};

type BaseballFielding = {
  last_name: string;
  first_name: string;
  display_name: string;
  erorrs: number;
  team_abbreviation: string;
};

export type Official = {
  position?: string;
  first_name: string;
  last_name: string;
};

type EventInformation = {
  temperature: number;
  site: {
    capacity: number;
    surface: string;
    name: string;
    state: string;
    city: string;
  };
  attendance: number;
  diration: string;
  status: string;
  season_type: string;
  start_date_type: Date;
};

type BasketballTotals = {
  minutes: number;
  points: number;
  assists: number;
  turnovers: number;
  steals: number;
  blocks: number;
  field_goals_attempted: number;
  field_goals_made: number;
  three_point_field_goals_attempted: number;
  three_point_field_goals_made: number;
  free_throws_attempted: number;
  free_throws_made: number;
  defensive_rebounds: number;
  offensive_rebounds: number;
  personal_fouls: number;
  field_goal_percentage: number;
  three_point_percentage: number;
  free_throw_percentage: number;
};

export interface NbaGame {
  league: string;
  away_team: Team;
  home_team: Team;
  away_period_scores: Array<number>;
  home_period_scores: Array<number>;
  away_stats: Array<BasketballPlayerStats>;
  home_stats: Array<BasketballPlayerStats>;
  officials: Array<Official>;
  event_information: EventInformation;
  away_totals: BasketballTotals;
  home_totals: BasketballTotals;
}

export interface MlbGame {
  league: string;
  away_team: Team;
  home_team: Team;
  away_period_scores: Array<number>;
  home_period_scores: Array<number>;
  away_errors: number;
  home_errors: number;
  away_batters: Array<BaseballBatterStats>;
  home_batters: Array<BaseballBatterStats>;
  away_pitchers: Array<BaseballPitcherStats>;
  home_pitchers: Array<BaseballPitcherStats>;
  away_fielding: Array<BaseballFielding>;
  home_fielding: Array<BaseballFielding>;
  officials: Array<Official>;
  event_information: EventInformation;
  away_batter_totals: BaseballBatterStats;
  home_batter_totals: BaseballBatterStats;
}
