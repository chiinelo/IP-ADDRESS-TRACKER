import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MapSection from "./components/MapSection";

function App() {
  const [ip, setIp] = useState("8.8.8.8");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState(10.0);
  const [long, setLong] = useState(10.0);
  const ipUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=at_nNZthcZB86uNbKERxF9D1NMSi9fZc&ipAddress=${ip}`;

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(ipUrl);
      const json = await res.json();
      update(json);
    }
    fetchApi();
  }, [ip, ipUrl]);

  const update = (json) => {
    setIp(json.ip);
    setCity(json.location.region);
    setCountry(json.location.country);
    setTimezone(json.location.timezone);
    setIsp(json.isp);
    setLat(json.location.lat);
    setLong(json.location.lng);
    setLoading(false);
  };
  function handleSubmit(inputValue) {
    setLoading(true);
    setIp(inputValue);
  }
  return (
    <>
      {loading ? null : (
        <div>
          <Header
            handleSubmit={handleSubmit}
            loading={loading}
            ip={ip}
            city={city}
            country={country}
            timezone={timezone}
            isp={isp}
          />

          <MapSection
            country={country || "Invalid ip"}
            city={city || "Invalid ip"}
            lat={lat || "Invalid ip"}
            long={long || "Invalid ip"}
            ipUrl={ipUrl || "Invalid ip"}
          />
        </div>
      )}
    </>
  );
}

export default App;
