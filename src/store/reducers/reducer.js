const initialState = {
  s: "",
  results: [],
  selected: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        s: action.payload
      }

    case 'SEARCH':
      return {
        ...state,
        results: action.payload,
        selected: {}
      }

    case 'OPEN':
      return {
        ...state,
        selected: action.payload
      }

    case 'CLOSE_POPUP':
      return {
        ...state,
        selected: {}
      }
    default:
      return state;
  }
}