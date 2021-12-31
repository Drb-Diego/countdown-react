import React, { useContext } from "react";
import context from "../context/context";

import "../styles/cardClock.scss";

import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

export default function CardClock() {
  const { 
    hour, 
    minutes, 
    seconds,
    handleIncrementHour,
    handleDecrementHour,
    handleIncrementMinutes,
    handleDecrementMinutes,
    handleIncrementSeconds,
    handleDecrementSeconds,
  } = useContext(context);

  return (
    <>
      <div className='card-container'>
        <div className='card-content' >
          <FaCaretLeft className='increment' onClick={ handleIncrementHour } />
          <h1>{hour === 0 ? '00' : hour }</h1>
          <FaCaretRight className="decrement" onClick={ handleDecrementHour } />
        </div>
        <p>Hora</p>
      </div>

      <div className='card-container'>
        <div className='card-content' >
          <FaCaretLeft className='increment' onClick={handleIncrementMinutes} />
          <h1>{minutes === 0 ? '00' : minutes}</h1>
          <FaCaretRight className="decrement" onClick={ handleDecrementMinutes } />
        </div>
        <p>Minutos</p>
      </div>

      <div className='card-container'>
        <div className='card-content' >
          <FaCaretLeft className='increment' onClick={ handleIncrementSeconds } />
          <h1>{seconds === 0 ? '00' : seconds}</h1>
          <FaCaretRight className='decrement' onClick={ handleDecrementSeconds } />
        </div>
        <p>Segundos</p>
      </div>
    </>
  );
}
