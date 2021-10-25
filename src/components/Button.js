import React from 'react'
const Button = ({button, onClickFunction}) => {
    const handleClick = () =>(
        onClickFunction(button)

    )
    return (
        <button onClick={handleClick}
         style={{background:"black", color:"white"}}>+{button}</button>
    )
}

export default Button
