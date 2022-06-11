import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { Typography, Link, Divider } from "@mui/material";
export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20vh",
        backgroundColor: "#232323",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" margin={2} color="white">
        Sitio Web desarrollado por Emiliano Bulaich durante curso de React en
        Coderhouse
      </Typography>
      <Divider style={{ width: "100%", borderColor: "#BEBEBE" }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: "10px",
        }}
      >
        <Link
          href="https://github.com/emilianobulaich/react-bulaich.git"
          target="_blank"
          color="inherit"
          display="flex"
          alignItems="center"
          underline="none"
        >
          <GitHubIcon sx={{ color: "white", m: "5px" }} />
          <Typography variant="h5" color="white">
            Github
          </Typography>
        </Link>
        <Link
          href="https://www.linkedin.com/in/emiliano-bulaich/"
          target="_blank"
          color="inherit"
          display="flex"
          alignItems="center"
          underline="none"
        >
          <LinkedInIcon sx={{ color: "white", m: "5px" }} />
          <Typography variant="h5" color="white">
            LinkedIn
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
