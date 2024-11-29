import React from 'react';
import Terminal from './terminal/Terminal';
import Buttons from './buttons/Buttons';

const Counter = ({ reset, pause, start}) => {
	return (
		<div className="counter">
			<h3 className="sub-header">Focus&trade;</h3>
			<Terminal />
			<Buttons reset={reset} pause={pause} start={start} />
		</div>
	);
};

export default Counter;
