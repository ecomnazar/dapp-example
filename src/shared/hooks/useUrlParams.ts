// Define the type for the URL parameters
type IUrlParams = "tkn" | "lang" | "blockchainType";

// Define the return type for the custom hook
type UseUrlParamsReturn = [(key: IUrlParams) => string];

export const useUrlParams = (): UseUrlParamsReturn => {
  // Use the useSearchParams hook from react-router-dom
  const searchParams = new URLSearchParams(window.location.search);

  // Function to get a URL parameter
  const getParam = (key: IUrlParams): string => searchParams.get(key) || "";

  // Return the getParam and setParam functions
  return [getParam];
};
