import React, { useState } from 'react'
import "../style/task.css"
import "../style/AddTask.css"
import { useDispatch } from 'react-redux';
import { doneTask, removeTask, editTask } from '../reduxToolkit/TaskSlice';


const Task = ({task}) => {
  const [show, setShow] = useState(false)
  const [text, setText] = useState("")


const dispatch=useDispatch(); 
return (
    <div className={`task-item ${task.isDone?'Done':'undone'}`}>
        
        
        

        <button className='bt1' onClick={()=>setShow(!show)}>Edit</button>
        {
          show? (
            <div className='edit' >
              <input type='text'
              placeholder='description'
              onChange={(e)=> setText({...task,description:e.target.value})}/>
                      <button className='bt1' onClick={()=>{dispatch(editTask(text));
                        setShow(false)}}>Save</button>
                         <button className='bt1' onClick={()=>
                        setShow(false)}>Cancel</button>
                        


            </div>
          ):<h1>{task.description}</h1>
          
        }
        <button className='bt1' onClick={()=>dispatch(doneTask({id:task.id})) }>Done</button>
        
   
        <button className='bt1' onClick={()=>dispatch(removeTask({id:task.id}))}>X</button>
    </div>
  )
}

export default Task