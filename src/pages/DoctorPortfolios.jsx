import React from "react"
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { styled } from "@mui/system"

const GradientCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
  },
}))

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    experience: "15 years",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Neurologist",
    experience: "12 years",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Dr. Mike Johnson",
    specialty: "Pediatrician",
    experience: "10 years",
    image: "/placeholder.svg?height=300&width=300",
  },
  // Add more doctors as needed
]

function DoctorPortfolios() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1, padding: theme.spacing(2) }} className="page-transition">
      <Typography variant="h2" gutterBottom align="center">
        Doctor Portfolios
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
        {doctors.map((doctor) => (
          <Grid item key={doctor.id} xs={12} sm={6} md={4} className="card-animation">
            <GradientCard>
              <CardActionArea>
                <CardMedia component="img" height={isMobile ? "200" : "300"} image={doctor.image} alt={doctor.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {doctor.specialty}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience: {doctor.experience}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </GradientCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default DoctorPortfolios

