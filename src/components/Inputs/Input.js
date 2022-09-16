import React from 'react';
import { FaSearch } from "react-icons/fa";
import classes from "./Input.module.css";

const Input = ({ searchCountry, selectedCountry }) => {
  return (
    <div className={classes.search_list}>
      <div className={classes.search}>
        <FaSearch className={classes.search_icon} />
        <input
          type="text"
          name="search"
          className={classes.search_input}
          placeholder='Search for a country...'
          onChange={searchCountry}
        />
      </div>
      <div className={classes.change_continent}>
        <select className={classes.select} onChange={selectedCountry}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default Input