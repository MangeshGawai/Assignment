
const ADD_TASK = 'ADD'
const DELETE_TASK = 'DELETE'
const COMPLETE_TASK = 'COMPLETE'
export const statusTypes = {
  active: 'ACTIVE',
  completed: 'COMPLETED'
}

export const taskStateSelector = (state) => state.task

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]
    case DELETE_TASK:
      return state.filter(({ id }) => action.id !== id)
    case COMPLETE_TASK:
      return state.map((item) => (
        action.id === item.id ? { ...item, status: statusTypes.completed } : item
      ))
    default:
      return state
  }
}

export const addTask = taskName => ({
  type: ADD_TASK,
  payload: {
    taskName,
    status: statusTypes.active,
    id: (new Date()).getTime()
  }
})
export const deleteTask = id => ({
  type: DELETE_TASK,
  id
})

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
})

export default reducer