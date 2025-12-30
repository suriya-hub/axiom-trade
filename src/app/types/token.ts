export const TOKEN_STAGES = ["new", "active", "final"] as const;
export type TokenStage = (typeof TOKEN_STAGES)[number];

export interface Token {
  id: string;
  name: string;
  lname: string;
  symbol: string;
  price: number;
  volume: number;
  liquidity: number;
  marketCap: number;
  stage: TokenStage;
  change24h: number;
  image: string;
  bannerimage: string;
  holder: number;
  website: string;
  tropy: number;
  crown: number;
  userinfo: number;
  pen: number;
  sniper: number;
  insiders: number;
  bundle: number;
  cap: number;
  seconds: number;
}
