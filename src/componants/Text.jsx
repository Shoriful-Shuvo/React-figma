import React from 'react'

const Text = (props) => {
  return (
    <props.tag className={props.className} > {props.Text} </props.tag>
  )
}

export default Text