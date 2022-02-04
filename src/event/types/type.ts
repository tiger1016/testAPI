export enum RequestType {
  deposit = "deposit",
  withdraw = "withdraw",
  transfer = "transfer"
}

export class BalanceType {
  id: string;
  balance: number;
}