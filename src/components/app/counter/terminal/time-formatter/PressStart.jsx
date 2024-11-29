import React from "react";

function PressStart() {
  return (
    <div className="terminal">
      <div className='start-span-container'>
        <span className='start-span' style={{
          fontSize: '13px',
          top: '25px',
          right: '44%'
          }}>
          Press
        </span>
        <span className='start-span' style={{
          fontSize: '18px',
          top: '42px',
          right: '43%'
          }}>
          Start
        </span>
      </div>
    </div>
  );
}


export default PressStart