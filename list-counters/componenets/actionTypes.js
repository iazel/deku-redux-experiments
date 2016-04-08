export const action = (type, payload = null, meta = {}) => (
  { type, payload, meta }
)

export const task = (type, payload) => {
  return action(type, payload, {task: true})
}
