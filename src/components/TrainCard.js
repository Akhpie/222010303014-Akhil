import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TrainCard({ train }) {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{train.name}</Typography>
        <Typography>Departure Time: {train.departureTime}</Typography>
        <Typography>Price: {train.price}</Typography>
        <Typography>Seat Availability: {train.seatAvailability}</Typography>
        <Button
          variant="contained"
          component={Link}
          to={`/train/${train.id}`}
          color="primary"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default TrainCard;
