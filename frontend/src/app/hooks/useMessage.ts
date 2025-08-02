"use client";

import { useState } from "react";
import { getMessage } from "../services/chat.service";

export const useGetMessage = () => {
  const [data, setData] = useState(null);

  const fetchMessage = async (query: string) => {
    const response = await getMessage(query);
    setData(response);
  };

  return { data, fetchMessage };
};
