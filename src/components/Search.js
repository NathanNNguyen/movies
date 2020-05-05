import React from 'react'

function Search({ handleInput, search, submit }) {
  return (
    <section className="searchbox-wrap">
      <span></span>
      <span></span>
      <input
        type="text"
        placeholder="Movies..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
      <span></span>
      <span></span>
      <span></span>

      {/* <button className='btn' onClick={submit}>
        Search
      </button> */}
    </section>
  )
}

export default Search

