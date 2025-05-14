"use client";

import { useState } from "react";

const tasks = [
  { title: "Read a book 📚", time: "7:00-8:00" },
  { title: "Wireframing new product ⬜️", time: "8:00-9:00" },
  { title: "Moodboard landing page # Mobal project", time: "9:00-11:00" },
  { title: "Weekly meeting # Futur project", time: "11:00-13:00" },
  { title: "Design PPT for sharing session #2", time: "13:00-14:00" },
  { title: "Ngopi with Bojo", time: "14:00-16:00" },
  { title: "Watch Netflix - Vinland Saga", time: "8:00-9:00" },
];

export default function Page() {
  const [isOpen, setIsOpen] = useState(true)

  const [count, setCount] = useState(0)

  const [isExceed, setIsExceed] = useState(false) 

  // perform the search function. state of the input text is empty string
  const [inputText, setInputText] = useState('')

  const [visibleTasks, setVisibleTasks] = useState(tasks)

  const [match, setMatch] = useState(true)

  function handleSearch() {
    const keyWord = inputText.toLowerCase()
    const matched = tasks.filter(task => task.title.toLowerCase().includes(keyWord))
    if (matched.length === 0) {
      setMatch(false)
    } else {
      setMatch(true)
    }
    setVisibleTasks(matched)
    setCountTasks(matched.length)
  }

  function sortTodo() {
    const sortedTasks = [...visibleTasks].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
      setVisibleTasks(sortedTasks)
  }

  const [countTasks, setCountTasks] = useState(visibleTasks.length)


  return (
    <div className="bg-gray-100 min-h-screen flex">
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
            placeholder="Please add a to-do task"
            className="border border-gray-500 rounded-lg px-2 py-1"
            onChange={(e) => {
              const wordCount = e.target.value.length
              setInputText(e.target.value) // update the const inputText
              
              if ( wordCount > 20) {
                setCount(20) 
                setIsExceed(true)
              }
              else {setCount(wordCount)
                    setIsExceed(false)}
            }}
          />
          <button
            className="border px-2 py-1 bg-slate-900 text-white rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
          <p className="text-slate-600 text-sm">
            Max {count}/20 characters. <span className={"text-red-500  " + (isExceed ? '' : "hidden")}>You have exceeded the word limit!</span>
          </p>
        </form>
        <div>
          <ul id="list">
            {match ? (
              <>
                {visibleTasks.map((task) => (
                <TaskItem key={task.title} title={task.title} time={task.time} />
                ))}
                <li>{countTasks} to-do tasks left!</li>              
              </>

            ) : (
              <li className="px-2 py-2">No item found...</li>
            )
            }
          </ul>

        </div>
      </main>
    </div>
  );
}

interface TaskProps {
  title: string;
  time: string;
}

function TaskItem(props: TaskProps) {
  return (
    <li className="bg-white my-2 p-2 flex justify-between">
      <div>
        <span className="size-4 inline-block bg-red-500 rounded mx-1"></span>
        {props.title}
      </div>
      <div>
        <span className="bg-gray-200 p-0.5">{props.time}</span>
        <span className="bg-gray-200 p-0.5">︙</span>
      </div>
    </li>
  );
}


