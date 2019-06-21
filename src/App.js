import React from 'react'
import  { useEffect } from 'react' 
import { connect } from 'react-redux'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import noteService from './services/notes'
import { initializeNotes } from './reducers/noteReducer'

const App = (props) => {
  useEffect(() => {
    noteService
      .getAll().then(notes => props.initializeNotes(notes))
  }, [])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default connect(null, { initializeNotes })(App) 