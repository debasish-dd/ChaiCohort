import { useState } from "react"

export function App(){
    
    const [message, setMessage] = useState("loading")

    return (
        <div>
            <h1>Welcome To React with ChaiCohort</h1>
            <p>serving chai with react</p>
            <h2>{message}</h2>
        </div>
    )
}