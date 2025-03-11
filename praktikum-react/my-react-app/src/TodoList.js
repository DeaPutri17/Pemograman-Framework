import React from "react";

// Komponen untuk menampilkan satu tugas
function TodoItem({ task }) {
  return <li>{task}</li>;
}

// Komponen utama TodoList
function TodoList({ tasks }) {
  return (
    <div>
      <h2>Daftar Tugas</h2>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
