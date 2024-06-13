import React, { useState } from 'react'

export default function Home() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function submit() {
        console.log(name, password);
        setName("")
        setPassword("")

    }
    return (
        <div>
            <h1>This is Home </h1>
            <p>
                <input placeholder="enter your name " onChange={(e) => { setName(e.target.value) }} />
            </p>
            <p>
                <input value={password} placeholder="enter your password " onChange={(e) => { setPassword(e.target.value) }} />
            </p>
            <button onClick={submit}>submit</button>

        </div>
    )
}
