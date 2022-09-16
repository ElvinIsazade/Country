import './App.css';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import Input from './components/Inputs/Input';
import { Routes, Route, useNavigate } from "react-router-dom";
import CountryInfo from './components/Country/CountryInfo';
import React, { useState, useEffect } from "react";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const changeMode = () => {
    setDarkMode(prevState => !prevState);
  }

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    try {

      getCountries()

    } catch (error) {
      console.log(error.message);
    }
  }, [])


  const getCountries = async () => {
    setLoading(true);
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
    setLoading(false);
  }



  const notCountry = countries.status || countries.message;



  const searchCountry = (e) => {
    const value = e.target.value;
    if (value) {
      const choosingCountries = async () => {
        setLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/name/${value}`);
        const data = await res.json();
        setCountries(data);
        setLoading(false);
      }
      try {
        choosingCountries()
      } catch (error) {
        console.log(error.message);
      }
    } else {
      getCountries()
    }
  }



  const selectedCountry = (e) => {
    const selectValue = e.target.value;
    if (selectValue) {
      const selectingState = async () => {
        setLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/region/${selectValue}`);
        const data = await res.json();
        setLoading(false);
        if (selectValue === "All") {
          try {
            getCountries();
          } catch (error) {
            console.log(error);
          }
          return;
        }
        setCountries(data);
      }
      try {
        selectingState();
      } catch (error) {
        console.log(error);
      }
    }
  }

  const showInfo = (code) => {
    navigate(`/${code}`);
  }


  console.log(countries);


  return (

    <div className={`app ${darkMode ? `dark_mode` : ""}`}>
      <Header changeMode={changeMode} darkMode={darkMode} />

      <Routes>
        <Route path='/' element={
          <>
            <Input
              searchCountry={searchCountry}
              selectedCountry={selectedCountry}
            />
            <div className="countries">
              {loading ? <h1>Loading...</h1> : (
                !notCountry ? countries.map((country) => {
                  return <Country
                    key={country.cca3}
                    code={country.cca3}
                    name={country.name.common}
                    capital={country.capital}
                    population={country.population}
                    region={country.region}
                    flag={country.flags.png}
                    showInfo={showInfo}
                  />
                }) : <p>Country is not</p>
              )

              }
            </div>
          </>

        } />
        <Route path='/:info' element={<CountryInfo countries={countries} />} />
      </Routes>
    </div>

  );
}

export default App;
