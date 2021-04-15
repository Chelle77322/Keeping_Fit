init();

async function init(){
  if (location.search.split("=")[1] === undefined) {
    const workouts = await callAPI.getprevWorkout();
  
if (workouts) {
      location.search = "?id=" + workouts_id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

