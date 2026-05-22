import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K.K. Danny Enterprise Dashboard",
  description: "Admin and staff dashboard for K.K. Danny Enterprise in Adeiso.",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
