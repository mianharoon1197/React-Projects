import { useState } from "react";
function Navbar({ counter,persons, addTask, resetPersons,resetTasks, currentTime }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="navbar bg-gray-200 flex gap-4 px-6 py-4 items-center">
        <h1 className="">Navbar</h1>
        <div className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500">
          {counter}
        </div>
        <div className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500">
          {persons}
        </div>
        
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            //for ading tsks by entering
            if (e.key === "Enter") {
              addTask(inputValue);
              setInputValue("");
            }
          }}
          placeholder="Task Name"
          className="border border-gray-400 rounded-sm p-2"
        />
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          onClick={() => {
            addTask(inputValue);
            setInputValue("");
          }}
        >
          Add Task
        </button>

        <button
          className="bg-red-500 text-white  rounded-md px-4 py-1 hover:bg-red-600"
          onClick={resetPersons}
        >
          Reset Number of Persons
        </button>

        <button
          className="bg-red-500 text-white  rounded-md px-4 py-1 hover:bg-red-600"
          onClick={resetTasks}
        >
          Reset Tasks
        </button>

        <div className="bg-red-500 text-white rounded-md  px-4 py-1  hover:bg-red-600">
          {currentTime.toString()}
        </div>
      </div>
    </>
  );
}

export default Navbar;
