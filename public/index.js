init();

async function init(){
  if (location.search.split("=")[1] === undefined) {
    const workout = await callAPI.getprevWorkout();
  
if (workout) {
      location.search = "?id=" + workout_id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

