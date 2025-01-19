import React from "react";

const Button = ({ isActive, children, onClick, onActive }) => 
(
<button style={{backgroundColor: isActive ? "red" : onActive ? "blue" : undefined}} onClick={onClick}>{children}</button>
);

export default Button;