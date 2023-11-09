import Course from "@/components/home/Course";
import Hero from "@/components/home/Hero";
import React from "react";
import { Box } from "@mui/material";
import OurFeaturs from "@/components/home/OurFeaturs";
import StartJourney from "@/components/home/StartJourney";
import Footer from "@/components/home/Footer";
const HomePage = () => {
  return (
    <div>
      <Box>
        <Hero />
      </Box>

      <Course />
      <Box pt={9}>
        <OurFeaturs />
      </Box>
      <Box pt={15}>
        <StartJourney />
      </Box>
    </div>
  );
};

export default HomePage;
