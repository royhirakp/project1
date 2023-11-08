"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
const inActiveStyle = {
  transition: "0.3s",
  textDecoration: "none",
  textTransform: "none",
  disableRipple: "true",
  color: "#ffff",
  "&:hover": {
    color: "#ff8f9c",
    backgroundColor: "transparent",
  },
};
const activeStyle = {
  disableRipple: "true",
  textDecoration: "none",
  textTransform: "none",
  transition: "0.3s",
  color: "#ffff",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&::after": {
    position: "absolute",
    content: '""',
    backgroundColor: "#ff8f9c",
    height: "3px",
    width: "100%",
    bottom: "-3px",
    left: 0,
    transition: "0.3s",
  },
};
const ButtonNavigation = ({
  setSActiveButton,
  activeButton,
}: {
  setSActiveButton: any;
  activeButton: any;
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      {[
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Study Meterial", path: "studyMeterial" },
        { name: "Courses", path: "courses" },
        { name: "Contacts", path: "contacts" },
        { name: "Classroom", path: "classroom" },
      ].map((item, i) => {
        return (
          <Link
            href={`/newapp/${item.path}`}
            key={i * 0.252}
            onClick={() => {
              setSActiveButton(i);
            }}
          >
            <Button
              key={i}
              style={{ textDecoration: "none" }}
              sx={i == activeButton ? activeStyle : inActiveStyle}
              // sx={{ }}
            >
              {item.name}
            </Button>
          </Link>
        );
      })}
    </Stack>
  );
};

export default ButtonNavigation;
