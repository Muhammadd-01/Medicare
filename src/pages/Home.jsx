import React from "react"
import { Container, Typography, Button, Grid, Paper, Box, useTheme, useMediaQuery } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { styled } from "@mui/system"

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  padding: theme.spacing(4, 0),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.common.white,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 0),
  },
}))

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
  },
}))

function Home() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box className="page-transition">
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Welcome to MediCare
          </Typography>
          <Typography variant="h5" paragraph>
            Your trusted online medical consultation platform
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/symptoms"
            size={isMobile ? "medium" : "large"}
          >
            Check Your Symptoms
          </Button>
        </Container>
      </HeroSection>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} className="card-animation">
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom>
                Symptom Checker
              </Typography>
              <Typography paragraph>Describe your symptoms and get instant medicine suggestions.</Typography>
              <Button variant="outlined" component={RouterLink} to="/symptoms">
                Get Started
              </Button>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="card-animation">
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom>
                Premium Consultations
              </Typography>
              <Typography paragraph>Get direct access to certified doctors with our premium subscription.</Typography>
              <Button variant="outlined" component={RouterLink} to="/premium">
                Learn More
              </Button>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="card-animation">
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom>
                Medical Articles
              </Typography>
              <Typography paragraph>Stay informed with our latest medical articles and health tips.</Typography>
              <Button variant="outlined" component={RouterLink} to="/articles">
                Read Articles
              </Button>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home

