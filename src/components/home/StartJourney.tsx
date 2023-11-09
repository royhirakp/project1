import React from "react";

import { Box } from "@mui/material";
import FirstPart from "./StartJourneyParts/FirstPart";
import SecondPart from "./StartJourneyParts/SecondPart";
import ContentContainer from "@/container/ContentContainer";

const StartJourney = () => {
  return (
    // <Stack>
    <ContentContainer style={{}}>
      <Box pb={8}>
        <FirstPart />
      </Box>
      <SecondPart />
    </ContentContainer>
    // </Stack>
  );
};

export default StartJourney;
