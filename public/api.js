vaar workouts = [];

  // Fetching the last workout
fetch("/api/workouts").then(response => {
  return response.json();
}).then(data =>{
  workouts = data;
});

const API = {

  // Add workout to existing exercise
  async addExercise(dbworkouts) {
    const id = location.search.split("=")[1];

    const result = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dbworkouts)
    });

    const json = await result.json();
    return json;
  },

  // Create new workout
  async createWorkout(dbworkouts = {}) {
    const result = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(dbworkouts),
      headers: { "Content-Type": "application/json" }
    });

    const json = await result.json();

    return json;
  },

  // Get workouts range
  async getWorkoutsInRange() {
    const result = await fetch(`/api/workouts/range`);
    const json = await result.json();

    return json;
  },
};