import Counter from '../counter'
import * as C from '../counter/reducers'
import { createStateReducer, createTaskReducer } from '../list/reducers'

export const stateReducer = createStateReducer(C.stateReducer, () => 0)
export const taskReducer = createTaskReducer(C.taskReducer)
