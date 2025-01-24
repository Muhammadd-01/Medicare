import React from "react"
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"

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
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" gutterBottom>
        Medical Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" height="140" image={article.image} alt={article.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Articles

