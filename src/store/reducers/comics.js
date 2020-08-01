export default function comics(state = [], action) {
  switch (action.type) {
    case 'ADD_COMIC':
      return [ ...state, action.comic]
    default:
      return state;
  }
}