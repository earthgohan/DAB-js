import { HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';

export interface NFTDetails {
  index: bigint;
  canister: string;
  id?: string;
  name?: string;
  url: string;
  metadata: any;
  standard: string;
  collection?: string;
}

export default abstract class NFT {
  abstract standard: string;

  agent: HttpAgent;

  canisterId: string;

  constructor(canisterId: string, agent: HttpAgent) {
    this.agent = agent;
    this.canisterId = canisterId;
  }

  abstract getUserTokens(principal: Principal): Promise<NFTDetails[]>;

  abstract transfer(principal: Principal, tokenIndex: number): Promise<void>;

  abstract details(tokenIndex: number): Promise<NFTDetails>;
}
