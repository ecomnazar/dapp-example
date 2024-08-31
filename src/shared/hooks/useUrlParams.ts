import { useEffect, useState } from "react";

// Define the type for the URL parameters
type IUrlParams = "tkn" | "lang" | "blockchainType";

// Define the return type for the custom hook
type UseUrlParamsReturn = [(key: IUrlParams) => string];

export const useUrlParams = (): UseUrlParamsReturn => {
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSearchParams(new URLSearchParams(window.location.search));
    }
  }, []);

  // Function to get a URL parameter
  const getParam = (key: IUrlParams): string => {
    console.log("searchparams: ", searchParams);

    return searchParams?.get(key) || "";
  };

  // Return the getParam function
  return [getParam];
};
