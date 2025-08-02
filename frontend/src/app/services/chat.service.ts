"use client";

import axios from "axios";

const apiUrl = "http://localhost:8000";

export const getMessage = async (q: string) => {
  try {
    const { data } = await axios.get(`${apiUrl}/query`, {
      params: { q },
    });
    return data;
  } catch (error) {
    console.error("Error getting message:", error);
    throw error;
  }
};
