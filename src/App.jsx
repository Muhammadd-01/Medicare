import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { AuthProvider } from "./contexts/AuthContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Symptoms from "./pages/Symptoms"
import Articles from "./pages/Articles"
import News from "./pages/News"
import Contact from "./pages/Contact"
import PremiumConsultation from "./pages/PremiumConsultation"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./App.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#0066cc",
    },
    secondary: {
      main: "#ffd700",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/symptoms" element={<Symptoms />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/premium" element={<PremiumConsultation />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

