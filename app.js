// Generate the puzzle
var puzzleGen = require('./Generator.js');
var puzzle = puzzleGen.generate();

var subject = "Your daily countdown puzzle!";
var body = "Morning all! \r\n\n" + 
		   "Today you must try and reach " + puzzle.target + " with the numbers " + puzzle.numbers + ". \r\n\n" +
		   "Best of luck!";

// Send the email
var Mailer = require('./Emailer.js');
var mailer = new Mailer("username", "password");

mailer.sendMessage(subject, body);