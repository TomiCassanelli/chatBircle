"use client";

import { Box, Typography } from "@mui/material";

// Muestra el encabezado del chat con logo y nombre

export const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                bgcolor: "white",
                p: 1,
                borderRadius: 2,
            }}
        >
            <Box
                component="img"
                src="/icon.png"
                alt="logo"
                sx={{
                    width: 42,
                    height: 42,
                    objectFit: "contain",
                    borderRadius: 2
                }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: 'center' }}>
                <Typography fontSize={20}> <strong>Chat Bircle AI </strong> </Typography>
                <Typography fontSize={14}> <strong> By: Tomás </strong> </Typography>
            </Box>
        </Box>
    );
};