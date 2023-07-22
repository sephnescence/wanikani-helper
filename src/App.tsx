import React from "react"

type AppPropTypes = {
  greeting?: string
}

const App = (props: AppPropTypes) => {
  return (
    <div role="application">
      <h1>Hello world! I am using React</h1>
      {props.greeting && <h2>{props.greeting}</h2>}
    </div>
  )
}

export default App
