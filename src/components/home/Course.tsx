import ContentContainer from "@/container/ContentContainer";
import { Box, Typography, Stack, Paper, Divider, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Course = () => {
  return (
    <div>
      <ContentContainer style={{}}>
        <Box>
          <Typography variant="h4" textAlign="center">
            Courses
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={2}>
            {[{}, {}, {}].map((item, i) => {
              return (
                <Box key={i}>
                  <Paper sx={{ width: "200px" }}>
                    <Box>
                      <Image
                        src="/course.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </Box>
                    <Stack direction="column">
                      <Box>pooo</Box>

                      <Typography>bddjjdjdjdjdjdj</Typography>
                      <Divider />

                      <Stack direction="row">
                        <Typography>$50000</Typography>
                        <Stack direction="row">
                          <Button variant="contained">Enrole Now</Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Paper>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </ContentContainer>
    </div>
  );
};

export default Course;
