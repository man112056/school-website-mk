import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";


const events = [
    { id: 1, name: 'Science Exhibition', date: 'March 20, 2025' },
    { id: 2, name: 'Parent-Teacher Meeting', date: 'April 5, 2025' },
];

const UpcomingEvents = () =>(
    <Box
        sx={{
            padding: '4rem 0',
            backgroundColor: '#f9f9f9',
        }}
    >
        <Typography variant="h4" gutterBottom align="center">
            Upcoming Events
        </Typography>
        <List>
            {events.map((event) => (
              <ListItem key={event.id}>
              <ListItemText primary={event.name} secondary={event.date} />
            </ListItem>
            ))}
        </List>
    </Box>
);

export default UpcomingEvents;
