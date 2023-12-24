"use client";
import { Box, Typography, Stack, Paper } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SpeedIcon from "@mui/icons-material/Speed";

const Hero = () => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Box
        sx={{
          border: "1px solid red",
          background: `url('/bagground.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          padding: "320px 0",
          position: "sticky",
          top: "0px",
          zIndex: "-999",
          borderRadius: {
            xs: "0% 0% 68% 68% / 0% 0% 5% 5%",
            sm: "0% 0% 68% 68% / 0% 0% 7% 7% ",
            md: "0% 0% 68% 68% / 0% 0% 10% 10% ",
          },
        }}
      ></Box>

      <>
        {/* box containt that will movee */}

        <Paper
          sx={{
            padding: {
              xs: "30px 3%",
              md: "40px 3%",
              lg: "40px 8%",
            },
            // margin: "1%",
            color: "#ffff",
            margin: { xs: "auto 2%", sm: "auto" },
            position: "relative",
            bottom: "110px",
            backgroundColor: "secondary.main",
          }}
        >
          <TextContent />
          <Stack
            gap={6}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            {[
              {
                icon: <SpeedIcon sx={{ color: "#ffff" }} />,
                text: "Real-time learning with expert instructors.",
              },
              {
                icon: <StarBorderIcon sx={{ color: "#ffff" }} />,
                text: "Rich, concise notes for every subject.",
              },
              {
                icon: <DirectionsRunIcon sx={{ color: "#ffff" }} />,
                text: "Explore course to match your goals",
              },
            ].map((item, i) => {
              return (
                <Stack
                  alignItems="center"
                  direction="column"
                  sx={{
                    height: "100%",
                    // border: "1px solid",
                    minWidth: {
                      xs: "150px",
                      sm: "180px",
                    },
                  }}
                  key={i}
                  // margin="0 1%"
                >
                  {item.icon}
                  <Typography
                    variant="body2"
                    // sx={{ fontSize: "10px" }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Paper>
      </>
    </Stack>
  );
};

export default Hero;

const TextContent = () => {
  return (
    <Stack direction="column" pb={2}>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          Unlock Your Learning Potential with{" "}
          <Typography
            component="span"
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            GPFT
          </Typography>
          <Typography variant="body2">
            Empowerring Your Education Journey , One Click at a Time
          </Typography>
        </Typography>
      </Box>
    </Stack>
  );
};
