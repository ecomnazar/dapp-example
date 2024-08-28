export interface IPaymentMethod {
  icon: string;
  title: string;
  width: number;
  type: TBlockchainType;
  chain: string;
}

export type TBlockchainType = "tron" | "ton" | "erc" | "sol";
