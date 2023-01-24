import React from "react";

function A({
			 href,
			 children,
			 className
		   }) {
  return (
	<a href = {href}
	   target = "_blank"
	   rel = "noopener noreferrer"
	   className = {className}
	>
	  {children}
	</a>
  );
}

export default A;