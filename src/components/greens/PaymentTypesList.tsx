import React from "react";
import { PAYMENT_METHODS } from "../../constants/paymentMethods";
import {
  useWalletConnectClient,
  web3Modal,
} from "../../contexts/ClientContext";
import { Card } from "./Card";
import toast from "react-hot-toast";
import clsx from "clsx";
import { greensConnectWalletApi } from "../../shared/api/greensApi";
import { TBlockchainType } from "../../helpers/interfaces";
import { useUrlParams } from "../../shared/hooks/useUrlParams";
import { WalletConnectedModal } from "./modals/WalletConnectedModal";
import { GREENS_MINIAPP_URL } from "../../constants/urls";

export const PaymentTypesList = () => {
  const { chains, setChains, connect, client, accounts, disconnect } =
    useWalletConnectClient();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [selectedBlockchainType, setSelectedBlockchainType] =
    React.useState<TBlockchainType>("tron");

  const [getParam] = useUrlParams();

  let toastId: any;

  const showToast = () => {
    setHasClicked(true);
    toastId = toast.loading("Connecting...", {
      position: "top-right",
      style: {
        color: "#974A15",
      },
    });
  };

  const dismissToast = () => {
    if (toastId) {
      setHasClicked(false);
      toast.dismiss(toastId);
    }
  };

  const handleChainSelectionClick = (
    chainId: string,
    blockchainType: TBlockchainType
  ) => {
    showToast();
    setHasClicked(true);
    setSelectedBlockchainType(blockchainType);
    setChains([chainId]);

    const onConnect = async () => {
      if (typeof client === "undefined") {
        throw new Error("WalletConnect is not initialized");
      }
      connect(chainId);
    };
    onConnect();
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    if (typeof window !== "undefined") {
      window.Telegram.WebApp.openTelegramLink(GREENS_MINIAPP_URL);
    }
  };

  web3Modal.subscribeModal((modal) => {
    if (!modal.open) {
      console.log("dismiss");
      dismissToast();
    }
  });

  React.useEffect(() => {
    if (accounts.length) {
      const [namespace, reference, address] = accounts[0].split(":");
      greensConnectWalletApi({
        token: getParam("tkn"),
        blockchainType: selectedBlockchainType,
        address,
      });
      setIsModalOpen(true);
    }
  }, [accounts]);

  return (
    <>
      {accounts.length ? (
        <>
          {accounts.map((account, index) => {
            const [namespace, reference, address] = account.split(":");
            const chainId = `${namespace}:${reference}`;
            return (
              <div key={index}>
                <button onClick={disconnect}>Disconnect wallet</button>
                <h2>{chainId}</h2>
                <h3>{address}</h3>
              </div>
            );
          })}
        </>
      ) : (
        PAYMENT_METHODS.map((paymentMethod) => {
          const { chain, type } = paymentMethod;
          return (
            <Card
              key={paymentMethod.chain}
              paymentMethod={paymentMethod}
              onClick={() => handleChainSelectionClick(chain, type)}
              isActive={chains.includes(paymentMethod.chain)}
              className={clsx("", {
                "pointer-events-none": hasClicked,
              })}
            />
          );
        })
      )}
      {/* MODALS */}
      <WalletConnectedModal modal={isModalOpen} onClose={onCloseModal} />
    </>
  );
};
