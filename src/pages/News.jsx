import React from "react"
import { Container, Typography, List, ListItem, ListItemText, Divider } from "@mui/material"

const newsItems = [
  {
    id: 1,
    title: "New COVID-19 Variant Discovered",
    date: "2023-06-01",
    summary:
      "Researchers have identified a new variant of the COVID-19 virus. Studies are ongoing to determine its characteristics and potential impact.",
  },
  {
    id: 2,
    title: "Breakthrough in Alzheimer's Treatment",
    date: "2023-05-28",
    summary:
      "A new drug showing promising results in slowing the progression of Alzheimer's disease has entered phase 3 clinical trials.",
  },
  {
    id: 3,
    title: "WHO Announces Global Health Initiative",
    date: "2023-05-25",
    summary:
      "The World Health Organization has launched a new initiative aimed at improving healthcare access in developing countries.",
  },
  // Add more news items as needed
]

function News() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" gutterBottom>
        Medical News
      </Typography>
      <List>
        {newsItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                      {item.date}
                    </Typography>
                    {` — ${item.summary}`}
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < newsItems.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  )
}

export default News

