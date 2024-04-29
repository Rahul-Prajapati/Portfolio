// const mongoose = require("mongoose")

import mongoose from 'mongoose';

const introSchema = new mongoose.Schema(
{
    welcomeText: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
},
{ timestamps: true }
);

export const Introduction = mongoose.model('Introduction', introSchema);


const aboutSchema = new mongoose.Schema(
    {
        imageurl:{
            type: String,
            required: true
        },
        description1:{
            type: String,
            required: true
        },
        description2:{
            type: String,
            required: true
        }, 
        skills:{
            type: Array,
            required: true
        },        
    },
    { timestamps: true }
);

export const About = mongoose.model('About', aboutSchema);

const experienceSchema = new mongoose.Schema(
    {
        period:{
            type:String,
            required: true,
        },
        title:{
            type:String,
            required: true,
        },
        company:{
            type:String,
            required: true,
        },
        description:{
            type:String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Experience = mongoose.model('Experience', experienceSchema);

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        technologies:{
            type: Array,
            required: true,
        }
    },
    {timestamps: true}
);

export const Project = mongoose.model('Project', projectSchema );

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        Image:{
            type: String,
            required: true,
        },
        link:{
            type: String,
            required: true,
        },
    },
    { timestamps : true }
);

export const Course = mongoose.model('Course', courseSchema );


