#!/usr/bin/env node

// Generate the puzzle
var puzzleGen = require('./Generator.js');
var puzzle = puzzleGen.generate();

var subject = "Your daily countdown puzzle!";
var body = "Morning all! \r\n\n" + 
		   "Today you must try and reach " + puzzle.target + " with the numbers " + puzzle.numbers + ". \r\n\n" +
		   "Best of luck!";

var receivers = require('./ReceiversRepo.js').getAll().receivers;

// Send the email
var Mailer = require('./Emailer.js');
var mailer = new Mailer("billingsleyjoseph@gmail.com", "maximillion93");

receivers.forEach(function(receiver) {
	mailer.sendMessage(subject, body, receiver);
});
