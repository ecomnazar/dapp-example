// @ts-expect-error
import TronWeb from "tronweb";

export const sendTransaction = async () => {
  console.log("hi");

  const fullHost = "https://api.trongrid.io/";
  const privateKey = "";
  const contractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  const functionName = "transfer";

  const parameters = [
    { type: "address", value: "TKBzYx4mrkQRSkwnzVNkibT7dfWj56VrTk" },
    { type: "uint256", value: 100 },
  ];

  const tronWeb = new TronWeb({ fullHost });
  tronWeb.setAddress("TKBzYx4mrkQRSkwnzVNkibT7dfWj56VrTk");

  console.log(tronWeb);

  const transaction = await tronWeb.transactionBuilder.triggerSmartContract(
    contractAddress,
    functionName,
    { feeLimit: 200000000 }, // Лимит комиссии
    parameters
  );

  //   const signedTransaction = await tronWeb.trx.sign(transaction);
  //   const result = await tronWeb.trx
  //     .sendRawTransaction(signedTransaction)
  //     .then((result) => {
  //       console.log("Результат отправки транзакции:", result);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при отправке транзакции:", error);
  //     });

  // return result;
};
