"use client";
import Header from "@/components/home/Header";
import { Box } from "@mui/material";
import Hero from "@/components/home/Hero";
import ThemeProvidor from "@/themeProvidor/ThemeProvidor";
import Footer from "@/components/home/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvidor>
        <Box
          sx={{
            height: "auto",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {/* header */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 99,

              // height: "80px",
            }}
          >
            <Header />
          </Box>

          {children}
        </Box>
        <Footer />
      </ThemeProvidor>
    </>
  );
}
