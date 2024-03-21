import React, { useState } from 'react'

const Dropdown = () => {
    let countrys = [{
        name: "India", state: [
            "TamilNadu",
            "kerala",
            "Maharashtra"
        ]
    }, {
        name: "United_state", state: ["canada","alabama"]
    }, {
        name: "Singapore", state: [
            "SG"
        ]
    },
    ]

  const [country,setCountry]=useState(0);
  
//   const handleSelect=(e)=>{
//     console.log(e)
//   }

    return (
        <div>
            <select value={country} onChange={(e)=>{
                setCountry(e.target.value)}}>
                {countrys.map((item,i)=>{
                    return(
                        <option value={i}>{item.name}</option>
                    )
                })}
            </select>

            <select value={country} >
                {countrys[country].state.map((item,index)=>{
                    return(
                        <option value={index}>{item}</option>
                    )
                })}
            </select>



        </div>
    )
}

export default Dropdown