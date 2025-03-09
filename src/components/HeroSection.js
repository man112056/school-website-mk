import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import gspsLogo from '../sample_school_cover.jpg'; // Import image

const HeroSection = () => (
    <Box
        sx={{
            height: '60vh',
            backgroundImage: `url(${gspsLogo})`, // Use imported image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            fontStyle: 'bold',
            padding: '0 1rem',
        }}
    >
        <Typography variant="h2" gutterBottom>
            test Public School
        </Typography>
        <Typography variant="h5" gutterBottom>
            "Empowering Future Leaders"
        </Typography>
        <Button variant="contained" color="secondary" size="large">
            Learn More
        </Button>
    </Box>
);

export default HeroSection;