const initialState = {
  s: "",
  results: [],
  selected: {}
}

export const reducer = (state = initialState, action) => {
  console.log(state.s)
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        s: action.payload
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