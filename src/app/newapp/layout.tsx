"use client";
import Header from "@/components/home/Header";
import { Box } from "@mui/material";
import Hero from "@/components/home/Hero";
import ThemeProvidor from "@/themeProvidor/ThemeProvidor";
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
        <Box sx={{ height: "1000px" }}>hhhhhh</Box>
      </ThemeProvidor>
    </>
  );
}

//
/**

"use client";
import { useEffect, useState } from "react";
import Header from "@/components/home/Header";
import HeaderContainer from "@/container/HeaderContainer";
import { Box, Typography, Stack, Button } from "@mui/material";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [stateOfScrool, setStateOfScrool] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     console.log(window.scrollY);
  //     if (window.scrollY > 490) {
  //       setStateOfScrool(true);
  //     } else {
  //       setStateOfScrool(false);
  //     }
  //     return () => {
  //       window.removeEventListener("scroll", () => {});
  //     };
  //   });
  // }, []);
  return (
    <>
      <Box
        sx={{
          height: "auto",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            background: "red",
            height: "100px",
          }}
        >
          header
        </Box>

        <Stack>
          <Box
            sx={{
              background: `url('https://lh3.googleusercontent.com/BoNssU4yW1fSjpblBYpAuB917yBmYolbBt6rAoS71E5nZ02XHhnUihBAU2TZolfrx8ijsez4r_8ohTucyt9OBaqy59WxuTvWGcPXCO3vHjzV6xgwBw=w1864-rj')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              padding: "192px 0",
              // position: !stateOfScrool ? "unset" : "sticky",
              position: "sticky",
              top: "100px",
              zIndex: "-999",
              borderRadius: "0% 0% 68% 68% / 0% 0% 19% 19% ",
              scale: 1.5,
            }}
          >
            bagond of hero
            <Button variant="contained" sx={{ scale: 1.5 }}>
              heloo
              <div style={{ scale: 1.5 }}>hlooo</div>
            </Button>
          </Box>

          <>
             box containt that will movee 
            <Box
              sx={{
                width: "300px",
                height: "200px",
                border: "1px solid",
                margin: "auto",
                position: "relative",
                bottom: "100px",
              }}
            >
              boxxxx containyt
            </Box>
          </>
        </Stack>

        {children}
      </Box>
      <Box sx={{ height: "1000px" }}>hhhhhh</Box>
    </>
  );
}





 */
