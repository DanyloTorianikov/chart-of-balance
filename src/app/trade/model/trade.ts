export interface Trade {
  id: number;
  exitPrice: number;
  entryPrice: number;
  entryDate: string;
  exitDate: string;
  profit: number;
  balance: number;
}
