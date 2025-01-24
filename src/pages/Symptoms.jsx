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
} from "@mui/material"

function Symptoms() {
  const [symptoms, setSymptoms] = useState("")
  const [suggestions, setSuggestions] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" gutterBottom>
        Symptom Checker
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="symptoms"
          label="Describe your symptoms"
          name="symptoms"
          multiline
          rows={4}
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Get Suggestions"}
        </Button>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      {suggestions && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Suggested Medicines
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Please consult with a healthcare professional before taking any medication.
          </Typography>
          {Object.entries(suggestions).map(([severity, meds]) => (
            <Box key={severity} sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Typography>
              <List>
                {meds.map((med, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={med} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  )
}

export default Symptoms

