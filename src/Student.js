function Student(props){
    console.log(props)
    return(
        <div>
            <h1>Student details</h1>
            <p>name is : {props.name}</p>
            <p>Roll No : {props.rollno}</p>
        </div>
    )
}
export default Student