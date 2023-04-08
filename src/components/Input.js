import React from 'react'

const Input = (props) => {
  return (<input type={props.type} name={props.name} value={props.text} />);
}

export default Input;