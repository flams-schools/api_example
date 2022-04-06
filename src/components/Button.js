import React from 'react';

const Button = ({ title, getData }) => {
  // console.log(getData)
  return <button onClick={getData}>{title}</button>
}

export default Button