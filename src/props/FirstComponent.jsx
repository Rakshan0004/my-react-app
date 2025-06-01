

import React from 'react'

const FirstComponent = (props) => {
  console.log(props)
  return (

    <div>{ props.name }</div>
  )
}

export default FirstComponent