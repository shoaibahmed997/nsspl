import React, { useEffect, useState } from 'react'
import { ObjToArr } from '../helper/objectToArray'
import { GetComplimentary } from '../helper/GetComplimentary'

// object to array is a function that takes in an object and convert it into an array.
// GetComplimentary is a function that either returns true or false if the caital/country is complimentary
// for e.g  germany and berlin are complimentary so it will return true

const Game = ({data}) => {

  let [items,setitems] = useState(ObjToArr(data)) // this is where our list of objects will be stored.
  let [selected1,setSelected1] = useState("") // this is to keep the first selected item
  let [selected2,setSelected2] = useState("") // this is to store the second selected item

//   this function helps to remove the item from the items array
  const removeFromArray  = (arr,item1,item2)=>{
    let newarr = arr.filter(item=>{
        return item.name !== item1.name && item.name !== item2.name
    })
    setitems(newarr)
}

//  this function is used to check for whether the selected item1 and item2 are complimentary
    const CheckforMatch = ()=>{
         if(selected1 && selected2){ // check if we have item1 and item2 for complimentary comparision.

            if( GetComplimentary(data,selected1.name,selected2.name)){ // if the item1 is country/capital of item2
                removeFromArray(items,selected1,selected2) // then remove them from the array
            }else{ // if not then change their color to red
                let newarr = items.map(_item=>{
                    if(_item.state =='selected'){
                        return {..._item,state:'wrong'}
                    }
                    return _item
                })
                setitems(newarr)
            }
            // at the end remove both item1 and item2 for the new two values.
        setSelected1("")
        setSelected2("")
      }
    }

    const handler = (item)=>{// the onClick handler function for every button
        if(selected1){ // 
            setSelected2(item)
            let newarr = items.map(_item=>{
                if (_item.name === item.name){
                    return {..._item,state:"selected"}
                }
                return _item
            })
            setitems(newarr)

        }else{
            setSelected1(item)
            let newarr = items.map(_item=>{
                if (_item.name === item.name){
                    return {..._item,state:"selected"}
                }
                return {..._item,state:""}
            })
            setitems(newarr)
        }
    }

    useEffect(()=>{
        CheckforMatch() // run this everytime when we change the item2 => for comparision.
    },[selected2])

  return (
    <div> Memory Game
        <div className='box'>
            {items.length > 0 ? items.map((item,index)=>(
                <button className={item.state} onClick={()=>handler(item,index)} key={item.name}>{item.name}</button>
            )):
            <h1>Congratulations</h1>
            }
        </div>
    </div>
  )
}

export default Game