document.querySelector("#Add").onclick = function () {
  if (document.querySelector("#task").value.length == 0) {
    alert("Task cannot be empty !! ");
  } else {
    document.querySelector("#newtask").innerHTML += `<div class="tasks">
    <span class="tasklist">${document.querySelector("#task").value}</span>
    <button class="delete"></button>
    </div>`;
  }

  let currentTask = document.querySelectorAll(".delete");
  for (let i = 0; i < currentTask.length; i++) {
    currentTask[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};

//main part

// keep on adding new task as a div.
// also add a button to remove the task
