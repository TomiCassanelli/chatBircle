import type { Metadata } from "next";
import "./globals.css"; // Importa los estilos globales

export const metadata: Metadata = {
  title: "Chat Bircle AI",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}