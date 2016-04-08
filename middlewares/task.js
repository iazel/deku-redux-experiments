export default (reduce) => ({ dispatch, getState }) => (next) => (action) => (
  (action.meta.task) ? reduce(dispatch, action, getState()) : next(action)
)
