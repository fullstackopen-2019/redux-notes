import React from 'react'
import Note from './Note'

import { toggleImportanceOf } from '../reducers/noteReducer'

const Notes = ({ store }) => {
  return (
    <ul>
      {store.getState().map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() =>
            store.dispatch(toggleImportanceOf(note.id))
          }
        />
      )}
    </ul>
  )
}

export default Notes