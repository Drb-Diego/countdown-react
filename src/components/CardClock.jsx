import React, { useContext } from "react";
import context from "../context/context";

import "../styles/cardClock.scss";

import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

export default function CardClock() {
  const { hour, minutes, seconds } = useContext(context);

  return (
    <>
      <div className='card-container'>
        <div className='card-content' name='hour'>
          <FaCaretLeft className='increment' />
          <h1>{hour}</h1>
          <FaCaretRight className="decrement" />
        </div>
        <p>Hora</p>
      </div>

      <div className='card-container'>
        <div className='card-content' name='hour'>
          <FaCaretLeft className='increment' />
          <h1>{minutes}</h1>
          <FaCaretRight className="decrement" />
        </div>
        <p>Minutos</p>
      </div>

      <div className='card-container'>
        <div className='card-content' name='hour'>
          <FaCaretLeft className='increment' />
          <h1>{seconds}</h1>
          <FaCaretRight className="decrement" />
        </div>
        <p>Segundos</p>
      </div>
    </>
  );
}
