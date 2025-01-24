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
  backgroundImage: "linear-gradient(120deg, #f0f8ff 0%, #e6f2ff 100%)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
  },
}))

const articles = [
  {
    id: 1,
    title: "The Importance of Regular Exercise",
    summary: "Learn about the numerous benefits of incorporating regular exercise into your daily routine.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Nutrition Tips for a Healthy Diet",
    summary: "Discover essential nutrition tips to maintain a balanced and healthy diet.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Understanding Mental Health",
    summary: "Explore the importance of mental health and learn strategies for maintaining emotional well-being.",
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more articles as needed
]

function Articles() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className="page-transition">
      <Typography variant="h2" gutterBottom align="center">
        Medical Articles
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
        {articles.map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={4} className="card-animation">
            <GradientCard>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? "120" : "140"}
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.summary}
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

export default Articles

