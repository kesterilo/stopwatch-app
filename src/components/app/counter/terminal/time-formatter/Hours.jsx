import React from "react";

export function Hours({ hours, mins, secs, mlsecs }) {
  return (
		<div className="terminal">
			{hours} : {mins} : {secs} . <span
				style={{
					fontSize: '18px',
					marginLeft: '4px',
				}}>
				{mlsecs}
			</span>
		</div>
	);}