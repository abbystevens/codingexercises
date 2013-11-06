var fs = require('fs');
var read = require('read');

var myBook = [];

var data = fs.readFileSync(__dirname + '/data.json', { encoding: 'utf8', flag: 'a+' });
if (data) {
    myBook = JSON.parse(data);
}

introduction();
// Anything stored in myBook will persist between application runs.
function introduction() {
console.log("What would you like to do?  Please type: add, list, busey, or exit.");
read({ prompt: '> ' }, mainLoop);
}

function mainLoop (err, result) {

    switch (result) {
        case 'exit':
            saveMyData();
            console.log("See yah!");
            process.exit();
        case 'list':
            myBook.forEach(function (item) {
                console.log(item);
            });
            read({ prompt: '> ' }, mainLoop);
            break;
        case 'add':
            addressBook();
            break;
        case 'busey':
            console.log("The ex-presidents are surfers");
            read({prompt: '>'}, mainLoop);
            break;
        }
}

function saveMyData () {
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(myBook));
}

function addressBook() {
    read({prompt: 'Enter name:'}, getName);
}
function getName (err, name) {
    myBook.push(name);
    read({prompt: 'Enter address:'}, address);
}
function address (err, address) {
    myBook.push(address);
    read({prompt: 'Enter phone:'}, phone);
}
function phone (err, phone) {
    myBook.push(phone);
    introduction();
}




