import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import React from "react"
import App from "../App"

test("Assert that the greeting is shown if it's provided", () => {
  render(<App greeting="Heya!" />)
  const app = screen.getByRole("application")

  expect(app).toMatchInlineSnapshot(`
    <div
      role="application"
    >
      <h1>
        Hello world! I am using React
      </h1>
      <h2>
        Heya!
      </h2>
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

test("Assert that the greeting is not shown if it's not provided", () => {
  render(<App />)
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
