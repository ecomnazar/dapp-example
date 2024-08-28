import React from "react";
import { DrawerModal } from "../../shared/DrawerModal";
import { ReactSVG } from "react-svg";
import { CustomButton } from "../CustomButton";

interface Props {
  className?: string;
  modal: boolean;
  onClose: () => void;
}

export const WalletConnectedModal: React.FC<Props> = ({ modal, onClose }) => {
  return (
    <DrawerModal isOpen={modal} onClose={onClose}>
      <div className="flex-1" />
      <ReactSVG src="/greens/icons/tick.svg" className="w-[60px] mx-auto" />

      <div className="text-center mb-[40px] mt-[20px] space-y-4">
        <h2 className="text-greensPrimary text-[30px] font-bold">
          Successfully
        </h2>
        <h4 className="text-greensPrimary text-[17px] max-w-[300px] text-center mx-auto">
          You have connected your wallet to the game. You can close this window,
          it allows you back to the game.
        </h4>
      </div>

      <div className="relative">
        <ReactSVG src="/greens/icons/rounded-footer-background.svg" />
        <CustomButton title="Close" onClick={onClose} />
      </div>
    </DrawerModal>
  );
};
