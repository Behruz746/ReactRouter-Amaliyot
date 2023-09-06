import React from 'react'

function Form() {
  return (
    <div className="Form">
      <form action="#">
        <label>
          <span>Your Email:</span>
          <input type="email" placeholder='Your email...' />
        </label>
        <label>
          <span>Your Question:</span>
          <textarea></textarea>
        </label>
      </form>
    </div>
  )
}

export default Form