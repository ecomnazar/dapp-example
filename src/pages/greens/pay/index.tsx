import React from "react";
import { useJsonRpc } from "../../../contexts/JsonRpcContext";
import { useWalletConnectClient } from "../../../contexts/ClientContext";

const GreensPayPage = () => {
  const { tronRpc } = useJsonRpc();

  const { connect, isInitializing } = useWalletConnectClient();

  const sendTransaction = () => {
    tronRpc.testSignTransaction(
      "tron:0x2b6653dc",
      "TKBzYx4mrkQRSkwnzVNkibT7dfWj56VrTk"
    );
  };

  if (isInitializing) return <>Loading</>;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button onClick={sendTransaction} className="bg-green-300 p-2 rounded-md">
        SEND TRANSACTION
      </button>
      <button
        onClick={() => connect("tron:0x2b6653dc")}
        className="bg-green-300 p-2 rounded-md"
      >
        Connect
      </button>
    </div>
  );
};

export default GreensPayPage;
