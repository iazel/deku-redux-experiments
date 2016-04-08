import { action } from '../actionTypes'

export const ITEM_ACTION = 'LIST_ITEM_ACTION'
export function itemAction(index, item_action) {
  let a = action(ITEM_ACTION, {index, item_action})
  a.meta = item_action.meta
  return a
}

export const ADD = 'LIST_ADD'
export function addItem() {
  return action(ADD)
}

export const REMOVE = 'LIST_REMOVE'
export function removeItem(index) {
  return action(REMOVE, index)
}

export const SET = 'LIST_SET'
export function setItem(index, value) {
  return action(SET_ITEM, {index, value})
}
