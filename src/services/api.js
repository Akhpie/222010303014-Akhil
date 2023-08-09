const API_BASE_URL = "http://20.244.56.144:80/train/trains";

export const getAllTrains = async () => {
  const response = await fetch(`${API_BASE_URL}/trains`);
  const data = await response.json();
  return data;
};

export const getSingleTrain = async (trainId) => {
  const response = await fetch(`${API_BASE_URL}/trains/${trainId}`);
  const data = await response.json();
  return data;
};
