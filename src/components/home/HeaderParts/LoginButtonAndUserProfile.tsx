"use client";
import React from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
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
          <Button
            onClick={handleClick}
            sx={{
              disableRipple: "true",
              textDecoration: "none",
              color: "secondary.light",
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
                  color: "secondary.light",
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
                router.push("/newapp/profile");
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                router.push("/newapp/account");
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
            {/* {[
              { route: "profile", name: "Profile" },
              { route: "My account", name: "account" },
              { route: "Logout", name: "login" },
            ].map((item, i) => {
              return (
                <MenuItem
                  key={i}
                  onClick={() => {
                    setAnchorEl(null);
                    router.push(`/newapp/${item.route}`);
                  }}
                >
                  {item.name}
                </MenuItem>
              );
            })} */}
          </Menu>
        </Stack>
      </Box>
    </>
  );
};

export default LoginButtonAndUserProfile;
