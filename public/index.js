init();

async function init(){
  if (location.search.split("=")[1] === exercise) {
    const workouts = await callAPI.getprevWorkout();
  
if (workouts) {
      location.search = "?id=" + _id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

