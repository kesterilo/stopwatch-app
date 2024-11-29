import React from "react";


export function Seconds({ secs, mlsecs }) {
  
  return <div className="terminal">
    {secs} . <span style={{
      'fontSize': '18px',
      'marginLeft': '4px'
    }}>{mlsecs}</span>
        </div>;
        }
  