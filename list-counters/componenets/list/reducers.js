import * as A from './actions'
import { List } from 'immutable'
import listDispatch from './list-dispatch'

export const createStateReducer = (reduce, create) => (
  (state, action) => {
    if(state === undefined)
      state = new List

    switch(action.type) {
      case A.ADD:
        return state.push( create() )

      case A.REMOVE:
        return state.delete( action.payload )

      case A.SET: {
        const { index, value } = action.payload
        return state.set(index, value)
      }

      case A.ITEM_ACTION: {
        const { index, item_action } = action.payload
        return state.set(index, reduce(state.get(index), item_action))
      }

      default:
        return state
    }
  }
)

export const createTaskReducer = (reduce) => (dispatch, action, state) => {
  if(action.type !== A.ITEM_ACTION)
    return

  const { index, item_action } = action.payload
  reduce( listDispatch(index)(dispatch), item_action, state.get(index) )
}
