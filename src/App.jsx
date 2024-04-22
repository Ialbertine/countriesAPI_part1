import React from 'react'
import { useState, useEffect } from "react";
import './App.css'

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error(`Error fetching countries: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container">
      <h1>Fetched Countries</h1>
      <div className="countries">
        {countries.map((country) => (
          <div key={country.name.common} className="country-card">
            <img src={country.flags.svg} alt={country.flags.alt} />
            <div className='country-header'>
              <h2>{country.name.common}</h2>
            </div>
            <div className="country-info">
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App