import {
  mergeQueryKeys,
  inferQueryKeyStore,
} from "@lukemorales/query-key-factory";

import { banners } from "./banner";
import { leagues } from "./league";
import { lives } from "./live";
import { matchResults } from "./match-result";
import { news } from "./news";
import { predicts } from "./predict";
import { players } from "./player";
import { ranks } from "./rank";
import { schedules } from "./schedules";
import { searches } from "./search";
import { teams } from "./team";

export const queries = mergeQueryKeys(
  banners,
  leagues,
  lives,
  matchResults,
  news,
  predicts,
  players,
  ranks,
  schedules,
  searches,
  teams,
);

export type QueryKeys = inferQueryKeyStore<typeof queries>;
