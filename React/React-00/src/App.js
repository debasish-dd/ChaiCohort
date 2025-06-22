import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const App = ()=>{
    return React.createElement(
        "div",
        { },
        React.createElement(
            "h1",
            {class : "test"},
            "CHAI CHILL & REACT"
        )
    )
}

const anotherApp = ()=>{
    return React.createElement(
        "h2",
        {},
        "This is heading 2"
    )
}
const container = document.getElementById("root")

const root = ReactDOM.createRoot(container); 
root.render(React.createElement(App))
// root.render(React.createElement(anotherApp))
