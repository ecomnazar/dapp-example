import React from "react";
import { useUrlParams } from "./useUrlParams";

export const useI18n = () => {
  const [getParam] = useUrlParams();
  const isRu = getParam("lang") === "ru";

  return isRu;
};
