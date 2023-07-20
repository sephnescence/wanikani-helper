import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  render(<App />)
  const applicationRole = screen.getByRole("application")
  expect(applicationRole).toBeInTheDocument()

  const listSubjects = screen.getByText(/Hello/i)
  expect(listSubjects).toBeInTheDocument()
})
