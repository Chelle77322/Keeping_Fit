async function initWorkout() {
  const prevWorkout = await callAPI.getprevWorkout();

  if (prevWorkout) {
    document
      .querySelector("a[href='/exercise']")
      .setAttribute("href", `/exercise?id=${prevWorkout._id}`);
     

    const summaryWorkouts = {
      date: formatDate(prevWorkout.day),
      totalDuration: prevWorkout.totalDuration,
      numExercises: prevWorkout.exercise.length,
      ...tallyExercises(prevWorkout.exercise)
    };
  
    renderWorkoutSummary(summaryWorkouts);
  } else {
    renderNoWorkoutText();
  }
}

function tallyExercises(exercise) {
  const tallied = exercise.reduce((access, current) => {
    if (curr.type === "resistance") {
      access.totalWeight = (access.totalWeight || 0) + current.weight;
      access.totalSets = (access.totalSets || 0) + current.sets;
      access.totalReps = (access.totalReps || 0) + current.reps;
    } else if (curr.type === "cardio") {
      access.totalDistance = (access.totalDistance || 0) + current.distance;
    }
    return access;
  }, {});
  return tallied;
}

function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return new Date(date).toLocaleDateString(options);
}

function renderWorkoutSummary(summary) {
  const container = document.querySelector(".workout-stats");

  const workoutKeyMap = {
    date: "Date",
    totalDuration: "Total Workout Duration",
    numExercises: "Exercises Performed",
    totalWeight: "Total Weight Lifted",
    totalSets: "Total Sets Performed",
    totalReps: "Total Reps Performed",
    totalDistance: "Total Distance Covered"
  };

  Object.keys(summary).forEach(key => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = workoutKeyMap[key];
    const textNode = document.createTextNode(`: ${summaryWorkouts[key]}`);
console.log(textNode);
    p.appendChild(strong);
    p.appendChild(textNode);

    container.appendChild(p);
  });
}

function renderNoWorkoutText() {
  const container = document.querySelector(".workout-stats");
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "You have not created a workout yet!"

  p.appendChild(strong);
  container.appendChild(p);
}

initWorkout();
