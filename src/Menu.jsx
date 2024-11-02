import React from 'react'

const Menu = ({menuName,className}) => {
  return (
   <ul>
    <li className={` text-center ${className}`}>{menuName}</li>
   </ul>
  )
}

export default Menu
