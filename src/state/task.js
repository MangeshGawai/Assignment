
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
      return state.filter((item, index) => action.payload !== index)
    case COMPLETE_TASK:
      return state.map((item, index) => (
        action.payload === index ? { ...item, status: statusTypes.completed } : item
      ))
    default:
      return state
  }
}

export const addTask = taskName => ({
  type: ADD_TASK,
  payload: {
    taskName,
    status: statusTypes.active
  }
})
export const deleteTask = index => ({
  type: DELETE_TASK,
  payload: index
})

export const completeTask = index => ({
  type: COMPLETE_TASK,
  payload: index
})

export default reducer