import { createStore, applyMiddleware } from 'redux'
import taskMiddleware from '../middlewares/task'
import createApp from '../deku-override/app'
// ~ import { createApp } from 'deku'
import ListCounter from './componenets/list-counter'
import { stateReducer, taskReducer } from './componenets/list-counter/reducers'

const elem = document.getElementById('mount')
const store = createStore(stateReducer, undefined, applyMiddleware(
  taskMiddleware(taskReducer)
))
const render = createApp(elem, store.dispatch)
const app = () => {
  render( ListCounter(store.getState()) )
}
store.subscribe(app)
app()
