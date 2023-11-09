"use client";
import React from "react";

import ContentContainer from "@/container/ContentContainer";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Divider,
  Button,
  Chip,
} from "@mui/material";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Course = () => {
  return (
    <div>
      <ContentContainer style={{}}>
        <Box>
          <Typography
            variant="h4"
            textAlign="center"
            color="secondary.main"
            fontWeight={600}
          >
            Courses
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={4}
            justifyContent="center"
          >
            {[{}, {}, {}, {}].map((item, i) => {
              return (
                <Box key={i}>
                  <CourseCard />
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

const CourseCard = () => {
  const [rating, setRating] = React.useState(0);

  return (
    <Paper
      sx={{
        width: {
          xs: "250px",
          sm: "320px",
        },
        padding: "9px",
        boxSizing: "border-box",
        color: "secondary.main",
      }}
    >
      <Box>
        <Image
          src="/course.png"
          alt=""
          width={500}
          height={200}
          style={{ width: "100%" }}
        />
      </Box>
      <Stack direction="column">
        <Stack direction="row" pt={1}>
          <Chip
            label="TPSC"
            sx={{
              backgroundColor: "secondary.main",
              color: "secondary.light",
              padding: "0 5px",
            }}
          />
        </Stack>
        <Typography variant="body2" fontWeight={600} pt={1}>
          Learn Javascript
        </Typography>

        <Stack direction="row" pt={1} gap={1}>
          <Rating
            style={{ maxWidth: 250, flex: 1 }}
            value={rating}
            onChange={setRating}
          />
          <Typography flex={2}> &#40; 0 students&#41;</Typography>
        </Stack>
        <Divider />

        <Stack direction="row" justifyContent="space-between" pt={2} pb={1}>
          <Typography variant="h6" fontWeight={800}>
            &#8377;50000
          </Typography>
          <Stack direction="row">
            <Button variant="contained">Enrole Now</Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
