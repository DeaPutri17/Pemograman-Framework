import React, { useState } from "react";

// Komponen untuk menampilkan satu tugas dengan tombol hapus
function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task}
      <button onClick={onDelete} style={{ marginLeft: "10px", color: "red" }}>
        Hapus
      </button>
    </li>
  );
}

// Komponen utama TodoList dengan fitur tambah & hapus tugas
function TodoList() {
  const [tasks, setTasks] = useState([]); // State untuk daftar tugas
  const [newTask, setNewTask] = useState(""); // State untuk input tugas baru

  // Mengupdate state saat input berubah
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Menambahkan tugas baru ke dalam daftar
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Tambahkan tugas baru ke dalam array
      setNewTask(""); // Reset input setelah ditambahkan
    }
  };

  // Menghapus tugas berdasarkan index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Filter daftar tanpa task yang dihapus
  };

  return (
    <div>
      <h2>Daftar Tugas</h2>
      <input
        type="text"
        placeholder="Tambahkan tugas..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Tambah</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
