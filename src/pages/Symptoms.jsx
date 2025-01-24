import React, { useState } from "react"
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { styled } from "@mui/system"

const GradientPaper = styled(Paper)(({ theme }) => ({
  backgroundImage: "linear-gradient(120deg, #f0f8ff 0%, #e6f2ff 100%)",
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
}))

function Symptoms() {
  const [symptoms, setSymptoms] = useState("")
  const [suggestions, setSuggestions] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // In a real application, this would call an API to get medicine suggestions
      const mockSuggestions = {
        mild: ["Paracetamol", "Ibuprofen"],
        moderate: ["Aspirin", "Naproxen"],
        severe: ["Consult a doctor immediately"],
      }
      setSuggestions(mockSuggestions)
    } catch (err) {
      setError("An error occurred while fetching suggestions. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, flexGrow: 1 }} className="page-transition">
      <Typography variant="h2" gutterBottom align="center">
        Symptom Checker
      </Typography>
      <GradientPaper elevation={3}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="symptoms"
            label="Describe your symptoms"
            name="symptoms"
            multiline
            rows={isMobile ? 3 : 4}
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Get Suggestions"}
          </Button>
        </Box>
      </GradientPaper>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      {suggestions && (
        <Box sx={{ mt: 4 }} className="card-animation">
          <Typography variant="h4" gutterBottom align="center">
            Suggested Medicines
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="center">
            Please consult with a healthcare professional before taking any medication.
          </Typography>
          {Object.entries(suggestions).map(([severity, meds]) => (
            <GradientPaper key={severity} elevation={3} sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Typography>
              <List dense={isMobile}>
                {meds.map((med, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={med} />
                  </ListItem>
                ))}
              </List>
            </GradientPaper>
          ))}
        </Box>
      )}
    </Container>
  )
}

export default Symptoms

