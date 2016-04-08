import { h } from 'deku'

export const button = (label, onClick) => (
  h('button', {onClick}, [label])
)

export const actionCreator = (action) => (dispatch, ...rest) => (e) => {
  e.preventDefault()
  dispatch( action.apply(undefined, rest || []) )
}
