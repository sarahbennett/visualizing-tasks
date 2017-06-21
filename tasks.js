//On form submission, add the task to a Javascript array called tasks,
//then update the ordered list in index.html with the task information
//as a series of list items. -->
console.log("It works!");

var taskList = {
  tasks: [
    "Decide your task",
    "Assign your task"
  ]
}

function drawList() {
  // Select #list-container element from HTML (add it to HTML first!)
  var parent = document.getElementById("list-container")
  // Clear out existing contents
  parent.innerHTML = ""
  // Create a <ul> node
  var ul = document.createElement("ul")
  for(var i =0; i<taskList.tasks.length; i++){
    console.log(taskList.tasks[i])
    // Create an <li> node
    var li = document.createElement("li")
    // Add the roof string to the li
    li.innerHTML = taskList.tasks[i]
    // Append li to ul
    ul.appendChild(li)
  }
  // Append the ul to the #list-container
  parent.appendChild(ul)
}



function taskListBuilder(){
  console.log("building a tasklist!")
  event.preventDefault();
  var form = document.querySelector("form");
  // Create a new task with form values
  var newTask = form.assignment.value + " needs to " + form.task.value + ", which should be " + document.getElementById("difficulty").value
  // Insert new task item into tasklist.tasks
  taskList.tasks.push(newTask);
  // Trigger printing the list to page
  drawList();
}


window.onload = function(){
  // Call this function
  drawList();
  // Select the form, attach taskListBuilder as onSubmit handler
  var form = document.querySelector("form");
  form.onsubmit = taskListBuilder;
}
