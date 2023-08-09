import React, { useEffect, useState } from "react";
import TrainCard from "../components/TrainCard";
import { getAllTrains } from "../services/api";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function AllTrainsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getAllTrains()
      .then((data) => setTrains(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Trains Schedule
      </Typography>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </Container>
  );
}

export default AllTrainsPage;
