

import React from 'react'

const FirstComponent = (props) => {

  const {name, city, area} = props.user;

  console.log(props)
  return (

    <div>
      <div>
        <h1>{name}</h1>
        <p>{city}</p>
        <p>{area}</p>
      </div>

    </div>
    
  )
}

export default FirstComponent