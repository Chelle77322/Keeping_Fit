init();

async function init(){
  if (location.search.split("=")[1] == undefined) {
    const workouts = await callAPI.getPrevWorkout();
    console.log(workouts);
  
if (workouts) {
      location.search = "?id=" + workouts._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

