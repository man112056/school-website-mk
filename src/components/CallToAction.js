// src/components/CallToAction.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const CallToAction = () => (
  <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: '4rem 0' }}>
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Join Us Today!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover the difference at Gyan Sthali Public School, Godda. Contact us to learn more about our programs and admissions process.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Contact Us
      </Button>
    </Container>
  </Box>
);

export default CallToAction;
