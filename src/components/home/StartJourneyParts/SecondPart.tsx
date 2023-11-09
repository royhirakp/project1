import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
const SecondPart = () => {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Stack
        flex={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImagePart />
      </Stack>
      <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Stack
          justifyContent="center"
          maxWidth={500}
          //   sx={{ border: "1px solid" }}
        >
          <StepsForStartJourney />
        </Stack>
      </Box>
    </Stack>
  );
};

export default SecondPart;

const ImagePart = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "250px",
          sm: "350px",
          md: "400px",
        },
      }}
    >
      <Image
        alt="hitakk"
        src="/stydyL.png"
        width={300}
        height={300}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

const StepsForStartJourney = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight={700}
        pb={3}
        textAlign="inherit"
        color="secondary.main"
        sx={{
          textAlign: {
            xs: "center",
            md: "inherit",
          },
        }}
      >
        Steps to Start Your Learning Journey
      </Typography>
      <Stack
        direction="column"
        gap={2}
        maxWidth="310px"
        sx={{
          margin: {
            xs: "auto",
            md: "0",
          },
        }}
      >
        {[
          {
            icon: "1",
            title: "Register",
            text: "create your account to get started",
          },
          { icon: "2", title: "Login", text: "Sign in to access your account" },
          {
            icon: "3",
            title: "Purchase Course",
            text: "Buy the course you want to learn",
          },
          {
            icon: "4",
            title: "Start Learning",
            text: "Begin your learning journey immediately",
          },
          {
            icon: "5",
            title: "Join Live Courses",
            text: "Participate in live classes with instructors",
          },
        ].map((item, i) => {
          return (
            <Stack key={i} direction="row">
              <Typography
                variant="body2"
                sx={{
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                  borderRadius: "50%",
                  backgroundColor: "secondary.main",
                  textAlign: "center",
                  color: "secondary.light",
                }}
              >
                {item.icon}
              </Typography>
              <Stack direction="column" color="secondary.main" pl={1}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color="secondary.main"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#333">
                  {item.text}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};
