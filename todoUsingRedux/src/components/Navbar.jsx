import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,resetPersons,resetTasks } from "../redux/todoSlice";

function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const {counter,persons}=useSelector((state)=>state.todo)
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const dispatch = useDispatch();

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);
  return () => clearInterval(interval);
}, []);

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
              dispatch(addTodo(inputValue));
              setInputValue("");
            }
          }}
          placeholder="Task Name"
          className="border border-gray-400 rounded-sm p-2"
        />
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          onClick={() => {
            dispatch(addTodo(inputValue));
            setInputValue("");
          }}
        >
          Add Task
        </button>

        <button
          className="bg-red-500 text-white  rounded-md px-4 py-1 hover:bg-red-600"
          onClick={()=>dispatch(resetPersons())}
        >
          Reset Number of Persons
        </button>

        <button
          className="bg-red-500 text-white  rounded-md px-4 py-1 hover:bg-red-600"
          onClick={()=>dispatch(resetTasks())}
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
