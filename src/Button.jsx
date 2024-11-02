import React from 'react'

const Button = ({btnText,classname}) => {
  return (
    <button className={`${classname}`}>
      {btnText}
    </button>
  )
}

export default Button
