import React, { useState } from 'react'
import DisplayCars from './DisplayCars'
export default function CarDetails() {
    const [cardetails, setcardetails] = useState([{
        Carname: "BMW",
        price: 200000,
        description: "BMW is a Classic and Known for its versatile design and engine",
        picture : "https://wallpapercave.com/wp/wp6522801.jpg"
    },
    {
        Carname: "Audi",
        price: 200000,
        description: "Audi is a cult known",
        picture : "https://wallpaperaccess.com/full/155161.jpg"
    },
    {
        Carname: "Benz",
        price: 200000,
        description: "Benz is a racing car ",
        picture : "https://wallpapercave.com/wp/TpayTNx.jpg"
    },
    {
        Carname: "Ferrari",
        price: 200000,
        description: "Ferrari is a Classic car",
        picture : "https://tse1.mm.bing.net/th?id=OIP.WJl4N_g5VbvciDZp-0RZcAHaEo&pid=Api&P=0&h=180"
    }])



    return (
        <div>
            <DisplayCars car={cardetails} />
        </div>
    )
}
