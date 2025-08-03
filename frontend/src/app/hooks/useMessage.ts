"use client";

import { getMessage } from "../services/chat.service";

export const useGetMessage = () => {
  const fetchMessage = async (query: string) => {
    // console.log("Mensaje del Usuario:", query);

    const response = await getMessage(query);
    // console.log("Respuesta de AI:", response);

    return response;
  };

  return { fetchMessage };
};
