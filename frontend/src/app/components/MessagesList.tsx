// components/ChatMessages.tsx
"use client";

import { Box } from "@mui/material";
import { Message } from "../types/message";
import { BubbleMessage } from "./BubbleMessage";

type Props = {
    messages: Message[];
};

export const MessagesList = ({ messages }: Props) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
            }}
        >
            {messages.map((m, i) => (
                <BubbleMessage key={i} message={m} />
            ))}
        </Box>
    );
};
