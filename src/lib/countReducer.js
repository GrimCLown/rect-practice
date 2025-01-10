export default function countReducer(state, action) {
    console.log('state', state)
    console.log('action', action)
    switch (action.type) {
      case 'increment': {
        return state + 1
      }
      case 'decrement': {
        return state - 1
      }
    }
  }