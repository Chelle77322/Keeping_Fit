init();

async function init() {
  if (location.search.split("=")[1] == undefined) {
    const workouts = await API.getLastWorkout(); 
if (workouts) {
      location.search = "?id=" + workouts._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

