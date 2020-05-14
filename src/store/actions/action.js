import axios from 'axios'

const api = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`;

export const updateText = e => {
  return { type: 'UPDATE_TEXT', payload: e.target.value }
}

export const search = (e, query) => {
  return dispatch => {
    if (e.key === "Enter") {
      axios(api + "&s=" + query).then(({ data }) => {
        let results = data.Search;

        dispatch({ type: 'SEARCH', payload: results })
      });
    }
  }
}

export const openPopup = id => {
  return dispatch => {
    axios(api + "&i=" + id).then(({ data }) => {
      let result = data;

      dispatch({ type: 'OPEN', payload: result })
    });
  }
}

export const closePopup = () => {
  return { type: 'CLOSE_POPUP' }
}

