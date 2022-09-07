import React from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

const TaskList = () => {
const task=useSelector(state=>state.task.todolist)

  return (
    <div>
        {task.map((el,i)=>
          <div key={i}>
            <Task task={el}/>
          </div>
        )}
    </div>
  )
}

export default TaskList


