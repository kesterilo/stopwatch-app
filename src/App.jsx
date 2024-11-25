import { useState } from 'react';
import Header from './components/app/Header';
import Counter from './components/app/counter/Counter';
import Footer from './components/app/Footer';
import Container from './components/utility/Container';

import './App.css';

const App = () => {
	const [time, setTime] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState('');
  const [onReset, setOnReset] = useState(false)

	const incrementTime = () => {
		setTime((prevTime) => prevTime + 1);
	};

	const start = () => {
    if (time) return;
    setOnReset(false)
		const id = setInterval(incrementTime, 10);
		setTimerId(id);
	};

  const reset = () => {
    setOnReset(true)
		setTime(0);
		setIsPaused(false);
		clearInterval(timerId);
		setTimerId('');
	};

	const pause = () => {
		if (!time & !isPaused) return;
		if (isPaused) {
			setIsPaused(false);
			const id = setInterval(incrementTime, 10);
			setTimerId(id);
		} else {
			setIsPaused(true);
			clearInterval(timerId);
    }
    setOnReset(false)
	};

	return (
		<Container>
			<Header />
			<Counter
				reset={reset}
				pause={pause}
				start={start}
				isPaused={isPaused}
        time={time}
        onReset={onReset}
			/>
			<Footer />
		</Container>
	);
};

export default App;
