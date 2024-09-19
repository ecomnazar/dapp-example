import React from "react";
import { ReactSVG } from "react-svg";
import { CustomButton } from "../../../../components/greens/CustomButton";
import { useI18n } from "../../../../shared/hooks/useI18n";
import { GREENS_MINIAPP_EMPTY_URL } from "../../../../constants/urls";

const GreensSuccessPage = () => {
  const isRu = useI18n();

  const onClose = () => {
    if (typeof window !== "undefined") {
      window.location.href = GREENS_MINIAPP_EMPTY_URL;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex-1 p-4 flex flex-col items-center mt-10">
          <ReactSVG
            src="/greens/icons/tick.svg"
            className="w-[54px] h-[54px] mb-8"
          />
          <div className="text-center mb-[40px] mt-[20px] space-y-4">
            <h2 className="text-greensPrimary text-[30px] font-bold">
              {isRu ? "Успешно" : "Successfully"}
            </h2>
            <h4 className="text-greensPrimary text-[17px] max-w-[300px] text-center mx-auto">
              {isRu
                ? "Ваш платеж принят. Монеты зачислены на баланс. Вы можете вернуться в игру."
                : "Your payment has been accepted. The coins are on your balance. You can back to the game."}
            </h4>
          </div>
        </div>
      </div>
      <div className="relative">
        <CustomButton title={isRu ? "Закрыть" : "Close"} onClick={onClose} />

        {/* <
          text={t("close")}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3] !rounded-[14px] w-[150px]"
          innerClassName="h-[32px] !rounded-[14px]"
          handleClick={onClose}
          tooltipTextWhenClicked={t("youCantSellFreeItems")}
        /> */}
        <ReactSVG src="/greens/icons/rounded-footer-background.svg" />
      </div>
    </div>
  );
};

export default GreensSuccessPage;
