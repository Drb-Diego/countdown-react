import React, { useState } from 'react'
import Context from './context'

export default function Provider({ children }) {
  const [hour, setHour] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const providerValue = {
    hour,
    setHour,
    minutes,
    setMinutes,
    seconds,
    setSeconds
  }

  return (
    <Context.Provider value={ providerValue }>
      {children}
    </Context.Provider>
  );
}