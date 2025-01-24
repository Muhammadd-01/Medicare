import { Grid, Box, Typography } from '@mui/material';

const MyComponent = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="body1">Some content here.</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="body1">More content here.</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
