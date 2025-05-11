"use client";

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
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <aside id="aside" className="w-1/3 bg-white py-5 px-6">
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
        <button
          id="sidebarToggler"
          className="absolute top-10 -left-4 shadow rounded-full size-8 bg-white"
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
              <button id="sortButton">⬇</button>
              <p>Sort</p>
            </div>
            <button className="bg-white p-1">🟰</button>
          </div>
        </header>
        <form>
          <input
            id="textSearch"
            type="text"
            placeholder="Please add a to-do task"
            className="border border-gray-500 rounded-lg px-2 py-1"
          />
          <button
            id="search"
            className="border px-2 py-1 bg-slate-900 text-white rounded-lg"
          >
            Search
          </button>
          <p className="text-slate-600 text-sm">
            Max <span id="wordCount"></span>/20 characters.
          </p>
        </form>
        <div>
          <ul id="list">
            {tasks.map((task) => (
              <TaskItem key={task.title} title={task.title} time={task.time} />
            ))}
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
