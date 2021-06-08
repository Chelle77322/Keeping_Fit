const express = require("express");
const mongoose = require("mongoose");
const Workouts = require("../models/workouts");
app = express();
var d = new Date();



module.exports = function (app) {
    //get all workouts
    app.get("/api/workouts", (request, result) => {
        Workouts.find().sort({date: 1}).then(data => {
            result.json(data);
        }).catch(error => { 
            result.json(error);
        });
    });
    app.get("/api/workouts/range", async(request, result) => {
        Workouts.find().then((data) =>
        {
            result.json(data);
        })
        .catch((error)=> {
            result.json(error);
        });
    });
    
    app.put("/api/workouts/:id", async (request, result) => {
        console.log("PUT ID", request.params.id);
        //NEED TO INCLUDE ALL OF EXERCISE 
        try{
       var addExercise =  await Workouts.findByIdAndUpdate({_id: request.params.id}, {$set: {day: d.getDay(), date: Date.now()}, $push: {exercises: request.body}}, {new: true});
            addExercise.getTotalDuration();
            console.log("update", addExercise);
        var addTotalDur = await Workouts.findByIdAndUpdate({_id: request.params.id}, {$set: {totalDuration: addExercise.totalDuration}}, {new: true})
            console.log(addTotalDur, "update after");
            result.json(addTotalDur);
        }
        catch(error){
            console.log(error)
        }
       
    });
    //Create new workout
    app.post("/api/workouts", (request, result) => {
        Workouts.create({date: Date.now(), day: d.getDay()}).then(data => {
            result.json(data);
        }).catch(error => { 
            console.log(error);
        });
    });

       //get all workouts
       app.get(".api/workouts", async (request, result) => {
        var sunday = new Date(new Date().setDate(new Date().getDate() - d.getDay())).setHours(00, 00, 00);
        console.log("sunday", sunday);
        try{
            const data = await Workouts.find({date: {$gte: sunday}}).sort({date: 1});
                console.log(data);
                result.json(data);
            }
        catch(error){
                throw error; 
            }
        })
    
}

// {$gte: sunday}