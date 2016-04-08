import { h } from 'deku'
import { button, actionCreator } from '../utils' 
import * as A from './actions'

const comp = ({ props, dispatch }) => (
  h('p', {}, [
    `Counter: ${props.value} `,
    button('+', increment(dispatch)),
    ' ',
    button('-', decrement(dispatch)),
    ' ',
    button('odd? +', incIfOdd(dispatch)),
    ' ',
    button('Async +', incAsync(dispatch, 1000))
  ])
)

const increment = actionCreator(A.increment)
const decrement = actionCreator(A.decrement)
const incIfOdd = actionCreator(A.incIfOdd)
const incAsync = actionCreator(A.incAsync)

export default function Counter(value = 0) {
  return h(comp, {value})
}
