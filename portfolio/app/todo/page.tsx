"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TaskList, TodoItem } from "./TaskList";
import { AppInfoContext } from "../context/UserContext";


export default function Page() {
  const [isOpen, setIsOpen] = useState(true)

  // perform the search function. state of the input text is empty string
  const [inputText, setInputText] = useState('')
  // const previousSearchRef = useRef<string[]>([])

  const count = inputText.length
  const isExceed = count > 20

  const [visibleTasks, setVisibleTasks] = useState<TodoItem[]>([])

  const todosRef = useRef<TodoItem[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
      return response.json()
    }).then((todos: TodoItem[]) => {
      todosRef.current = todos
      setVisibleTasks(todos)
    })
  }, [])

  useEffect(() => {
    if (isExceed) {
      console.log("runs")
      setTimeout(() => setInputText(''), 2000)
    }
  }, [isExceed])


  function handleSearch() {
    const keyWord = inputText.toLowerCase()
    // previousSearchRef.current = [...previousSearchRef.current, keyWord]
    const matched = todosRef.current.filter(task => task.title.toLowerCase().includes(keyWord))
    setVisibleTasks(matched)
  }

  function sortTodo() {
    const sortedTasks = [...visibleTasks].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setVisibleTasks(sortedTasks)
  }



  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Link href={'/'}>Home</Link>
      <AppInfoContext.Provider value={{
        userInfo: { name: 'rin', age: 26 }
      }}>
        <aside className={"w-1/3 bg-white py-5 px-6 " + (isOpen ? '' : 'hidden')}>
          <h1 className="text-xl font-bold">Private</h1>
          <div>
            <ul className="m-2">
              <li className="pb-1">
                <span className="size-4 inline-block bg-red-500 rounded pb-1"></span>
                Completed
              </li>
              <li className="pb-1">Personal</li>
              <li className="pb-1">Work</li>
              <li className="pb-1">💪 Diet</li>
              <li className="pb-1">📚 List of books</li>
              <li className="pb-1">🚗 Road trip list</li>
            </ul>
            <div className="flex gap-2 bg-gray-100 rounded-full py-2 px-3">
              <span>➕</span>
              <h3>Create new list</h3>
              <span className="inline-flex justify-center items-center border border-gray-500 size-6 rounded-full ml-auto">
                ⚙️
              </span>
            </div>
          </div>

          <h2 className="text-xl font-bold py-3">Group</h2>
          <div className="flex gap-4">
            <div>
              <div className="size-20 bg-blue-100">😀</div>
              <h3>Mobile Project</h3>
            </div>
            <div>
              <div className="size-20 bg-blue-100">😀</div>
              <h3>Future Project</h3>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-100 rounded-full py-2 px-3">
            <span>➕</span>
            <h3>Create new group</h3>
            <span className="inline-flex justify-center items-center border border-gray-500 size-6 rounded-full ml-auto">
              ⚙️
            </span>
          </div>
        </aside>
        <main className="w-2/3 py-3 px-6 relative">
          <button onClick={() => setIsOpen(!isOpen)}
            className={"absolute top-10 shadow rounded-full size-8 bg-white " + (isOpen ? "-left-4" : "-left-1")}
          >
            →
          </button>
          <header className="flex justify-between items-center my-2 mb-6">
            <div>
              <h1 className="text-xl font-bold">Good Morning, Sullivan! 👋</h1>
              <p>Today, Wed 6 July 2023</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-2 w-28 bg-white py-1.5 px-3 rounded-xl">
                <button onClick={sortTodo}>⬇</button>
                <p>Sort</p>
              </div>
              <button className="bg-white p-1">🟰</button>
            </div>
          </header>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
          }}>
            <input
              type="text"
              value={inputText}
              placeholder="Please add a to-do task"
              className="border border-gray-500 rounded-lg px-2 py-1"
              onChange={(e) => {
                setInputText(e.target.value) // update the const inputText
              }}
            />
            <button
              className="border px-2 py-1 bg-slate-900 text-white rounded-lg"
            >
              Search
            </button>
            <p className="text-slate-600 text-sm">
              Max {count}/20 characters. <span className={"text-red-500  " + (isExceed ? '' : "hidden")}>You have exceeded the word limit!</span>
            </p>
          </form>
          <div>
            <TaskList tasks={visibleTasks} />
          </div>
        </main>

      </AppInfoContext.Provider>
    </div>
  );
}
