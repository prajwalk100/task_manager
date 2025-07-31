function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.backgroundColor = "#e74c3c";
  deleteBtn.style.border = "none";
  deleteBtn.style.color = "white";
  deleteBtn.style.padding = "5px 10px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.borderRadius = "4px";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
}
