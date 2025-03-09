import { Box, Card, CardContent, Grid, Typography, Container } from '@mui/material';
import React from 'react';

const announcementList = [
    { id: 1, title: "Admission Open for 2025-2026", date: "March 1, 2025" },
    { id: 2, title: "Annual Sports Meet Scheduled", date: "April 15, 2025" },
];

const Announcements = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f9f9f9',
                py: 4, // Adjust padding to remove extra space
            }}
        >
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    Announcements
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {announcementList.map((announcement) => (
                        <Grid item key={announcement.id} xs={12} sm={6} md={4}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {announcement.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {announcement.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Announcements;