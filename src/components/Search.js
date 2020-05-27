import React from 'react'
import { connect } from 'react-redux';
import { updateText, search } from '../store/actions/action'

function Search(props) {
  return (
    <section className="searchbox-wrap">
      <span></span>
      <span></span>
      <input
        type="text"
        placeholder="Search for movies"
        className="searchbox"
        onChange={props.updateText}
        onKeyPress={(e) => props.search(e, props.s)}
      />
      <span></span>
      <span></span>
      <span></span>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    s: state.reducer.s
  }
}

export default connect(mapStateToProps, {
  updateText, search
})(Search)

