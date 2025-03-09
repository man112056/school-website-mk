// src/components/AboutUs.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutUs = () => (
  <Container sx={{ padding: '4rem 0' }}>
    <Typography variant="h4" gutterBottom align="center">
      About Us
    </Typography>
    <Typography variant="body1" align="center">
      At  Public School,, we are committed to nurturing young minds and fostering holistic development. Our mission is to provide quality education that empowers students to become responsible global citizens.
    </Typography>
  </Container>
);

export default AboutUs;
