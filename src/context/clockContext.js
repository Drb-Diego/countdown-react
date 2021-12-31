import React, { useState } from 'react'
import Context from './context'

export default function Provider({ children }) {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const handleIncrementHour = () => {
    if(hour < 23) setHour(hour + 1);
  }

  const handleDecrementHour = () => {
    if(hour > 0) setHour(hour - 1);
  }

  const handleIncrementMinutes = () => {
    if(minutes < 59)  setMinutes(minutes + 1);

    else {
      if (hour < 23) setHour(hour + 1);
      setMinutes(0);
    }
  }

  const handleDecrementMinutes = () => {
    if(minutes > 0) setMinutes(minutes - 1);
  }

  const handleIncrementSeconds = () => {
    if(seconds < 59)  setSeconds(seconds + 1);

    else {
      if (minutes < 59) setMinutes(minutes + 1);
      setSeconds(0);
    }
  }

  const handleDecrementSeconds = () => {
    if(seconds > 0) setSeconds(seconds - 1);
  }

  const providerValue = {
    hour,
    handleIncrementHour,
    handleDecrementHour,
    minutes,
    handleIncrementMinutes,
    handleDecrementMinutes,
    seconds,
    handleIncrementSeconds,
    handleDecrementSeconds,
  }

  return (
    <Context.Provider value={ providerValue }>
      {children}
    </Context.Provider>
  );
}