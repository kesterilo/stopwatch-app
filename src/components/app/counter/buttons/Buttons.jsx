import { Pause } from './Pause';
import { Reset } from './Reset';
import { Start } from './Start';
import React from 'react'

const Buttons = ({ reset, pause, start}) => {
  return (
    <div className="buttons">
      <div className='reset-pause-container'>
        <Reset   reset={reset}  />
        <Pause   pause={pause} />
      </div>
			<Start   start={start}  />
		</div>
	);
}

export default Buttons