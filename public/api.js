const callAPI = {
  async getPrevWorkout() {
    let result;
    try {
      result = await fetch("/api/workouts");
    } catch (error) {
    
    }
    const json = await result.json();

    return json[json.length - 1];
  },
  //ISSUE HERE
  async addExercise(data) {
    const id = location.search.split("=")[1];
    const result = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await result.json();
    return json;
  },
  async createWorkout(data = {}) {
    const result = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await result.json();

    return json;
  },

  async getWorkoutsInRange() {
    const result = await fetch(`/api/workouts/range`);
    const json = await result.json();

    return json;
  },
};
