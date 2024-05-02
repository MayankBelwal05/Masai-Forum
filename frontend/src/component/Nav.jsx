import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

function Nav() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/login"
            sx={{
              mr: 0,
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MASAI FORUM
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={Link}
              to="/login"
              sx={{ mx: 1, color: "white" }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              sx={{ mx: 1, color: "white" }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
