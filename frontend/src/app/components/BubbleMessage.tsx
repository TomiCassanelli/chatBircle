"use client";

import { Box, Typography } from "@mui/material";
import { Message } from "../types/message";

export type Props = {
    message: Message;
};

// Define el formato del mensaje con forma de burbuja y texto dentro.

export const BubbleMessage = ({ message }: Props) => {

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
            }}
        >
            <Box
                sx={{
                    p: 1,
                    minWidth: "50%",
                    maxWidth: "70%",
                    bgcolor: message.sender === "user" ? "#0a4b7b" : "#242625",
                    color: "white",
                    borderRadius: 2,
                    wordBreak: "break-word",
                }}
            >
                <Typography>{message.text}</Typography>
            </Box>
        </Box >
    );
};
