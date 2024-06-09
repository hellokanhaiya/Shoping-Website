import React, { useEffect, useState } from "react";

const SpotifySearch = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null); // New state to store errors

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch(
          `https://v1.nocodeapi.com/kanha277501/spotify/bNrXEcYIXostrHGz/browse/new`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Check if the expected properties exist
        if (data?.tracks?.items) {
          setResults(data.tracks.items);
        } else {
          throw new Error("No track items found in the response");
        }
      } catch (error) {
        setError(error.message); // Store error message in state
        console.error("Error fetching data:", error);
      }
    }; // Define headers if required; otherwise, you can omit this part
    var myHeaders = new Headers();
    // If an authorization token is needed, you would add it here
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET", // Ensure the method is uppercase
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://v1.nocodeapi.com/kanha277501/spotify/bNrXEcYIXostrHGz/browse/new",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Assuming the response is text
      })
      .then((result) => console.log(result))
      .catch((error) => {
        console.error("An error occurred:", error);
        // Optional: Add additional error handling logic here
      });

    fetchSpotifyData();
  }, []); // Dependencies array

  return (
    <div>
      <h1>Spotify Search Results</h1>
      {error ? ( // Display error message if any
        <p>Error: {error}</p>
      ) : (
        <ul>
          {results.map((item, index) => (
            <li key={index}>
              {item.name} by {item.artists[0].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SpotifySearch;
