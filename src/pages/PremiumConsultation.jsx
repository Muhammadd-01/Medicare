import React, { useState } from "react"
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material"
import { useAuth } from "../contexts/AuthContext"

function PremiumConsultation() {
  const { user, upgradeToPremium } = useAuth()
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "General Practitioner", availableTimes: ["9:00 AM", "2:00 PM"] },
    { id: 2, name: "Dr. Jane Smith", specialty: "Cardiologist", availableTimes: ["10:00 AM", "3:00 PM"] },
    { id: 3, name: "Dr. Mike Johnson", specialty: "Pediatrician", availableTimes: ["11:00 AM", "4:00 PM"] },
  ]

  const handleConsultation = (doctor) => {
    if (user?.isPremium) {
      setSelectedDoctor(doctor)
      setOpenDialog(true)
    } else {
      upgradeToPremium()
    }
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" gutterBottom>
        Premium Online Consultations
      </Typography>
      {!user?.isPremium && (
        <Box sx={{ mb: 4, p: 2, bgcolor: "background.paper", borderRadius: 1 }}>
          <Typography variant="h5" gutterBottom>
            Upgrade to Premium
          </Typography>
          <Typography variant="body1" paragraph>
            Get access to direct online consultations with certified doctors.
          </Typography>
          <Button variant="contained" onClick={upgradeToPremium}>
            Upgrade Now
          </Button>
        </Box>
      )}
      <Grid container spacing={4}>
        {doctors.map((doctor) => (
          <Grid item key={doctor.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {doctor.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {doctor.specialty}
                </Typography>
                <Typography variant="body2">Available Times: {doctor.availableTimes.join(", ")}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleConsultation(doctor)}>
                  {user?.isPremium ? "Book Consultation" : "Upgrade to Book"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Book Consultation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are about to book a consultation with {selectedDoctor?.name}. Please confirm your booking.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={() => setOpenDialog(false)} autoFocus>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default PremiumConsultation

