import React from 'react'
import classes from "./Country.module.css"
const Country = ({ name, population, flag, region, capital, code, showInfo }) => {

    const showAllDetails = () => {
        showInfo(code);
    }

    return (
        <div className={classes.state} onClick={showAllDetails}>
            <div className={classes.flag_wrapper}>
                <img src={flag} alt="Country flag" className={classes.flag} />
            </div>
            <div className={classes.info}>
                <h2 className={classes.country_name}>{name}</h2>
                <p className={classes.content}>Population : <span>{population}</span></p>
                <p className={classes.content}>Region : <span>{region}</span></p>
                <p className={classes.content}>Capital : <span>{capital}</span></p>
            </div>
        </div>
    )
}

export default Country