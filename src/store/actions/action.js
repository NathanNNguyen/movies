
export const updateText = e => {
  return { type: 'UPDATE_TEXT', payload: e.target.value }
}

export const closePopup = () => {
  return { type: 'CLOSE_POPUP' }
}

