var request = require('request');
var cheerio = require('cheerio');
var prompt = require('prompt');
var spawn = require('child_process').spawn;

var openURL = function openURL(url) {
    spawn('open', [url]);
}

// Prompt user to select story
console.log("Pick a website to view.)");

prompt.start();
prompt.get(['input'], function(err, result) {
    var url = result.input;

    openURL(url);
});
