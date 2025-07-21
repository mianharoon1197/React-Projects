import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

function TodoList() {
  const { todos } = useSelector((state) => state.todo);
  return (
    <>
      {todos.map((task) => (
        <TodoItems key={task.id} task={task} />
      ))}
    </>
  );
}

export default TodoList;
