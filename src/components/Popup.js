import React from 'react'
import { connect } from 'react-redux';
import { closePopup } from '../store/actions/action';

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>{selected.Title} <span>({selected.Year})</span></h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt='poster' />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    selected: state.reducer.selected
  }
}

export default connect(mapStateToProps, {
  closePopup
})(Popup)