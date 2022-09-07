import React, { useState } from 'react'
import { addTask } from '../reduxToolkit/TaskSlice'
import {useSelector, useDispatch} from 'react-redux'
import '../style/AddTask.css'

const AddTask = () => {
    const [text, setText] = useState("")

    const task=useSelector(state=>state.task)

    const dispatch=useDispatch()
  return (
    <div className='add'>
      <h1>Add Task</h1>
        <input type='text' onChange={(e)=>setText(e.target.value)} className='text'/>
        <button className='bt1' onClick={()=>dispatch(addTask({description:text,isDone:false,id:Math.random()}))}>Add</button>
        <div>
        </div>
    </div>
  )
}

export default AddTask