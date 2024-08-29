import axios from "axios";
import toast from "react-hot-toast";
import { GREENS_PARAMS } from "../../constants/params";
import { TBlockchainType } from "../../helpers/interfaces";

const BASE_URL = "https://back.greensfi.com/api/users";

interface IGreensConnectWalletApiProps {
  token: string;
  blockchainType: TBlockchainType;
  address: string;
}

const instance = axios.create({
  baseURL: BASE_URL, // Base URL for all requests
  headers: {
    "Content-Type": "application/json", // Default content type for all requests
  },
});

export const greensConnectWalletApi = async ({
  token,
  blockchainType,
  address,
}: IGreensConnectWalletApiProps) => {
  const data = {
    walletAddress: address,
  };
  try {
    const response = await instance.post(
      `/wallet/${blockchainType}/connect`,
      data,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error("Connect error");
  }
};

export const getUserWalletApi = async (token: string) => {
  try {
    const response = await instance.get(`/wallet`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
