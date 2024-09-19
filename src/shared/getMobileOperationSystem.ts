export const getMobileOperatingSystem = () => {
  // @ts-ignore
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // @ts-ignore
  // Detect iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  // Detect Android
  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // If the OS is not iOS or Android
  return "unknown";
};
