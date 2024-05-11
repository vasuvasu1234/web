function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input !== '') {
      var taskList = document.getElementById("taskList");
      var li = document.createElement("li");
      li.textContent = input;
      taskList.appendChild(li);
      document.getElementById("taskInput").value = '';
      var deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function() {
        taskList.removeChild(li);
      };
      li.appendChild(deleteBtn);
    }
  }