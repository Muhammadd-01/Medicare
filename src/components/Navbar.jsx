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
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useAuth } from "../contexts/AuthContext"
import logo from "../assets/logo.png" // Make sure to add a logo image in your assets folder

function Navbar() {
  const { user, logout } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Symptom Checker", path: "/symptoms" },
    { name: "Articles", path: "/articles" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
    { name: "Doctor Portfolios", path: "/doctor-portfolios" },
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", padding: 2 }}>
      <Box sx={{ my: 2 }}>
        <img src={logo || "/placeholder.svg"} alt="MediCare Logo" style={{ height: "50px" }} />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={RouterLink} to={item.path} sx={{ justifyContent: "center" }}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        {user ? (
          <>
            <ListItem component={RouterLink} to="/premium" sx={{ justifyContent: "center" }}>
              <ListItemText primary="Premium Consultation" />
            </ListItem>
            <ListItem button onClick={logout} sx={{ justifyContent: "center" }}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem component={RouterLink} to="/login" sx={{ justifyContent: "center" }}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem component={RouterLink} to="/register" sx={{ justifyContent: "center" }}>
              <ListItemText primary="Register" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="static" sx={{ background: "rgba(0, 51, 102, 0.8)", backdropFilter: "blur(10px)" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo || "/placeholder.svg"} alt="MediCare Logo" style={{ height: "40px", marginRight: "10px" }} />
            <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
              MediCare
            </Typography>
          </Box>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button key={item.name} color="inherit" component={RouterLink} to={item.path}>
                  {item.name}
                </Button>
              ))}
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
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar

