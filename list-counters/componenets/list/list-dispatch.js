import { itemAction } from './actions'

export default (i) => (dispatch) => (action) => {
  dispatch( itemAction(i, action) )
}
