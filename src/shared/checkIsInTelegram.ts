export const checkIsInTelegram = () => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    if (window.TelegramWebview) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
