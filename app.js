#!/usr/bin/env node

// Generate the puzzle
var puzzleGen = require('./Generator.js');
var puzzle = puzzleGen.generate();

var subject = "Your daily countdown puzzle!";
var body = "Morning all! \r\n\n" + 
		   "Today you must try and reach " + puzzle.target + " with the numbers " + puzzle.numbers + ". \r\n\n" +
		   "Best of luck!";

var receivers = require('./ReceiversRepo.js').getAll().receivers;

var solver = require('./Solver.js');

puzzle = { numbers: [75, 5, 50, 5, 10], target:2350}

var solution = solver.solve(puzzle);

console.log(puzzle.numbers, puzzle.target);
console.log(solution);

if(solution == undefined)
	console.log("Could not find a path");
else
	console.log("Found a path!");

// Send the email
//var Mailer = require('./Emailer.js');
//var mailer = new Mailer("username", "password");

//receivers.forEach(function(receiver) {
//	mailer.sendMessage(subject, body, receiver);
//});
