//for handling todo item
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  incrementValue,
  decrementValue,
  deleteTodo,
  editTodo,
} from "../redux/todoSlice";

function TodoItems({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  return (
    <>
      <div className="flex justify-center items-center p-5 gap-2">
        <button
          className="bg-gray-400 text-white px-3 py-1 hover:bg-gray-500"
          onClick={() => dispatch(incrementValue({ id: task.id }))}
        >
          +
        </button>

        <button
          className="bg-gray-400 text-white px-3 py-1 hover:bg-gray-500"
          onClick={() => dispatch(decrementValue({ id: task.id }))}
        >
          -
        </button>

        <div
          className={`text-white py-2 px-6 rounded-md 
    ${
      task.value >= 0
        ? "bg-yellow-400 hover:bg-yellow-500"
        : "bg-blue-400 hover:bg-blue-500"
    }`}
        >
          {task.value} Person
        </div>
        <div>
          <input
            ref={inputRef}
            disabled={!isEditing}
            onChange={(e) => setEditText(e.target.value)}
            value={editText}
            className="p-2 w-32 text-center"
            type="text"
            onKeyDown={(e) => {
              //for ading tsks by entering
              if (e.key === "Enter") {
                if (isEditing) {
                  if (editText.trim() === "") return;
                  dispatch(editTodo({ id: task.id, newText: editText }));
                }
                setIsEditing(!isEditing);
              }
            }}
          ></input>
        </div>

        <div className="gap-3 flex">
          <button
            onClick={() => {
              if (isEditing) {
                if (editText.trim() === "") return;
                dispatch(editTodo(task.id, editText));
              }
              setIsEditing(!isEditing);
            }}
            disabled={isEditing && editText.trim() === ""}
            className={`bg-gray-400 text-white px-2 py-1 rounded-md ${
              isEditing && !editText.trim()
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-500"
            }`}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={() => dispatch(deleteTodo({ id: task.id }))}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItems;
