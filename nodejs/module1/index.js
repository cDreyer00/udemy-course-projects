const express = require('express');
const server = express();
server.use(express.json());

// query params => ex: "?nome=NodeJS"
// Route params => ex: "/movies/5"
// Request params => ex: "{name: 'Lucas', age: '26'}"

//CRUD => Create, Read, Update, Delete

const courses = ["Node JS", "JavaScript", "React Native", "React JS"]

function checkCouse(req, res, next){
    if(!req.body.name){
        return res.status(400).json({error: "need course name"});
    }
    return next();
}

function checkIndexCourse(req, res, next){
    const course = courses[req.params.index];
    if(!course){
        return res.status(400).json({error: "invalid course index"})
    }
    return next();
}


server.use((req, rest, next) => {
    console.log(req.body);
    return next();
})

server.get("/courses", (req, res) => {
    res.json(courses);
})

server.get("/courses/:index", checkIndexCourse, (request, respose) => {
    const { index } = request.params;

    return respose.json(courses[index]);
})

// create a course
server.post("/courses", checkCouse, (req, res) => {
    const { name } = req.body;
    courses.push(name);

    return res.json(courses);
})

// update a course
server.put("/courses/:index", checkCouse, checkIndexCourse, (req, res) => {
    const { index } = req.params;
    const { name } = req.body

    courses[index] = name;
    return res.json(courses);
})



//delete a course
server.delete("/courses/:index", checkIndexCourse, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    courses.splice(index, 1);
    return res.json(courses);
})

server.listen(3000);