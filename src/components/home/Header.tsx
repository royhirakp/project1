"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import LoginButtonAndUserProfile from "./HeaderParts/LoginButtonAndUserProfile";
import Draweerr from "./HeaderParts/Draweerr";
import ButtonNavigation from "./HeaderParts/ButtonNavigation";
import HeaderContainer from "@/container/HeaderContainer";
type Anchor = "top" | "left" | "bottom" | "right";

const Header = () => {
  const [scroolState, setScroolSet] = useState(true);
  const [activeButton, setSActiveButton] = useState<null | number>(0);
  const router = useRouter();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 3) {
        setScroolSet(true);
      } else {
        setScroolSet(false);
      }
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: !scroolState ? "secondary.dark" : "secondary.main",
        padding: "10px 0",
      }}
    >
      <HeaderContainer style={{}}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row">
            <Box
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
              }}
            >
              <IconButton onClick={toggleDrawer("left", true)}>
                <MenuIcon sx={{ color: "secondary.light" }} />
              </IconButton>
              <Draweerr toggleDrawer={toggleDrawer} state={state} />
            </Box>
            <div
              onClick={() => {
                router.push("/newapp/home");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image src="/logo3.png" alt="logo" width={60} height={60} />
              </Box>
            </div>
          </Stack>

          {/* </Link> */}

          <ButtonNavigation
            activeButton={activeButton}
            setSActiveButton={setSActiveButton}
          />
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
              // display: {
              //   xs: "none",
              //   sm: "flex",
              // },
            }}
          >
            {/* login buttoon */}
            <LoginButtonAndUserProfile />
          </Stack>
          {/* drawer for the mobile */}
        </Stack>
      </HeaderContainer>
    </Box>
  );
};

export default Header;
