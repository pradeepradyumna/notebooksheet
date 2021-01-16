# notebooksheet

> This gives a Notebook style div that displays a list of items passed styled in handwriting font.

[![NPM](https://img.shields.io/npm/v/notebooksheet.svg)](https://www.npmjs.com/package/notebooksheet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save notebooksheet
```

## Usage

```jsx
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
```

## License

MIT © [pradeepradyumna](https://github.com/pradeepradyumna)

## Keywords

[notebook](https://www.npmjs.com/search?q=keywords:notebook) [notebook-sheet](https://www.npmjs.com/search?q=keywords:notebook-sheet) [notebookstyle](https://www.npmjs.com/search?q=keywords:notebookstyle)
