import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
import { useAuth } from "../contexts/AuthContext"

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          MediCare
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/symptoms">
            Symptom Checker
          </Button>
          <Button color="inherit" component={RouterLink} to="/articles">
            Articles
          </Button>
          <Button color="inherit" component={RouterLink} to="/news">
            News
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contact
          </Button>
          {user ? (
            <>
              <Button color="inherit" component={RouterLink} to="/premium">
                Premium Consultation
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
              <Button color="inherit" component={RouterLink} to="/register">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

