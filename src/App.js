import { useState } from "react"
import Student from './Student'
import CarDetails from "./CarDetails"

import { BrowserRouter,Routes,Route, } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navigation from "./components/Navigation"
import Contact from "./components/Contact"

function App(){

  //const [studentName,setstudentName] = useState('prabhas')
  const [age ,setage] = useState(23)

  return(
    // <div>
    //   <p>Hello Datta</p>
    //   <p>Age is :{age}</p>
    //   <Student name ="sai" rollno ="1234"/>
    //   <Student name = "datta" rollno ="08"/>
    //   <Student name = "bvmndk" rollno ="0080"/>
    //   <CarDetails/>
    // </div>
    // <div>
    //   <CarDetails/>
    // </div>

    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/contact" element ={<Contact/>}/>
        <Route path ="/about" element = {<About/>}/>
        
      </Routes>
      
      
      </BrowserRouter>
    </div>
  )
}
export default App