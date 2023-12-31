import React from "react";
import { Box, Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "#1b2d40" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ border: "1px solid black", padding: "5px" }}
          >
            First
          </Grid>
          <Grid
            item
            xs={12}
            md={4.5}
            sx={{ border: "1px solid red", padding: "5px" }}
          >
            Second
          </Grid>
          <Grid
            item
            xs={12}
            md={4.5}
            sx={{ border: "1px solid white", padding: "5px" }}
          >
            Third
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;
