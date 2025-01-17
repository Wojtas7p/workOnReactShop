import React from "react";

const Button = ({
 isActive, 
    children,
     onClick,
  
    }) => (
<button style={{backgroundColor: isActive ? "red": undefined}} onClick={onClick}>{children}

  
</button>

);
 

export default Button;