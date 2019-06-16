import React from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'

const App = (props) => {

  return (
    <div>
      <NewNote store={props.store} />
      <Notes store={props.store} />
    </div>
  )
}

export default App