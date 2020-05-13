import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import { updateText, closePopup } from './store/actions/action';

function App(props) {
  // console.log(props.s)

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const api = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`;

  const search = (e) => {
    if (e.key === "Enter") {
      axios(api + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(api + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

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
        <Search
          handleInput={handleInput}
          search={search}
        // handleInput={props.updateText}
        />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

// export default App
const mapPropsToState = state => {
  return {
    s: state.reducer.s,
    results: state.reducer.results,
    selected: state.reducer.selected
  }
}

export default connect(mapPropsToState, {
  updateText,
  closePopup
})(App)