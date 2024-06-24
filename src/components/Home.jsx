import * as React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Assorted.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover the Unexpected – Your One-Stop Shop for Unique Finds!
        </Typography>
        <Box mt={4}>
          <Button
            variant="outlined"
            sx={{ 
              borderColor: '#c5c7c9',
              color: 'black',
              '&:hover': {
                borderColor: '#c5c7c9',
                backgroundColor: '#c5c7c9',
              }
            }}
          >
            Start Shopping
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
