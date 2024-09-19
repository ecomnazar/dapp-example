import React from "react";
import { PAYMENT_METHODS } from "../../constants/paymentMethods";
import {
  useWalletConnectClient,
  web3Modal,
} from "../../contexts/ClientContext";
import { Card } from "./Card";
import toast from "react-hot-toast";
import clsx from "clsx";
import {
  getUserWalletApi,
  greensConnectWalletApi,
} from "../../shared/api/greensApi";
import { TBlockchainType } from "../../helpers/interfaces";
import { useUrlParams } from "../../shared/hooks/useUrlParams";
import { WalletConnectedModal } from "./modals/WalletConnectedModal";
import {
  GREENS_MINIAPP_EMPTY_URL,
  GREENS_MINIAPP_URL,
} from "../../constants/urls";
import { GreensFallback } from "./GreensFallback";
import { log } from "fp-ts/lib/Console";
import { checkIsInTelegram } from "../../shared/checkIsInTelegram";
import { getMobileOperatingSystem } from "../../shared/getMobileOperationSystem";
import { WalletNotConnectedModal } from "./modals/WalletNotConnectedModal";

export const PaymentTypesList = () => {
  const { chains, setChains, connect, client, accounts, disconnect } =
    useWalletConnectClient();

  const [getUserWalletError, setGetUserWalletError] = React.useState(false);
  const [getUserWalletLoading, setGetUserWalletLoading] = React.useState(true);
  const [isWalletConnectedModalOpen, setIsWalletConnectedModalOpen] =
    React.useState(false);
  const [isWalletNotConnectedModalOpen, setIsWalletNotConnectedModalOpen] =
    React.useState(false);

  const [hasClicked, setHasClicked] = React.useState(false);
  const [selectedBlockchainType, setSelectedBlockchainType] =
    React.useState<TBlockchainType>("tron");

  const [getParam] = useUrlParams();

  const filteredPaymentMethods = PAYMENT_METHODS.filter(
    (method) => method.type === getParam("blockchainType")
  );

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
    if (hasClicked) return;
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

  const onCloseWalletConnectedModal = () => {
    setIsWalletConnectedModalOpen(false);
    if (typeof window !== "undefined") {
      window.location.href = GREENS_MINIAPP_URL;
    }
  };

  const onCloseWalletNotConnectedModal = () => {
    window.location.href = "tg://settings";
    setTimeout(() => {
      window.open("", "_self");
      window.close();
    }, 1000);
  };

  web3Modal.subscribeModal((modal) => {
    setGetUserWalletError(false);
    if (!modal.open) {
      dismissToast();
    }
  });

  React.useEffect(() => {
    if (accounts.length && !getUserWalletLoading) {
      const [namespace, reference, address] = accounts[0].split(":");
      if (!getUserWalletError) {
        greensConnectWalletApi({
          token: getParam("tkn"),
          blockchainType: selectedBlockchainType,
          address,
        });
        setIsWalletConnectedModalOpen(true);
      }
    }
  }, [accounts, getUserWalletLoading]);

  React.useEffect(() => {
    if (checkIsInTelegram()) return;
    const fetchUserWallet = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tkn = searchParams.get("tkn") || "";
      const blockchainType = searchParams.get("blockchainType") || "";

      const response = await getUserWalletApi(tkn);
      if (!response.length) {
        disconnect();
        setGetUserWalletError(true);
      }

      setGetUserWalletLoading(false);
      const chain = PAYMENT_METHODS.find(
        (method) => method.type === blockchainType
      );
      handleChainSelectionClick(chain?.chain!, chain?.type!);
    };
    fetchUserWallet();
  }, []);

  return (
    <>
      {getUserWalletLoading ? (
        <div className="text-[#974A15] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Loading...
        </div>
      ) : (
        <>
          {filteredPaymentMethods?.map((paymentMethod) => {
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
          })}
        </>
      )}

      {/* MODALS */}
      <WalletConnectedModal
        modal={isWalletConnectedModalOpen && !!accounts.length}
        onClose={onCloseWalletConnectedModal}
      />
      <WalletNotConnectedModal
        modal={checkIsInTelegram()}
        onClose={onCloseWalletNotConnectedModal}
      />
    </>
  );
};
