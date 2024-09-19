import React from "react";
import { useJsonRpc } from "../../../contexts/JsonRpcContext";
import { useWalletConnectClient } from "../../../contexts/ClientContext";
import { PAYMENT_METHODS } from "../../../constants/paymentMethods";
import { useUrlParams } from "../../../shared/hooks/useUrlParams";
import { GreensFallback } from "../../../components/greens/GreensFallback";
import { FooterBackground } from "../../../components/greens/FooterBackground";
import { Header } from "../../../components/greens/Header";
import { Card } from "../../../components/greens/Card";
import { Container } from "../../../components/Container";
import toast from "react-hot-toast";

const GreensPayPage = () => {
  const { tronRpc } = useJsonRpc();

  const { isInitializing, client } = useWalletConnectClient();

  const [getParam] = useUrlParams();
  const receiverAddress = getParam("receiverAddress");

  const filteredPaymentMethods = PAYMENT_METHODS.filter(
    (method) => method.type === getParam("blockchainType")
  );

  const sendTransaction = () => {
    tronRpc.testSignTransaction("tron:0x2b6653dc", receiverAddress);
    toast.loading("Loading", {
      position: "top-right",
      style: {
        color: "#974A15",
      },
    });
  };

  React.useEffect(() => {
    if (isInitializing || typeof client === "undefined") return;
    // sendTransaction(receiverAddress);
  }, [isInitializing, client]);

  if (isInitializing) return <GreensFallback />;

  return (
    <div className="modal">
      <Header title="Select method" />

      <Container className="pt-[25vw] space-y-3">
        {filteredPaymentMethods?.map((paymentMethod) => {
          return (
            <Card
              key={paymentMethod.chain}
              paymentMethod={paymentMethod}
              onClick={() => sendTransaction()}
              isActive={true}
              // className={clsx("", {
              //   "pointer-events-none": hasClicked,
              // })}
            />
          );
        })}
      </Container>

      {/* <button onClick={getBalance} className="bg-green-400 p-2">
        get balance
      </button>
      <button onClick={checkTransactionStatus} className="bg-green-400 p-2">
        check transaction status
      </button>
      <button onClick={getContractFunctions} className="bg-green-400 p-2">
        get contract functions
      </button>
      <button onClick={sendTransaction} className="bg-green-300 p-2 rounded-md">
        SEND TRANSACTION
      </button>
      <button
        onClick={() => connect("tron:0x2b6653dc")}
        className="bg-green-300 p-2 rounded-md"
      >
        Connect
      </button> */}
      <FooterBackground />
    </div>
  );
};

export default GreensPayPage;
