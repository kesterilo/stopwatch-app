import { MillliSeconds } from './MillliSeconds';
import { Seconds } from './Seconds';
import { Minutes } from './Minutes';
import { Hours } from './Hours';
import React from 'react'
import PressStart from './PressStart'
import { useGlobalContext } from '../../../../../context';


let hours = 0
let mins = 0
let secs = 0
let mlsecs = 0


const TimeFormatter = () => {
  
  const { time, onReset } = useGlobalContext()
  
  mlsecs = time % 100
  
  if (mlsecs == 99) {
    secs = secs + 1 /* For production this should be 'secs + 1' */
  }
  
  if (secs == 60) {
    mins = mins + 1
    secs = 0
  }
  
  if (mins == 60) {
    hours = hours + 1
    mins = 0
  }
  
  if (onReset) {
      hours = 0
      mins = 0
      secs = 0
      mlsecs = 0
  }
  
  
  
  return (
		<>
			{!hours & !mins & !secs & !mlsecs ? (
				<PressStart />
			) : hours ? (
				<Hours hours={hours} mins={mins} secs={secs} mlsecs={mlsecs} />
			) : !hours && mins ? (
				<Minutes mins={mins} secs={secs} mlsecs={mlsecs} />
			) : !hours && !mins && secs ? (
				<Seconds secs={secs} mlsecs={mlsecs} />
			) : (
				<MillliSeconds mlsecs={mlsecs} />
			)}
		</>
	);
  
}

export default TimeFormatter