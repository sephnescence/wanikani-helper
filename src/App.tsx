import React, { useState } from "react"

/*
The following works but should be avoided
const App = ({greeting}: {greeting?: string}) => {

Instead we should use either types or interfaces
For example - type

type AppProps = {
  greeting?: string
}

interface AppProps {
  greeting?: string
}

But why types over interfaces? I guess essentially public vs private, but for composition.
  If you intend to let it be extended, use an interface, otherwise a type is fine

interface ExtraAppProps extends AppProps {
  extra: string
}

Alternatively, it a type is used enough, we can use global.d.ts, as a way to declare it globally,
  so you don't even need to import it. Magic. Which is actually kind of bad, but hey. It's cleaner code

Check README.md for more info
*/

const App = ({ greeting }: AppProps) => {
  const [inputText, setInputText] = useState<string>()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value)
  }

  return (
    <>
      <div role="application">
        <h1>Hello world! I am using React</h1>
        {greeting && <h2>{greeting}</h2>}
      </div>
      <form>
        <label htmlFor="inputText">Input text</label>
        <input id="inputText" type="text" value={inputText} onChange={(e) => onChange(e)} />
      </form>
    </>
  )
}

export default App
