// On form submission, add the task to a Javascript array called tasks,
// then draw or update a chart visualizing task information.
// It's up to you what the chart should look


console.log("It works!");
//array with inital values
var tasks=[
  {task: "do the dishes",
   name: "Sarah",
   difficulty: "the easiest"}
];
//pulls task, assignment, and diff. from form and adds to array as object values
function taskListBuilder(){
  console.log("building a tasklist!")
  event.preventDefault();
  var form = document.querySelector("form");
  // Create a new task with form values
  var newTask = {taskToDo: form.task.value,
                 name: form.assignment.value,
                 difficulty: document.getElementById("difficulty").value}
  // Insert new task item into tasks array
  tasks.push(newTask);
}
//assigns variables for future use, console logs tasks array for validation
for(var i =0; i<tasks.length; i++){
    console.log(tasks[i])
   var currentTask = tasks[i].taskToDo;
   var name = tasks[i].name;
   var difficulty = tasks[i].difficulty;
}

window.onload = function(){
  // Select the form, attach taskListBuilder as onSubmit handler
  var form = document.querySelector("form");
  form.onsubmit = taskListBuilder;
}
//////////////
/////////////

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

var taskCounter = {
  sarah: 1,
  nathan: 2,
  alice: 1,
  bishop: 1
}

window.onload = function(){
  document.getElementById("Sarah").onclick = assign;
  document.getElementById("Nathan").onclick = assign;
  document.getElementById("Alice").onclick = assign;
  document.getElementById("Bishop").onclick = assign;
}

function assign(){
  console.log(this.id)
  taskCounter[this.id] = taskCounter[this.id] + 1;
  drawBasic();
}


function drawBasic() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Assigned Creature');
      data.addColumn('number', 'Number of Tasks');

      data.addRows([
        ['Sarah', taskCounter.sarah],
        ['Nathan', taskCounter.nathan],
        ['Alice', taskCounter.alice],
        ['Bishop', taskCounter.bishop]
      ]);

      var options = {
        title: 'Task Assignments by Creature',
        hAxis: {
          title: 'Assigned Creature',
        },
        vAxis: {
          title: 'Number of Tasks'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    };
