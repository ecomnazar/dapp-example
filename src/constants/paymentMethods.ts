import { IPaymentMethod } from "../helpers/interfaces";

export const PAYMENT_METHODS: IPaymentMethod[] = [
  {
    icon: "icons/crypto/erc.svg",
    title: "ERC 20",
    width: 26,
    type: "erc",
    chain: "eip155:1",
  },
  {
    icon: "icons/crypto/trc.svg",
    title: "TRC 20",
    width: 38,
    type: "tron",
    chain: "tron:0x2b6653dc",
  },
  // {
  //   icon: "icons/crypto/ton.svg",
  //   title: "TON",
  //   width: 34,
  //   type: "ton",
  //   chain: "ton:0:2b6653dc",
  // },
  {
    icon: "icons/crypto/sol.svg",
    title: "SOL",
    width: 34,
    type: "sol",
    chain: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
];
