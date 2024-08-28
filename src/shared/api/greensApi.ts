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

export const greensConnectWalletApi = async ({
  token,
  blockchainType,
  address,
}: IGreensConnectWalletApiProps) => {
  const data = {
    walletAddress: address,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/wallet/${blockchainType}/connect`,
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
