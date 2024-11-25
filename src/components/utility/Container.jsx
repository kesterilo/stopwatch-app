import React from 'react'

const Container = ({ children }) => {
  return (
		<div className="container">
			{children[0]}
      <div className="counterCard">
        {children[1]}
      </div>
			{children[2]}
		</div>
	);
}

export default Container