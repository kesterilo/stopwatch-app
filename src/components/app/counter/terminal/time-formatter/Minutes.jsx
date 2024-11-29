import React from "react";


export function Minutes({ mins, secs, mlsecs }) {
	
  return (
		<div className="terminal">
			{mins} : {secs} . <span
				style={{
					fontSize: '18px',
					marginLeft: '4px',
				}}>
				{mlsecs}
			</span>
		</div>
	);
					}