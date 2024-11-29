import { createContext, useContext, useState } from "react";


const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)


const AppContext = ({ children }) => {
  const [time, setTime] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [timerId, setTimerId] = useState('');
	const [onReset, setOnReset] = useState(false);
  
  
  return (
    <GlobalContext.Provider
      value={{
        time, 
        setTime,
        isPaused,
        setIsPaused,
        timerId,
        setTimerId,
        onReset,
        setOnReset
      }}>
      {children}
    </GlobalContext.Provider>
  )
    
}

export default AppContext