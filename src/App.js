import React from 'react'
import { connect } from 'react-redux'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import { closePopup, openPopup } from './store/actions/action';

function App(props) {

  return (
    <div className="App">
      <header>
        <h1 className='wavy'>
          <span style={{ animationDelay: '.1s' }}>M</span>
          <span style={{ animationDelay: '.2s' }}>o</span>
          <span style={{ animationDelay: '.3s' }}>v</span>
          <span style={{ animationDelay: '.4s' }}>i</span>
          <span style={{ animationDelay: '.5s' }}>e</span>
          <span style={{ animationDelay: '.6s' }}>s</span>
          <span style={{ animationDelay: '.7s' }}>.</span>
          <span style={{ animationDelay: '.8s' }}>.</span>
          <span style={{ animationDelay: '.9s' }}>.</span>
        </h1>
      </header>
      <main>
        <Search />

        <Results results={props.results} openPopup={(id) => props.openPopup(id)} />

        {(typeof props.selected.Title != "undefined") ? <Popup /> : false}
      </main>
    </div>
  );
}

// export default App
const mapStateToProps = state => {
  return {
    results: state.reducer.results,
    selected: state.reducer.selected
  }
}

export default connect(mapStateToProps, {
  closePopup,
  openPopup
})(App)