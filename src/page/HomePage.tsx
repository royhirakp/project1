import Course from "@/components/home/Course";
import Hero from "@/components/home/Hero";
import React from "react";
import { Box } from "@mui/material";
const HomePage = () => {
  return (
    <div>
      {/* hero */}
      <Box>
        <Hero />
      </Box>
      <Course />
    </div>
  );
};

export default HomePage;
