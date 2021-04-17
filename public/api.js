const callAPI = {
  async getprevWorkout() {
    let result;
    try {
      result = await fetch("/workouts");
    } catch (error) {
     console.log(error);
    }
    const json = await result.json();

    return json[json.length - 1];
  },
  //ISSUE HERE
  async addExercise(exercise) {
    const id = location.search.split("=")[1];
    const result = await fetch('/workouts' + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercise)
    });

    const json = await result.json();
    return json;
  },
  async createWorkout(exercise = {}) {
    const result = await fetch('/workouts', {
      method: "POST",
      body: JSON.stringify(exercise),
      headers: { "Content-Type": "application/json" }
    });

    const json = await result.json();

    return json;
  },

  async getWorkoutsInRange() {
    const result = await fetch('/workouts/range');
    const json = await result.json();

    return json;
  },
};
