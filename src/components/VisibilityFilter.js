import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const VisibilityFilter = (props) => {

  return (
    <div>
      all
      <input
        type="radio"
        name="filter"
        onChange={() => props.filterChange('ALL')}
      />
      important
      <input
        type="radio"
        name="filter"
        onChange={() => props.filterChange('IMPORTANT')}
      />
      nonimportant
      <input
        type="radio"
        name="filter"
        onChange={() => props.filterChange('NONIMPORTANT')}
      />
    </div>
  )
}

export default connect(null, { filterChange })(VisibilityFilter)