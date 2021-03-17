const fetchTemperatureData = async (APIkey) => {
    const response = await axios
      .get(
        `https://us-central1-smartplant-88b76.cloudfunctions.net/sensorData?id=${APIkey}&category=temperature`
      )
      .catch((err) => {
        console.error(err);
      });
    if (response && response.data) setTempData(response.data);
  };
