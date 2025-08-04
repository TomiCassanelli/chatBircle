"use client";

import { Box } from "@mui/material";
import { Message } from "../types/message";
import { BubbleMessage } from "./bubbleMessage";

type Props = {
    messages: Message[];
    loading?: boolean;
};

// Historial de mensajes, con burbuja especial de Loading.

export const MessagesList = ({ messages, loading = false, }: Props) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                overflowY: "auto",
                height: "100%",
                borderRadius: 2,
            }}
        >
            {messages.map((m, i) => (
                <BubbleMessage key={i} message={m} />
            ))}

            {loading && (
                <BubbleMessage
                    message={{
                        text: "Cargando...",
                        sender: "ai",
                    }}
                />
            )}
        </Box>
    );
};
