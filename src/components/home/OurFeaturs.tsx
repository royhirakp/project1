import React from "react";
import ContentContainer from "@/container/ContentContainer";
import { Box, Typography, Stack, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
const OurFeaturs = () => {
  return (
    <div>
      <ContentContainer style={{}}>
        <Typography
          variant="h5"
          textAlign="center"
          color="secondary.main"
          fontWeight={600}
        >
          Our Feature
        </Typography>
        <Stack direction="row" gap={2} pt={3}>
          {[
            {
              icon: "",
              text: "TPSC",
            },
            {
              icon: "",
              text: "Coding",
            },
            {
              icon: "",
              text: "Banking",
            },
          ].map((item, i) => {
            return (
              <Box
                key={i}
                sx={{
                  padding: "20px 0px",
                  border: "1px solid",
                  backgroundColor: "secondary.main",
                  color: "secondary.light",
                  borderRadius: "10px",
                  width: {
                    xs: "150px",
                    sm: "200px",
                  },
                }}
              >
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: "50%",
                    backgroundColor: "#d5d3d3",
                    width: "50px",
                    height: "50px",
                    margin: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <CodeIcon
                    sx={{
                      color: "secondary.main",
                    }}
                  />
                </Box>
                <Typography pt={1} variant="h6" textAlign="center">
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </ContentContainer>
    </div>
  );
};

export default OurFeaturs;
