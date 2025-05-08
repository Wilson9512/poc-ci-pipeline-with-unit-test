import { useState } from 'react'

function App() {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <h1>Hello Vite + React</h1>
      <button onClick={() => setClicked(true)}>點我</button>
      {clicked && <p>你點了按鈕！</p>}
    </>
  )
}

export default App