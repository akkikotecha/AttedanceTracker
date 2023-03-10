//import mongoose from "mongoose";
//var mongoose = require('mongoose');
const { Schema, model} = require("mongoose");

var dotenv = require('dotenv');



let ShiftTimeSchema = new Schema({
    shift_title:{
        type:String,
        required: true,
        trim: true,
    },
    start_time:{
        type:String,
        required: true,
        trim: true,
    },
    end_time:{
        type:String,
        required: true,
        trim: true,
    },
    status : {
        type :Number,
        required: true,
        trim: true,

    },
  },{ timestamps: true,versionKey: false });
  

module.exports.shift_time = model("shift_time", ShiftTimeSchema);
