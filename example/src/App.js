import React from 'react'
import { Notebook } from 'notebooksheet'
import 'notebooksheet/dist/index.css'
const App = () => {
  const items = []
  // Example items
  // items[0] = 'one'
  // items[1] = 'two'

  const heading = '' // Enter a heading

  return <Notebook heading={heading} items={items} />
}

export default App
