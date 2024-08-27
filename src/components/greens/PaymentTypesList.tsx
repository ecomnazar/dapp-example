import React from "react";
import { PAYMENT_METHODS } from "../../constants/paymentMethods";
import { useWalletConnectClient } from "../../contexts/ClientContext";
import { Card } from "./Card";
import toast from "react-hot-toast";

export const PaymentTypesList = () => {
  const { chains, setChains, connect, client, accounts } =
    useWalletConnectClient();
  const [loading, setLoading] = React.useState(false);

  const handleChainSelectionClick = (chainId: string) => {
    setLoading(true);
    toast.loading("Connecting...", {
      position: "top-right",
      style: {
        color: "#974A15",
      },
    });
    setChains([chainId]);

    const onConnect = async () => {
      console.log("213");
      if (typeof client === "undefined") {
        throw new Error("WalletConnect is not initialized");
      }
      const res = await connect(chainId);
      console.log("hi");

      console.log(res);
      toast.dismiss();
      setLoading(false);
    };

    onConnect();
  };

  // React.useEffect(() => {
  //   if (accounts) {
  //     setLoading(false);
  //   }
  // }, [accounts]);

  return (
    <>
      {PAYMENT_METHODS.map((paymentMethod) => {
        return (
          <Card
            key={paymentMethod.chain}
            paymentMethod={paymentMethod}
            onClick={() => handleChainSelectionClick(paymentMethod.chain)}
            isActive={chains.includes(paymentMethod.chain)}
          />
        );
      })}
    </>
  );
};
