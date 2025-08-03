"use client";

import { Box } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Message } from "../types/message";
import { useState } from "react";
import { MessagesList } from "./MessagesList";
import { useGetMessage } from "../hooks/useMessage";

export const ChatSection = () => {
    const hook = useGetMessage();

    const [messages, setMessages] = useState<Message[]>([

    ]);

    const handleSubmit = async (text: string) => {
        setMessages((prev) => [...prev, { text, sender: "user" }]);

        const response = await hook.fetchMessage(text);
        setMessages((prev) => [...prev, { text: response.answer, sender: "ai" }]);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: { xl: "40%", lg: "50%", md: "75%", xs: "100%" },
                position: "relative",
                bgcolor: "black",
                boxShadow: 3,
                p: 1,
                borderRadius: 2,
                gap: 1
            }
            }
        >

            <Header />

            <Box
                sx={{
                    flexGrow: 1,
                    overflow: "auto",
                    minHeight: 0,
                    bgcolor: 'white',
                    borderRadius: 3,
                    p: 1
                }}
            >
                <MessagesList messages={messages} />
            </Box>

            <Footer onSubmit={handleSubmit} />

        </Box >
    );
};
