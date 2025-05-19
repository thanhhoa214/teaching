'use client'

import { useContext } from "react"
import { TaskItem } from "./TaskItem"
import { AppInfoContext } from "../context/UserContext"

export interface TodoItem {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

interface TaskListProps {
  tasks: TodoItem[]
}


export function TaskList(props: TaskListProps) {
  const appInfoData = useContext(AppInfoContext)
  const hasTasks = props.tasks.length !== 0
  const countTasks = props.tasks.length
  
  return <ul>
    User name: {appInfoData?.userInfo.name}
    {hasTasks ? (
      <>
        {props.tasks.map((task) => (
          <TaskItem key={task.title} title={task.title} time={'09:00'} />
        ))}
        <li>{countTasks} to-do tasks left!</li>
      </>

    ) : (
      <li className="px-2 py-2">No item found...</li>
    )
    }
  </ul>

}