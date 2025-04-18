"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// app.use(express.json());
app.get("/users", function (req, res) {
    // here we will have logic to return all users
    res.send({ users: [] });
});
app.get("/users/:id", function (req, res) {
    console.log(req.params.id);
    console.log(req.query);
    // here we will have logic to return user by id
});
app.post("/users", function (req, res) {
    // here we will have logic to save a user
});
app.put("/users/:id", function (req, res) {
    // here we will have logic to update a user by a given user id
});
app.delete("/users/:id", function (req, res) {
    // here we will have logic to delete a user by a given user id
});
// start express server
app.listen(3000);
