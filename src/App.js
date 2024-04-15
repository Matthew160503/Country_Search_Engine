import TextField from "@mui/material/TextField";

import "./styles/style.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PATH_API = "https://restcountries.com/v3.1/all";

function App() {
    const [countries, setCountries] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    const getCountries = () => {
        axios
            .get(PATH_API)
            .then((resp) => setCountries(resp.data))
            .catch((err) => console.error("Something went wrong!", err));
    };

    useEffect(() => {
        getCountries();
    }, []);

    const filteredCountries = countries.filter((country) => {
        return country.name.common
            .toLowerCase()
            .includes(inputValue.toLowerCase());
    });

    const handleItemClick = (event) => {
        setInputValue(event.target.textContent);
        setIsOpen(!isOpen);
    };

    const handleInputClick = () => {
        setIsOpen(true);
    };

    return (
        <div className="page">
            <div className="content">
                <Header />

                <div className="form">
                    <form className="search">
                        <TextField
                            label="Find the country..."
                            id="outlined-basic"
                            variant="outlined"
                            type="text"
                            onChange={(event) =>
                                setInputValue(event.target.value)
                            }
                            className="search__input"
                            value={inputValue}
                            onClick={handleInputClick}
                        />
                        <ul className="autocomplete">
                            {inputValue && isOpen
                                ? filteredCountries.map((country) => (
                                      <li
                                          key={country.name.official}
                                          className="autocomplete__item"
                                          onClick={handleItemClick}
                                          value={country.name.common}
                                      >
                                          {country.name.common}
                                      </li>
                                  ))
                                : null}
                        </ul>
                    </form>
                </div>

                <section className="container">
                    {filteredCountries.map((country) => (
                        <Country
                            key={country.name.official}
                            country={country}
                        />
                    ))}
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default App;
