import React from "react";
import { ReactSVG } from "react-svg";
import { CustomButton } from "../CustomButton";
import { getMobileOperatingSystem } from "../../../shared/getMobileOperationSystem";
import { useI18n } from "../../../shared/hooks/useI18n";
import { DrawerModal } from "../../shared/DrawerModal";

interface Props {
  className?: string;
  modal: boolean;
  onClose: () => void;
}

export const WalletNotConnectedModal: React.FC<Props> = ({
  modal,
  onClose,
}) => {
  const isRu = useI18n();

  const os = getMobileOperatingSystem();

  const reconnectWallet = isRu
    ? "Подключите повторно кошелек."
    : "Reconnect the wallet.";
  const title = isRu ? "Кошелек не подключен" : "Wallet is not connected";

  const descriptionAndroidRu = (
    <div className="font-normal">
      1. В Телеграме перейдите в{" "}
      <span className="font-bold">Настройки / Настройки чата</span> и нажмите
      отключить <span className="font-bold">Браузер внутри приложения.</span>{" "}
      <br />
      <br />
      2. {reconnectWallet}
    </div>
  );

  const descriptionIOSRu = (
    <div className="font-normal">
      1. В Телеграме перейдите в{" "}
      <span className="font-bold">
        Настройки / Данные и память / Другие / Браузер
      </span>{" "}
      и нажмите <span className="font-bold">Safari.</span> <br />
      <br />
      2. {reconnectWallet}
    </div>
  );

  const descriptionAndroidEn = (
    <div className="font-normal">
      1. In Telegram go to{" "}
      <span className="font-bold">Settings / Chat settings</span> and click{" "}
      <span className="font-bold">In-App Browser.</span> <br />
      <br />
      2. {reconnectWallet}
    </div>
  );
  const descriptionIOSEn = (
    <div className="font-normal">
      1. In Telegram go to{" "}
      <span className="font-bold">
        Settings / Data and storage / Other / Browser
      </span>{" "}
      and click <span className="font-bold">Safari.</span> <br />
      <br />
      2. {reconnectWallet}
    </div>
  );

  const description = () => {
    if (os === "iOS") {
      return isRu ? descriptionIOSRu : descriptionIOSEn;
    } else if (os === "Android") {
      return isRu ? descriptionAndroidRu : descriptionAndroidEn;
    }
  };

  return (
    <DrawerModal
      isOpen={modal}
      onClose={onClose}
      height={450}
      disableAnimation={true}
    >
      <ReactSVG
        src="/greens/icons/close.svg"
        className="w-[36px] absolute top-3 right-3"
        onClick={onClose}
      />
      <div className="flex-1" />
      <ReactSVG src="/greens/icons/info.svg" className="w-[60px] mx-auto" />

      <div className="text-center mb-[40px] mt-[20px] space-y-4">
        <h2 className="text-greensPrimary text-[30px] font-bold">{title}</h2>
        <h4 className="text-greensPrimary text-[17px] max-w-[300px] text-center mx-auto">
          {description()}
        </h4>
      </div>

      <div className="relative">
        <ReactSVG
          src="/greens/icons/rounded-footer-background.svg"
          className="min-h-[25vw]"
        />
        <CustomButton title={isRu ? "Закрыть" : "Close"} onClick={onClose} />
      </div>
    </DrawerModal>
  );
};
