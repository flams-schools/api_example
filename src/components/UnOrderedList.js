import React from 'react'


const UnOrderedList = (props) => {
  return <ul className={props.styling}>{props.children}</ul>
}

export default UnOrderedList