import React from "react"

const App = ({greeting}: {greeting?: string}) => {
  return (
    <div role="application">
      <h1>Hello world! I am using React</h1>
      {greeting && <h2>{greeting}</h2>}
    </div>
  )
}

export default App
