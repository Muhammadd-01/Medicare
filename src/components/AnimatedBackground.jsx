import React from "react"
import { Box } from "@mui/material"
import { keyframes } from "@mui/system"

const moveBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const AnimatedBackground = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
        animation: `${moveBackground} 15s ease infinite`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  )
}

export default AnimatedBackground

