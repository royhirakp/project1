"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const LoginButtonAndUserProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  return (
    <>
      <Box>
        <Stack direction="row" spacing={2}>
          {/* <IconButton onClick={handleClick} sx={{ padding: 0 }}> */}
          <Button
            onClick={handleClick}
            sx={{
              disableRipple: "true",
              textDecoration: "none",
              color: "#ffff",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            startIcon={
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            }
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  color: "#ffff",
                }}
              />
            }
          >
            <Typography
              variant="body2"
              component="span"
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              Hirak Roy
            </Typography>
          </Button>
          {/* <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/2.jpg"
            /> */}
          {/* </IconButton> */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                router.push("/webapp/profile");
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                router.push("/webapp/account");
              }}
            >
              My account
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.removeItem("loginStatus");
                setAnchorEl(null);
                router.push("/login");
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Box>
    </>
  );
};

export default LoginButtonAndUserProfile;
