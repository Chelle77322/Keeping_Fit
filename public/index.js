init();

async function init(){
  if (location.search.split("=")[1] === undefined) {
    const summaryWorkouts = await callAPI.getprevWorkout();
    console.log(summaryWorkouts);
if (summaryWorkouts) {
      location.search = "?id=" + summaryWorkouts._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

