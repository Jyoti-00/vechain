import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UberCallback = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [rideEstimates, setRideEstimates] = useState(null);

  useEffect(() => {
    const getAccessToken = async (code) => {
      const tokenUrl = 'https://login.uber.com/oauth/v2/token';
      const clientId = 'Hkk6cp5CoE0O4rPj-C0pKjs6_dRR_prC';   // Replace with your Uber Client ID
      const clientSecret = 'ao1MURhlQXTmM9o44ODD4nZ3hLMOV6UVONJk3yvf';  // Replace with your Uber Client Secret
      const redirectUri = 'http://localhost:3000/callback';  // Replace with your callback URL

      try {
        const response = await axios.post(tokenUrl, {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'authorization_code',
          redirect_uri: redirectUri,
          code: code
        });
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error("Error fetching access token", error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);

  const fetchRideEstimates = async () => {
    const startLat = 37.7752315;
    const startLng = -122.418075;
    const endLat = 37.7752415;
    const endLng = -122.518075;

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.get('https://api.uber.com/v1.2/estimates/price', {
        headers,
        params: {
          start_latitude: startLat,
          start_longitude: startLng,
          end_latitude: endLat,
          end_longitude: endLng,
        },
      });

      setRideEstimates(response.data.prices);
    } catch (error) {
      console.error("Error fetching ride estimates", error);
    }
  };

  return (
    <div>
      {accessToken ? (
        <div>
          <h3>Uber Access Token Retrieved</h3>
          <button onClick={fetchRideEstimates}>Get Ride Estimates</button>

          {rideEstimates && (
            <ul>
              {rideEstimates.map((estimate) => (
                <li key={estimate.product_id}>
                  {estimate.localized_display_name}: {estimate.estimate}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <h3>Fetching Access Token...</h3>
      )}
    </div>
  );
};

export default UberCallback;
