import React from 'react'

export default function DisplayCars(props) {
    return (
        <div>
            {
                props.car.map((carDetails) => (
                    <div>
                        <p> car name is :
                            {carDetails.Carname}
                        </p>
                        <p> car price is : {carDetails.price}</p>
                        <p>Description :{carDetails.description}</p>
                        <img src = {carDetails.picture} alt ={carDetails.Carname} style={{width:'200px'}}/>
                    </div>
                ))
            }
        </div>
    )
}
