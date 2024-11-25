import React from "react";
export function Pause({
  pause,
  isPaused
}) {
  return <div onClick={pause} className='pause button reset-pause'>{isPaused ? 'Resume' : 'Pause'} </div>;
}
  