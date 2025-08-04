"use client";

import { Box, Fab, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

type Props = {
    onSubmit: (text: string) => void;
};

// Input donde se escribe y envia el mensaje con funcion que dispara onSubmit si contiene texto.

export const Footer = ({ onSubmit }: Props) => {
    const [value, setValue] = useState("");

    const toSend = () => {
        if (value.trim() === "") {setValue(""); return;}
        onSubmit(value);
        setValue("");
    };

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                gap: 1,
            }}
        >

            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
            >
                <TextField
                    placeholder={"Escribe un mensaje..."}
                    fullWidth
                    multiline
                    maxRows={3}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    sx={{ background: "white", borderRadius: 3 }}
                />
            </Box>

            <Box >
                <Fab onClick={toSend}>
                    <SendIcon />
                </Fab>
            </Box>

        </Box>
    );
};
