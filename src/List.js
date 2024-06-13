import React,{useState} from 'react'

export default function List() {
    const [employees , setemployees] = useState([{
        name: "bharath",
        age : 20,
        id : 111,
        gender :"male"
    },
    {
        name : "ashritha",
        age : 23,
        id : 112,
        gender : "female"
    },
    {
        name : "bikshu",
        age : 43,
        id : 113,
        gender : "male"
    },
    {
        name : "ambika",
        age : 29,
        id : 116,
        gender : "female"
    }

])
    return (
        <div>
            
        </div>
    )
}
