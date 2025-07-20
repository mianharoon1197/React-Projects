import TodoItems from './TodoItems.jsx'
function TodoList({tasks, increment, decrement, deleteTask, editTask}) {
    return (
      <>
      {tasks.map((task)=>
        <TodoItems
          key={task.id}
          tasks={task}
          increment={increment}
          decrement={decrement}
          deleteTask={deleteTask}
          editTask={editTask}
          />
      )}
      </>
    )
}

export default TodoList
