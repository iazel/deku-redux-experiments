import { h } from 'deku'
import { button, actionCreator } from '../utils' 
import * as A from './actions'
import listDispatch from './list-dispatch'
import override from '../../../deku-override'
import Counter from '../counter'

const comp = ({ props, dispatch }) => {
  const actions = makeActions(props.txt_add, dispatch)
  return h('div', {}, [
    actions,
    h('ul', {class: 'items'}, mapItems(dispatch, props.txt_remove, props.items)),
    actions
  ])
}

const makeActions = (text, disp) => (
  h('div', {class: 'actions'}, [
    button(text, addItem(disp))
  ])
)

const mapItems = (disp, text, children) => (
  children.map((item, i) => (
    h('li', {class: 'item'}, [
      button(text, removeItem(disp, i)),
      overrideItem(item, i)
    ])
  )).toArray()
)

const overrideItem = (item, i) => (
  override('dispatch', listDispatch(i), item)
)

const addItem = actionCreator(A.addItem)
const removeItem = actionCreator(A.removeItem)

export default function List(txt_add, txt_remove, items) {
  // We can't pass items as the children parameter because it will translated
  // into an array
  return h(comp, {txt_add, txt_remove, items})
}
