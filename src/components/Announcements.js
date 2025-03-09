import { Box, Card, CardContent, Grid, Grid2, Typography } from '@mui/material';
import React from 'react';

const announcementList = [
    { id: 1, title: "Admission Open for 2025-2026", date: "March 1 2025" },
    { id: 2, title: 'Annual Sports Meet Scheduled', date: 'April 15, 2025' },
];

const Announcements = () => {
    return (
        <Box
            sx={{
                height: '60vh',
                backgroundColor: '#f9f9f9', padding: '4rem 0'
            }}
        >
            <Typography variant="h4" gutterBottom align="center">
                Announcements
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {announcementList.map((announcementList) => (
                    <Grid item key={announcementList.id} xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {announcementList.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {announcementList.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
export default Announcements;