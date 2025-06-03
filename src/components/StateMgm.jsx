

import React, { useEffect, useState } from 'react'

const StateMgm = () => {

  const [city, setCity] = useState("hyderabad");


  useEffect( () => {
    if(city === "hyderabad"){
      setCity("Bangalore")
    }else{
      setCity("Delhi")
    }
  }, [])

  return (
    <div>I live in {city}</div>
  )
}

export default StateMgm