console.log("It works!");
//array with inital values
var tasks=[
];

//assigns variables for future use, console logs tasks array for validation
for(var i =0; i<tasks.length; i++){
    console.log(tasks[i])
   var currentTask = tasks[i].taskToDo;
   var name = tasks[i].name;
   var difficulty = tasks[i].difficulty;
}

let sarahCount = 0;
let nathanCount = 0;
let aliceCount = 0;
let bishopCount = 0;

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


  drawTheChart();
}
//xxx populate the counts
function calcTotals(){
  // reset the totals
  sarahCount = 0;
  nathanCount = 0;
  aliceCount = 0;
  bishopCount = 0;

  // recount everything
  for (let task of tasks) {
    if (task.name == "Sarah") {
          sarahCount++;
        } else if (task.name == "Nathan") {
          nathanCount++;
        } else if (task.name == "Alice") {
          aliceCount++;
        }  else if (task.name == "Bishop") {
          bishopCount++;
        }
  }
}

function drawTheChart(){
  calcTotals();

  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);

  function drawBasic() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Assigned Creature', { role: 'style' });
        data.addColumn('number', 'Number of Tasks', { role: 'style' });

        // xxx
        data.addRows([
          ['Sarah', sarahCount],
          ['Nathan', nathanCount],
          ['Alice', aliceCount],
          ['Bishop', bishopCount]
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
      }

}

  // function assign(){
  //   for (var name of tasks) {
  //     if (tasks.name == "Sarah") {
  //       sarahCount++;
  //     } else if (tasks.name == "Nathan") {
  //       nathanCount++;
  //     } else if (tasks.name == "Alice") {
  //       aliceCount++;
  //     } else if (tasks.name == "Bishop") {
  //       bishopCount++;
  //     }
  //
  //   console.log(taskCounter)
  //
  //   drawBasic();
  //   }
  // }

//////////////
/////////////

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

var taskCounter = {
  sarah: sarahCount,
  nathan: nathanCount,
  alice: aliceCount,
  bishop: bishopCount
};

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
    }

    window.onload = function(){
      var form = document.querySelector("form");
      form.onsubmit = taskListBuilder;
    }
