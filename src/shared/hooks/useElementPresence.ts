import { useEffect, useState } from "react";

export const useElementPresence = (elementId: string) => {
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    // Function to check if the element exists
    const checkPresence = () => {
      setIsPresent(!!document.getElementById(elementId));
    };

    // Create a MutationObserver instance
    const observer = new MutationObserver(checkPresence);

    // Observe the document body for child changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial check
    checkPresence();

    // Cleanup function to disconnect the observer
    return () => observer.disconnect();
  }, [elementId]);

  return isPresent;
};
