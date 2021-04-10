import React from 'react';
import PropTypes from "prop-types";
import {ROUTES} from "../../../../routes/routesNames";
import {Link} from "react-router-dom";

import './style.css'

const Counter = ({countValue,parity,handleIncrement,handleDecrement,handleReset,countScreen}) => {
    return (
        <div className='counter_wrapper'>
            <div className={countScreen}> {countValue}</div>
            <div>{parity}</div>
            <div className ='buttons_wrapper'>
                <button className='buttons' onClick={handleIncrement}>+</button>
                <button className='buttons' onClick={handleReset}>reset</button>
                <button className='buttons' onClick={handleDecrement}>-</button>
            </div>
            <Link to={ROUTES.HOME_PAGE}>
                <button>Go to home page</button>
            </Link>
        </div>

    );
};
Counter.propTypes ={
    countValue: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
}
export default Counter;