import { h } from 'deku'
import { List as ImmList } from 'immutable'
import List from '../list'
import Counter from '../counter'

export default function ListCounter(items) {
  if(items === undefined)
    items = new ImmList()

  return List('Add Counter', 'Remove', items.map(Counter))
}
