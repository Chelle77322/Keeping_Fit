const callAPI = {
  async getLastWorkout() {
    let result;
    try {
      result = await fetch("/api/workout");
    } catch (error) {
      console.log(error);
      console.log(getLastWorkout);
    }
    const json = await result.json();

    return json[json.length - 1];
  },
  async addExercise(exercise) {
    const id = location.search.split("=")[1];
    const result = await fetch('/api/workouts/' + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercise)
    });

    const json = await result.json();

    return json;
  },
  async createWorkout(exercise = {}) {
    const result = await fetch('/api/workouts', {
      method: "POST",
      body: JSON.stringify(exercise),
      headers: { "Content-Type": "application/json" }
    });

    const json = await result.json();

    return json;
  },

  async getWorkoutsInRange() {
    const result = await fetch('/api/workouts/range');
    const json = await result.json();

    return json;
  },
};
