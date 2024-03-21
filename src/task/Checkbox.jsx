import React, { useState } from 'react'

const Checkbox = () => {
   let activity=["playing cricket","playing carom","palying foodball"];
  let modify_activity=activity.map((item,index)=>{
    return {activity:item,checked:false}
  });
  const[sports,setSports]=useState(modify_activity);

 const RemoveItem=(index)=>{
  let data=sports.filter((item,i)=>i!==index);
  setSports(data)
  }

  const SelectItem=(index)=>{
    let data=sports.map((item,i)=>{
      if(i===index){
        item.checked=!item.checked
      }
      return item
    })
    console.log(data)
    setSports(data)
  }
  return (
    <div className="">
      {sports.length!==0?
      <>
      {sports.map((item,index)=>{
        return(
          <ul>
            <li><span><input type='checkbox' value={item.checked} onClick={()=>SelectItem(index)}/></span><span>{item.activity}</span>{item.checked&&<button onClick={()=>RemoveItem(index)}>Delete</button>}</li>
          </ul>
        )
      })}</>:<></>}
    </div>
  );
}

export default Checkbox