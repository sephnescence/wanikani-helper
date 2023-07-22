import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react"
import React from "react"
import App from "../App"

test("App tests", () => {
  render(<App greeting='Heya!' />)
  const app = screen.getByRole("application")

  expect(app).toMatchInlineSnapshot(`
    <div
      role="application"
    >
      <h1>
        Hello world! I am using React
      </h1>
    </div>
  `)

  const heading = screen.getByText(/Hello world! I am using React/i)
  expect(heading).toMatchInlineSnapshot(`
    <h1>
      Hello world! I am using React
    </h1>
  `)
  expect(heading).toBeInTheDocument()
})
