import React from 'react'

import Result from './Result'

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {results.map((result, i) => (
        <Result key={i} result={result} openPopup={openPopup} />
      ))}
    </section>
  )
}

export default Results