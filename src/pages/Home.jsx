import React from "react"
import { Container, Typography, Button, Grid, Paper } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          Welcome to MediCare
        </Typography>
        <Typography variant="h5" paragraph>
          Your trusted online medical consultation platform
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/symptoms" size="large">
          Check Your Symptoms
        </Button>
      </Paper>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Symptom Checker
            </Typography>
            <Typography paragraph>Describe your symptoms and get instant medicine suggestions.</Typography>
            <Button variant="outlined" component={RouterLink} to="/symptoms">
              Get Started
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Premium Consultations
            </Typography>
            <Typography paragraph>Get direct access to certified doctors with our premium subscription.</Typography>
            <Button variant="outlined" component={RouterLink} to="/premium">
              Learn More
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Medical Articles
            </Typography>
            <Typography paragraph>Stay informed with our latest medical articles and health tips.</Typography>
            <Button variant="outlined" component={RouterLink} to="/articles">
              Read Articles
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

