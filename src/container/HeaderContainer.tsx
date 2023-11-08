import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style: any;
}

const HeaderContainer: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <Box
      sx={{
        padding: {
          xs: "0 5px",
          sm: "0 10px",
          // lg: "0 200px",
        },
        // padding: "0 5px",
        maxWidth: "1100px",
        margin: "auto",
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

export default HeaderContainer;
