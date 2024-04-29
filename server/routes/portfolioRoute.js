import express from 'express';
const router = express.Router();
 import { Introduction, About, Project, Experience, Course} from "../models/portfolio_model.js"
import { users } from '../models/user_model.js';

router.get("/get-portfolio-data",async (req, res) => {
    try {
        const Introductions = await Introduction.find();
        const Abouts = await About.find();
        const Projects = await Project.find();
        const Experiences = await Experience.find();
        const Courses = await Course.find();

        res.status(200).send({
            Introduction: Introductions[0],
            About: Abouts[0],
            Experience: Experiences,
            Project: Projects,
            Course: Courses
        })
    }
    catch(error) {
        res.status(500).send(error);
    }
})

router.post("/update-intro", async (req, res) => {
    try {
        const Introductions = await Introduction.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new : true }
        );

        res.status(200).send({
            data : Introductions,
            success: true,
            message : "Introduction updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});


router.post("/update-about", async (req, res) => {
    try {
        const Abouts = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new : true }
        );

        res.status(200).send({
            data : Abouts,
            success: true,
            message : "About updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});

router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);

        await experience.save();

        res.status(200).send({
            data : experience,
            success: true,
            message : "Experience added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});

router.post("/update-experience", async (req, res) => {
    try {
        const experience = new Experience.findOneAndUpdate(
                {_id: req.body._id},
                req.body,
                {new: true}
        );
        res.status(200).send({
            data : experience,
            success: true,
            message : "Experience updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});


router.post("/delete-experience", async (req, res) => {
    try {
        const experience = new Experience.findOneAndDelete(
                {_id: req.body._id}
        );
        res.status(200).send({
            data : experience,
            success: true,
            message : "Experience Deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});

// Add Project

router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);

        await project.save();

        res.status(200).send({
            data : project,
            success: true,
            message : "Project added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});

router.post("/update-project", async (req, res) => {
    try {
        const project = new Project.findOneAndUpdate(
                {_id: req.body._id},
                req.body,
                {new: true}
        );
        res.status(200).send({
            data : project,
            success: true,
            message : "Poject updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});


router.post("/delete-project", async (req, res) => {
    try {
        const project = new Project.findOneAndDelete(
                {_id: req.body._id}
        );
        res.status(200).send({
            data : project,
            success: true,
            message : "Project Deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});


// Add Course

router.post("/add-course", async (req, res) => {
    try {
        const course = new Course(req.body);

        await course.save();

        res.status(200).send({
            data : course,
            success: true,
            message : "Course added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});

router.post("/update-project", async (req, res) => {
    try {
        const course = new Course.findOneAndUpdate(
                {_id: req.body._id},
                req.body,
                {new: true}
        );
        res.status(200).send({
            data : course,
            success: true,
            message : "Course updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});


router.post("/delete-course", async (req, res) => {
    try {
        const course = new Course.findOneAndDelete(
                {_id: req.body._id}
        );
        res.status(200).send({
            data : course,
            success: true,
            message : "Course Deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
        console.log("E:",error)
    }
});

router.post("/admin-login", async (req, res) => {
    try {
        const user = await users.findOne(
            { username : req.body.username , 
              password : req.body.password
            }
            );
            user.password ="";
        if(user){
            res.status(200).send({
                data: user,
                success: true,
                message :"login successfully",
            });
        }
        else {
            res.status(200).send({
                data: user,
                success: false,
                message :"invalid username and password",
            })
        }
    }
    catch (error) {
        res.status(500).send(error)

    }
})

export default router;

