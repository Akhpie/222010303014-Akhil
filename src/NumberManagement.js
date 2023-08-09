import React, { useState } from "react";
import axios from "axios";

function NumberManagement() {
  const [urls, setUrls] = useState([]);
  const [numbers, setNumbers] = useState([]);

  const handleUrlInputChange = (e, index) => {
    const newUrls = [...urls];
    newUrls[index] = e.target.value;
    setUrls(newUrls);
  };

  const fetchNumbers = async () => {
    try {
      const response = await axios.get("http://localhost:8008/numbers", {
        params: { url: urls },
      });

      setNumbers(response.data.Numbers);
    } catch (error) {
      console.error("Error fetching numbers:", error.message);
    }
  };

  return (
    <div className="App">
      <h1>Number Management App</h1>
      <div>
        {urls.map((url, index) => (
          <div key={index}>
            <input
              type="text"
              value={url || ""}
              onChange={(e) => handleUrlInputChange(e, index)}
              placeholder="Enter URL"
            />
          </div>
        ))}
      </div>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      <div>
        {numbers.length > 0 && (
          <div>
            <h2>Unique Numbers</h2>
            <ul>
              {numbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NumberManagement;
