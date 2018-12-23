// Dependencies
var replace = require('replace');
var fs = require('fs');

// Paths
var buildFolder = './build/';
var installFile = buildFolder + 'install-page.html';
var srcFolder = './src/';


// Get entire contents of processed bookmarklet code as var
var bookmarkletContent = fs.readFileSync(buildFolder + 'bookmarklet_export.js');

// Replace placeholder variable in install HTML file with raw contents (copy file first to build folder)
fs.copyFileSync(srcFolder + 'install-page-template.html',installFile);
replace({
    regex : "{{bookmarklet_code}}",
    replacement : bookmarkletContent,
    paths : [installFile],
    recursive : true,
    silent : false
});