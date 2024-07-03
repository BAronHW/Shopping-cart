import * as React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
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
            <Link to={"/shopping"}>
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
            </Link>
          </Box>
        </Box>
      </Container>
      <Marquee 
        gradient={false} 
        speed={350} 
        style={{ 
          backgroundColor: '#000', 
          color: '#fff', 
          padding: '20px 0',
          textTransform: 'uppercase',
          position: 'absolute',
          bottom: 0,
          width: '100%'
        }}
      >
        <Typography 
          variant="h3" 
          component="span" 
          sx={{ 
            color: '#fff', 
            fontSize: '3rem', 
            fontWeight: 'bold', 
          }}
        >
          All You Ever Need
        </Typography>
      </Marquee>
    </div>
  );
}

export default Home;
