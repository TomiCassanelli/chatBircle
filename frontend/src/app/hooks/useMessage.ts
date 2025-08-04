"use client";

import { useState } from "react";
import { getMessage } from "../services/chat.service";


// Hook que maneja estado de carga y dispara la consulta al servicio.

export const useGetMessage = () => {
  const [loading, setLoading] = useState(false);

  const fetchMessage = async (query: string) => {
    setLoading(true);
    try {
      const response = await getMessage(query);
      return response;
    } finally {
      setLoading(false);
    }
  };

  return { fetchMessage, loading };
};
