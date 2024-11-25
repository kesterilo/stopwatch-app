import React from 'react'
import TimeFormatter from './time-formatter/TimeFormatter'

const Terminal = ({ time, onReset }) => {
  return (
    <>
      <TimeFormatter time={time} onReset={onReset} />
    </>
  )
}

export default Terminal