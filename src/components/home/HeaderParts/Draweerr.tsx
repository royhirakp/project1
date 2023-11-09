"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
type Anchor = "top" | "left" | "bottom" | "right";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GradingIcon from "@mui/icons-material/Grading";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";

const Draweerr = ({
  toggleDrawer,
  state,
}: {
  toggleDrawer: any;
  state: any;
}) => {
  const router = useRouter();
  const [activeList, setActiveState] = useState(0);
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        // width: anchor === "to  p" || anchor === "bottom" ? "auto" : 250,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        height: "98%",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <Stack direction="row" justifyContent="space-between" pt={2} pb={2}>
          <div
            onClick={() => {
              // router.push("/webapp");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Box
              pl={2}
              // pb={2}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src="/logo3.png" alt="logo" width={40} height={40} />
            </Box>
          </div>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Stack>

        <LoginPartForMobileDrawer />

        <Divider />

        <List>
          {[
            {
              name: "Home",
              icon: <HomeIcon sx={{ color: "primary.main" }} />,
              path: "home",
            },
            {
              name: "About",
              icon: <InfoIcon sx={{ color: "primary.main" }} />,
              path: "about",
            },
            {
              name: "Study Meterial",
              icon: <GradingIcon sx={{ color: "primary.main" }} />,
              path: "studyMeterial",
            },
            {
              name: "Courses",
              icon: <LocalTaxiIcon sx={{ color: "primary.main" }} />,
              path: "courses",
            },
            {
              name: "Contacts",
              icon: <HolidayVillageIcon sx={{ color: "primary.main" }} />,
              path: "contacts",
            },
            {
              name: "Classroom",
              icon: <BookIcon sx={{ color: "primary.main" }} />,
              path: "classroom",
            },
            // "contact",
          ].map((text, index) => (
            <Link
              href={`/newapp/${text?.path}`}
              key={index}
              style={{ textDecoration: "none" }}
              onClick={() => {
                setActiveState(index);
              }}
            >
              <ListItem
                disablePadding
                sx={{
                  backgroundColor: `${
                    activeList == index ? "secondary.main" : "secondary.light"
                  }`,
                }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#fffff" }}>
                    {text?.icon}
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      // color: "secondary.main",
                      color: `${
                        activeList == index
                          ? "secondary.light"
                          : "secondary.main"
                      }`,
                      fontWeight: 600,
                    }}
                  >
                    {text?.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />
        <Link
          href={`/newapp/Settings`}
          style={{ textDecoration: "none", backgroundColor: "red" }}
          onClick={() => {
            // setActiveState(index);
          }}
        >
          <ListItem
            disablePadding
            sx={
              {
                // background: `${activeList == index ? "#ffff" : "#faffa"}`,
              }
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                sx={{
                  // color: `${activeList == index ? "#3a3434" : "#3a3434"}`,
                  fontWeight: 800,
                }}
              >
                Settings
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider />

        <List>
          {[
            {
              name: "help",
              icon: <HelpCenterIcon sx={{ color: "primary.main" }} />,
            },
            {
              name: "Feedback",
              icon: <MessageIcon sx={{ color: "primary.main" }} />,
            },

            // "contact",
          ].map((text, index) => (
            <Link
              href={`/newapp/${text?.name}`}
              key={index}
              style={{ textDecoration: "none", backgroundColor: "red" }}
              onClick={() => {
                setActiveState(index);
              }}
            >
              <ListItem
                disablePadding
                sx={
                  {
                    // background: `${activeList == index ? "#ffff" : "#faffa"}`,
                  }
                }
              >
                <ListItemButton>
                  <ListItemIcon>{text?.icon}</ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      color: `${activeList == index ? "#3a3434" : "#3a3434"}`,
                      fontWeight: 800,
                    }}
                  >
                    {text?.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",

          // display: localStorage.getItem("loginStatus") ? "flex" : "none",
        }}
      >
        <Link
          href={`/login`}
          // style={i == activeButton ? activeStyle : inActiveStyle}
          onClick={() => {
            // setSActiveButton(i);
            // localStorage.removeItem("loginStatus");
          }}
        >
          <Button
            sx={{
              disableRipple: "true",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <LogoutIcon sx={{ color: "primary.main" }} />
            <Typography variant="body1" sx={{ paddingLeft: "5px" }}>
              Logout
            </Typography>
          </Button>
        </Link>
      </Stack>
    </Box>
  );
  return (
    <>
      <div>
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Draweerr;

const LoginPartForMobileDrawer = () => {
  const router = useRouter();
  return (
    <Stack>
      {/* xmx */}

      <Box
        sx={{
          display: "block",
          // display: localStorage.getItem("loginStatus") ? "block" : "none",
        }}
      >
        <ListItem
          disablePadding
          sx={
            {
              // background: `${activeList == index ? "#ffff" : "#faffa"}`,
            }
          }
        >
          <ListItemButton>
            <Link
              href={`/newapp/profile`}
              style={{ textDecoration: "none" }}
              onClick={() => {
                // setActiveState(index);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
            </Link>

            <Stack direction="row">
              <Stack direction="column" sx={{}}>
                <Typography variant="subtitle2" color="primary">
                  Hirak Roy
                </Typography>
                <Typography variant="body2" color="secondary">
                  royhirakp@gamil.com
                </Typography>
                <Link href="/newapp/profile">Manage your profile</Link>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>
      </Box>
      {/* sjsjjsjs */}
    </Stack>
  );
};
