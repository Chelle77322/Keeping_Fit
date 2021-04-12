const callAPI = {
  async getLastWorkout() {
    let result;
    try {
      result = await fetch("/api/workouts");
    } catch (error) {
      console.log(error);
      console.log(getLastWorkout);
    }
    const json = await result.json();

    return json[json.length - 1];
  },
  async addExercise(workouts) {
    const id = location.search.split("=")[1];
console.log(id);
    const result = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workouts)
    });

    const json = await result.json();

    return json;
  },
  async createWorkout(workouts = {}) {
    const result = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workouts),
      headers: { "Content-Type": "application/json" }
    });

    const json = await result.json();

    return json;
  },

  async getWorkoutsInRange() {
    const result = await fetch("/api/workouts/range");
    const json = await result.json();

    return json;
  },
};
