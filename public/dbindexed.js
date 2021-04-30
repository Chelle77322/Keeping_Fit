let db;
//connects to the indexed db
const request = indexedDB.open('Keeping_Fit',1);

//Now create the object store to store files in
request.onupgradeneeded = function(event){
    const db = event.target.result;
    db.createObjectStore('new_workout', {
        autoIncrement: true });
        console.log(db);
};

//Store reference in global db after connection is made
request.onsuccess = function(event){
    db = request.result;
    console.log("Database opened successfully:" + db);

//Check if the app is either online or offline and upload saved to global db transactions
if(navigator.onLine){
    uploadWorkout();
}
};
request.onerror = function(event){
    console.log(event.target.errorCode);
};
//Saves the transaction to indexedDB
function saveRecord(record){
    const workout = db.workouts(['new_workout'], 'readwrite');
const workoutsObjectStore = workouts.objectStore('new_workout');
workoutsObjectStore.add(record);
}
//Uploads indexedDB data to the mongodb server when you have internet
function uploadWorkout(){
    const workouts = db.workouts(['new_workout'], 'readwrite');
    const workoutsObjectStore = workouts.objectStore('new_workout');
    const getAll = workoutObjectStore.getAll();
}
//IF successful; the results property will hold all the data
getAll.onsuccess = function() {
    if(getAll.result.length > 0 ){
        fetch("/api/workouts", {
            method: 'POST',
            body : JSON.stringify(getAll.result),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then((response)=> response.json()).then((ServerResponse)=> {
            if(ServerResponse.message){
                throw new Error(ServerResponse);
            }
            const workouts = db.workouts(['new_workout'],'readwrite');
            const workoutObjectStore = workouts.objectStore('new_workout');
            workoutObjectStore.clear();
            alert('All offline workouts have been submitted to the Keeping_Fit App');
        }).catch((error)=>{
            console.log(error);
        });
    }
}
window.addEventListener('online', uploadWorkout);