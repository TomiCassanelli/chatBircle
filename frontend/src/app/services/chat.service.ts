"use client";

import axios from "axios";

const apiUrl = "http://localhost:8000";

// Funcion que hace la petición HTTP al endpoint /query, manejando respuesta y errores del back.

export const getMessage = async (q: string) => {
  try {
    const response = await axios.get(`${apiUrl}/query`, { params: { q } });

    return {
      text: response.data.answer,
    };
  } catch (err: any) {
    if (err.response) {
      const backendMessage = err.response.data?.message;
      return { text: backendMessage };
    }

    return { text: "No se pudo conectar al servidor." };
  }
};
