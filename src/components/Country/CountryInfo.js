import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import classes from "./CountryDetail.module.css";
import { useParams, useNavigate } from "react-router-dom";

const CountryInfo = ({ countries }) => {

    const navigate = useNavigate();

    const params = useParams();

    const codeCountry = params.info;

    const back = () => {
        navigate("/");
    }

    let name;
    let flag;
    let nativeName = [];
    let region;
    let subRegion;
    let capital;
    let population;
    let topLevelDomain;
    let currencies = [];
    let languages = [];
    let borders = [];

    countries.forEach((country) => {
        if (country.cca3 === codeCountry) {
            name = country.name.common;
            flag = country.flags.png;
            population = country.population;
            capital = country.capital;
            region = country.region;
            subRegion = country.subregion;
            topLevelDomain = country.tld[0];

            country.borders?.forEach((border) => {
                borders.push(border);
            });
            // console.log(Object.values(country.languages));

            for (const stateLanguage of Object.values(country.languages)) {
                // console.log(stateLanguage);
                languages.push(stateLanguage);
            }

            // console.log(Object.values(country.currencies));

            for (const currency of Object.values(country.currencies)) {
                // console.log(currency.name);
                currencies.push(`${currency.symbol} ${currency.name}`);
            }

            // console.log(Object.values(country.name.nativeName));

            for (const native of Object.values(country.name.nativeName)) {
                // console.log(native.official);

                nativeName.push(native.official);
            }
        }
    })
    // console.log(borders);
    // console.log(languages);
    // console.log(currencies);
    console.log(nativeName);




    return (
        <div className={classes.country_info}>
            <button className={classes.back} onClick={back}>
                <FaArrowLeft />
                Go Back
            </button>
            <div className={classes.main_info}>
                <div className={classes.country_flag}>
                    <img src={flag} alt="flag" className={classes.flag} />
                </div>
                <div className={classes.detail}>
                    <h3 className={classes.name}>{name}</h3>
                    <div className={classes.detail_wrapper}>
                        <div className={classes.left_info}>
                            <p className={classes.native}>Native name:
                                {
                                    nativeName.length ? (
                                        nativeName.map(native => {
                                            return <span className='content' key={native}>{native}</span>
                                        })
                                    ) : <span className='content'>Naative name is not</span>
                                }
                            </p>
                            <p className={classes.native}>Population: {" "} <span className='content'>{population}</span></p>
                            <p className={classes.native}>Region: {" "} <span className='content'>{region}</span></p>
                            <p className={classes.native}>Sub region: {" "} <span className='content'>{subRegion}</span></p>
                        </div>
                        <div className={classes.right_info}>
                            <p className={classes.native}>Capital: {" "} <span className='content'>{capital}</span></p>
                            <p className={classes.native}>Top-level-domain: {" "} <span className='content'>{topLevelDomain}</span></p>
                            <p className={classes.native}>Currencies:
                                {
                                    currencies.length ? (
                                        currencies.map(currency => {
                                            return <span className='content' key={currency}>{currency}</span>
                                        })
                                    ) : <span className='content'>Not currency</span>
                                }
                            </p>
                            <p className={classes.native}>Languages:
                                {
                                    languages.length ? (
                                        languages.map(language => {
                                            return <span className='content' key={language}>{language}</span>
                                        })
                                    ) : <span className='content'>Not language</span>
                                }
                            </p>
                        </div>

                    </div>
                    <span className={classes.border}>Border Countries:</span>
                    {borders.length ? (
                        borders.map((border) => {
                            return <div className={classes.border_state} key={border} onClick={() => {
                                navigate(`/${border}`)
                            }}>
                                <p>{border}</p>
                            </div>
                        })
                    ) : <p>Not borders</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CountryInfo