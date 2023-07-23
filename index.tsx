import React from "react"
import { createRoot } from "react-dom/client"
import App from "./src/App"

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(
    <App>
      <h5>Here</h5>
      <h5>are</h5>
      <h5>a</h5>
      <h5>few</h5>
      <h5>children</h5>
    </App>
  )
}
