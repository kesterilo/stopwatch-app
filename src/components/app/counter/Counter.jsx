import React from 'react';
import Terminal from './terminal/Terminal';
import Buttons from './buttons/Buttons';

const Counter = ({ reset, pause, start, isPaused, time, onReset }) => {
	return (
		<div className="counter">
			<h3 className="sub-header">Focus&trade;</h3>
			<Terminal time={time} onReset={onReset} />
			<Buttons reset={reset} pause={pause} start={start} isPaused={isPaused} />
		</div>
	);
};

export default Counter;
