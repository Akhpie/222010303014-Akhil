import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTrain } from "../services/api"; // API service function

function SingleTrainPage() {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    getSingleTrain(trainId)
      .then((data) => setTrain(data))
      .catch((error) => console.error(error));
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Train Details</h1>
      <h2>{train.name}</h2>
      <p>Departure Time: {train.departureTime}</p>
      <p>Price: {train.price}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      {/* Other train details */}
    </div>
  );
}

export default SingleTrainPage;
