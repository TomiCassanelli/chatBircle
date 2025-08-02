"use client";

import { Box } from "@mui/material";
import { FloatingBox } from "./components/FloatingButtom";

const apiUrl = 'http://localhost:8000';

export default function Home() {
  console.log('API URL:', apiUrl);

  return (
    <Box>
      <FloatingBox />
    </Box>
  );
}