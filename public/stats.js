fetch("/api/workouts/range").then(response =>{
  return response.json();
}).then(data => {
  populateChart(data);
});

API.getWorkoutsInRange()
function generatePalette(){
  const arr = [
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600",
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600"

  ]
  return arr;
}
//Populates the chart
function populateChart(data){
  let durations = duration(data);
  let pounds = calculateTotalWeight(data);
  let workouts = workoutNames(data);
  const colors = generatePalette();

  let line = document.querySelector("#canvas").getContext("2d");
  let bar = document.querySelector("#canvas2").getContext("2d");
  let pie = document.querySelector("#canvas3").getContext("2d");
  let pie2 = document.querySelector("#canvas4").getContext("2d");

  //Creates the line chart display
  let lineChart = new Chart (line, {
    type: "line",
    data: {
      labels : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      datasets:[
        {
          label: "Duration of Workout",
          backgroundColor: "wheat",
          borderColor: "navy",
          data: durations,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title:{
        display: true
      },
      scales: {
        xAxes: [
          { 
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    }
  });
  //Creates the bar chart for display
  let barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      datasets: [
        {
          label: "Pounds",
          data: pounds,
          backgroundColor: [
            "rgba(233, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(233, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 233, 0.2)",
            "rgba(233, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(233, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(233, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 233, 1)",
            "rgba(233, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Pounds Lifted"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
  //Creates a pie chart to display
  let pieChart =  new Chart(pie, {
   type: "pie",
   data: {
     labels: workouts,
     datasets: [
       {
         label: "Exercises Performed",
         backgroundColor: colors,
         data: durations
       }
     ]
   },
   options: {
     title:{
       display: true,
       text: "Exercises Performed"
     }
   }  
  });
  //Creates a donut chart to display
  let donutChart = new Chart (pie2, {
    type: "doughnut",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Exercises Performed",
          backgroundColor: colors,
          data: pounds
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Exercises Performed"
      }
    }
  });
  //This function gets the duration of all workouts
  function duration(data){
    let durations = [];
    console.log(durations);
    data.map(workouts => {
      workouts.exercises.map(exercises => {
        durations.push(exercises.duration);
      
      });
    });
    return durations;
  }
  //Function calculates total weight lifted
  function calculateTotalWeight(data){
    let total = [];
    data.forEach(workouts =>{
workouts.exercises.forEach(exercises => {
  total.push(exercises.weight);
});
    });
return total;
  }
  //Function returns the names of the workouts completed
  function workoutNames(data){
    let workouts = [];
    data.forEach(workouts => {
      workouts.exercises.forEach(exercises => {
        workouts.push(exercises.name);
      });
    });
    return workouts
  }
}