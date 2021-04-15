async function initWorkout() {
  const lastWorkout = await callAPI.getLastWorkout();
  console.log(lastWorkout);
  if (lastWorkout) {
    document
      .querySelector("a[href='/exercise']")
      .setAttribute("href", `/exercise?id=${lastWorkout._id}`);
      console.log(lastWorkout);

    const summaryWorkouts = {
      date: formatDate(lastWorkout.day),
      totalDuration: lastWorkout.totalDuration,
      numExercises: lastWorkout.exercise.length,
      ...tallyExercises(lastWorkout.exercise)
    };
console.log(summaryWorkouts)
    renderWorkoutSummary(summaryWorkouts);
  } else {
    renderNoWorkoutText("No workouts found");
  }
}

function tallyExercises(exercise) {
  const tallied = exercise.reduce((acc, curr) => {
    if (curr.type === "resistance") {
      acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
      acc.totalSets = (acc.totalSets || 0) + curr.sets;
      acc.totalReps = (acc.totalReps || 0) + curr.reps;
    } else if (curr.type === "cardio") {
      acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
    }
    return acc;
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

function renderWorkoutSummary(summaryWorkouts) {
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

  Object.keys(summaryWorkouts).forEach(key => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = workoutKeyMap[key];
    const textNode = document.createTextNode(`: ${summaryWorkouts[key]}`);

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
