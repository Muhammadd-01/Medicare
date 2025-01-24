import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useAuth } from "../contexts/AuthContext"

function Navbar() {
  const { user, logout } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MediCare
      </Typography>
      <List>
        {["Home", "Symptom Checker", "Articles", "News", "Contact"].map((item) => (
          <ListItem key={item} component={RouterLink} to={`/${item.toLowerCase().replace(" ", "-")}`}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
        {user ? (
          <>
            <ListItem component={RouterLink} to="/premium">
              <ListItemText primary="Premium Consultation" />
            </ListItem>
            <ListItem button onClick={logout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem component={RouterLink} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem component={RouterLink} to="/register">
              <ListItemText primary="Register" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="static" sx={{ backgroundImage: "linear-gradient(45deg, #0066cc, #5e92f3)" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            MediCare
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
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
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar

