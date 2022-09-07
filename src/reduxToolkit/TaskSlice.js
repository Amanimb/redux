import { createSlice } from '@reduxjs/toolkit'

const initialState={
  todolist:[],
}
export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask:(state, action) => {
        state.todolist.push(action.payload)   
    },
    removeTask:(state, action)=>{
      state.todolist=state.todolist.filter(
        (el)=>el.id!==action.payload.id
      )
    },
    doneTask:(state,action)=>{
      let i=state.todolist.findIndex((el)=>el.id===action.payload.id)
      state.todolist[i]={...state.todolist[i], isDone:!state.todolist[i].isDone}
    },
    editTask:(state,action)=>{
      let i=state.todolist.findIndex((el)=>el.id===action.payload.id)
      state.todolist[i]={...state.todolist[i],
      description:action.payload.description
      }
    }
    }
  },
)


export const {addTask, removeTask, doneTask, editTask} = TaskSlice.actions

export default TaskSlice.reducer