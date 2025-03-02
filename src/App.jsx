import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Global, css } from "@emotion/react"
import { AuthProvider } from "./contexts/AuthContext"
import ParticleBackground from "./components/ParticleBackground"
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
import DoctorPortfolios from "./pages/DoctorPortfolios"
import theme from "./theme"

const globalStyles = css`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .page-transition {
    animation: fadeIn 0.5s ease-out;
  }

  .card-animation {
    animation: slideIn 0.5s ease-out;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={globalStyles} />
      <AuthProvider>
        <Router>
          <ParticleBackground />
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
            <Route path="/doctor-portfolios" element={<DoctorPortfolios />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

