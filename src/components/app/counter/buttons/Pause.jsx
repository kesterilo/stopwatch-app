import React from "react";

import { useGlobalContext } from "../../../../context";

export function Pause({ pause }) {
  
  const { isPaused } = useGlobalContext()
  
  return <div onClick={pause} className='pause button reset-pause'>{isPaused ? 'Resume' : 'Pause'} </div>;
}
  