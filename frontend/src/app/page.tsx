"use client";

import { Box } from "@mui/material";
import { ChatSection } from "./components/ChatSection";

export default function Home() {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: "100%",
      boxSizing: "border-box",
      p: 2,
    }}
    >
      <ChatSection />
    </Box>
  );
}