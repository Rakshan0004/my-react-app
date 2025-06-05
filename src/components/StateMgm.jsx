

import React, { useEffect, useState } from 'react'

const StateMgm = () => {

  const [city, setCity] = useState("hyderabad");


  useEffect( () => {
    if(city === "hyderabad"){
      setCity("Bangalore")
    }else{
      setCity("Delhi")
    }
  }, [city]) // dependency array "[]" make sures it keep track of only listed dependencies like city here, it triggers the effect only when they change

  return (
    <div>I live in {city}</div>
  )
}

export default StateMgm