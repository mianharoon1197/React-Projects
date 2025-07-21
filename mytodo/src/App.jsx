import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import TodoList from "./components/TodoList.jsx";
function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [tasks, setTasks] = useState(() => {
    const savedTodos = localStorage.getItem("TodoTasks");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  //const totalPersons = tasks.reduce((sum, task) => sum + task.value, 0);

  useEffect(() => {
    localStorage.setItem("TodoTasks", JSON.stringify(tasks));
  }, [tasks]); 
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); 

    return () => clearInterval(timer);
  }, []);

  //adding task
  const addTask = (text) => {
    if (text.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, { id: Date.now(), text, value: 0 }]);
    //alert("Task added successfully");
  };

  const resetTasks = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      value: 0,
    }));
    setTasks(updatedTasks);
  };

  const increment = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, value: task.value + 1 } : task
      )
    );
  };
  const decrement = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id  
          ? { ...task, value: task.value - 1 }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };
  return (
    <>
      <Navbar
        counter={tasks.length}
        ///counter={totalPersons}
        addTask={addTask}
        resetTasks={resetTasks}
        currentTime={dateTime}
      />

      <TodoList
        tasks={tasks}
        increment={increment}
        decrement={decrement}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </>
  );
}

export default App;
