import * as A from './actions'

export function stateReducer(state, action) {
  if(state === undefined)
    state = 0

  switch(action.type) {
    case A.INCREMENT:
      return state + 1

    case A.DECREMENT:
      return state - 1

    default:
      return state
  }
}

export function taskReducer(dispatch, action, state) {
  switch(action.type) {
    case A.INCIFODD:
      if(state % 2 === 1)
        dispatch( A.increment() )
      break

    case A.INCASYNC:
      setTimeout(() => dispatch( A.increment() ), action.payload)
      break
  }
}
