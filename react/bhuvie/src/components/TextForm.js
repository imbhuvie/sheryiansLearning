import React from 'react'
import PropTypes from 'prop-types'

const TextForm = (props) => {
  return (
    <div className="col-4 container text-center">
        <h3 class="lead bold"><strong>{props.heading}</strong></h3>
      
      <textarea name="text" id="mybox" cols="30" rows="5" class="form-control mt-3"></textarea>
      <button className="btn btn-primary mt-3">convert to uppercase</button>
    </div>
  )
}

export default TextForm