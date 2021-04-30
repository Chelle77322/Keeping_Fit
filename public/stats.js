//Grabbing all prepopulated workout data from backend via api fetch
fetch("/api/workouts/range").then(response => {
  return response.json();
}).then(data =>{
  populateChart(data);
});

API.getWorkoutsInRange()

function generatePalette() {
  const colorArray = [
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
    "ffa600",
  ];

  return colorArray;
}

function populateChart(data) {
  let durations = exercise.map(({ totalDuration }) => totalDuration);
  let pounds = calculateTotalWeight(data);
  let workouts = workoutNames(data);
  const colors = generatePalette();

  let line = document.querySelector("#canvas").getContext("2d");
  let bar = document.querySelector("#canvas2").getContext("2d");
  let pie = document.querySelector("#canvas3").getContext("2d");
  let pie2 = document.querySelector("#canvas4").getContext("2d");

  let lineChart = new Chart(line, {
    type: "line",
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
          label: "Duration of workout",
          backgroundColor: "#52a2b4",
          borderColor: "#52a2b4",
          data: durations,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title:{display: true},
      scales:{
        xAzes: [
          {
            display: true,
            scaleLabel: {
              display: tru
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
  //Creates the workout data into a barchart
  let barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: ["Sunday",
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
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Pounds Lifted",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            }
          }
        ]
      }
    }
  });
//Creates a new pie chart with the exercises performed
  let pieChart = new Chart(pie, {
    type: "pie",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Exercises Performed",
          backgroundColor: colors,
          data: durations,
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Exercises Performed",
      }
    }
  });
//Creates a donut chart with exercises performed
  let donutChart = new Chart(pie2, {
    type: "doughnut",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Exercises Performed",
          backgroundColor: colors,
          data: pounds,
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Exercises Performed",
      },
    },
  });
}
//This function returns the workout duration
function duration(data) {
  let durations = [];
  data.forEach(workouts => {
    workouts.exercises.forEach(exercise => {
      durations.push(exercise.duration);
    });
  });
  return durations;
}
//This function returns the total weight lifted
function calculateTotalWeight(data) {
  let totals = [];
  data.forEach((workouts) => {
   workouts.exercises.forEach(exercise => {
    totals.push(exercise.weight);
   });
   });
  return totals;
  }
//This function gets the names of the workouts
function workoutNames(data) {
  let workouts = [];
data.forEach(workouts => {
    workouts.exercises.forEach(exercise => {
      workouts.push(exercise.name);
    });
  });
  return workouts;
}
