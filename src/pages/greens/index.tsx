import { NextPage } from "next";
import React from "react";
import { FooterBackground } from "../../components/greens/FooterBackground";
import { HeaderBackground } from "../../components/greens/HeaderBackground";
import { PaymentTypesList } from "../../components/greens/PaymentTypesList";
import { Flex } from "../../components/Flex";
import { Container } from "../../components/Container";
import { ShadowText } from "../../components/greens/ShadowText";
import { useWalletConnectClient } from "../../contexts/ClientContext";
import { SAccounts, SAccountsContainer } from "../../components/app";
import { GreensFallback } from "../../components/greens/GreensFallback";

const GreensPage: NextPage = () => {
  const { session, accounts, isInitializing, disconnect } =
    useWalletConnectClient();

  const [modal, setModal] = React.useState("");
  const [initLoading, setInitLoading] = React.useState(true);

  const closeModal = () => setModal("");

  // const renderModal = () => {
  //   switch (modal) {
  //     case "pairing":
  //       if (typeof client === "undefined") {
  //         throw new Error("WalletConnect is not initialized");
  //       }
  //       return <PairingModal pairings={pairings} connect={connect} />;
  //     case "request":
  //       return (
  //         <RequestModal pending={isRpcRequestPending} result={rpcResult} />
  //       );
  //     case "ping":
  //       return <PingModal pending={isRpcRequestPending} result={rpcResult} />;
  //     case "requestLoader":
  //       return (
  //         <RequestLoaderModal
  //           pending={isRpcRequestPending}
  //           result={rpcResult}
  //         />
  //       );
  //     case "disconnect":
  //       return <LoaderModal title={"Disconnecting..."} />;
  //     default:
  //       return null;
  //   }
  // };

  React.useEffect(() => {
    if (session && modal === "pairing") {
      closeModal();
    }
  }, [session, modal]);

  React.useEffect(() => {
    const images = [
      "/icons/crypto/erc.svg",
      "/icons/crypto/sol.svg",
      "/icons/crypto/ton.svg",
      "/icons/crypto/trc.svg",
      "/greens/icons/back.svg",
      "/greens/icons/footer-background.svg",
    ];

    const fonts = [
      { family: "Tobi", url: "/fonts/TobiBlack.woff" },
      { family: "Tobi", url: "/fonts/TobiRegular.woff" },
    ];

    const loadImages = () => {
      return Promise.all(
        images.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve; // Считайте ошибку как успешную загрузку
            })
        )
      );
    };

    const loadFonts = () => {
      return Promise.all(
        fonts.map(
          (font) =>
            new Promise<void>((resolve) => {
              const fontFace = new FontFace(font.family, `url(${font.url})`);
              fontFace
                .load()
                .then(() => {
                  document.fonts.add(fontFace);
                  resolve();
                })
                .catch(() => resolve()); // Считайте ошибку как успешную загрузку
            })
        )
      );
    };

    Promise.all([loadImages(), loadFonts()])
      .then(() => {})
      .catch(() => {}) // Обработка ошибок
      .finally(() => {
        const timer = setTimeout(() => {
          setInitLoading(false);
          clearTimeout(timer);
        }, 1000);
      });
  }, []);

  if (initLoading) return <GreensFallback />;

  return (
    <div className="h-screen">
      <div className="fixed top-0 left-0 w-screen">
        <div className="relative w-full">
          <HeaderBackground />
          <Container className="absolute top-[18%] left-0">
            <Flex className="gap-x-4">
              {/* <BackButton className="-translate-y-0.5" /> */}
              <ShadowText
                title="Connect Wallet"
                shadowColor="#974A15"
                shadowSize="3"
                fontSize="30px"
              />
            </Flex>
          </Container>
        </div>
      </div>

      {isInitializing ? (
        <GreensFallback />
      ) : (
        <>
          {accounts.length ? (
            <SAccountsContainer>
              <h3>Accounts</h3>
              <button onClick={disconnect}>Disconnect</button>
              <SAccounts>
                {accounts.map((account, index) => {
                  const [namespace, reference, address] = account.split(":");
                  const chainId = `${namespace}:${reference}`;
                  return (
                    <div key={index}>
                      <h2>{chainId}</h2>
                      <h3>{address}</h3>
                    </div>
                  );
                })}
              </SAccounts>
            </SAccountsContainer>
          ) : (
            <Container className="pt-[25vw] space-y-3">
              <PaymentTypesList />
            </Container>
          )}
        </>
      )}

      <FooterBackground className="fixed bottom-0 left-0 w-full" />

      {/*  */}

      {/* <Modal show={!!modal} closeModal={closeModal}> */}
      {/* {renderModal()} */}
      {/* </Modal> */}
    </div>
  );
};

export default GreensPage;
