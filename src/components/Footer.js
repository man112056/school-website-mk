
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
const Footer = () => {

    return (
        <Box
        sx={{
          width: '100%',
          backgroundColor: 'primary.main',
          color: 'white',
          padding: '1rem',
          position: 'fixed',
          bottom: 0,
          textAlign: 'center',
        }}
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} Test Public School, All Rights Reserved
        </Typography>
        <Box>
          <Link href="/" color="inherit" sx={{ margin: '0 1rem' }}>
            Home
          </Link>
          <Link href="/about" color="inherit" sx={{ margin: '0 1rem' }}>
            About Us
          </Link>
          <Link href="/contact" color="inherit" sx={{ margin: '0 1rem' }}>
            Contact
          </Link>
        </Box>
      </Box>
    );

}

export default Footer;