const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const { string } = require('yargs');

//section to create add command
yargs.command({
    command: 'add',
    describe: 'Adding a notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,  // Required
            type: 'string'     
        },
        body: {  
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    // Function for your command
    handler(argv) {
        console.log(chalk.bgGreen.bold.black('New Node created!'));
    }
})
yargs.parse() // To s

//function to load node
const loadnote = (title, body) => {
    const notes = loadNotes();
    try{
        const databuffer = fs.readFileSync('./data.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
    }catch{
        return [];
    }
}
//function to add node
const addNotes = function(title, body){
    const load = leadnote();
    const exist = load.filter(function(note){
        return note.title == title;
    });
    if(exist.length == 0){
        load.push({
            title: title,
            body : body
        });
        savenotes(load);
        console.log(chalk.bgGreen.black('New Node Created!'));
    }else{
        console.log(chalk.bgRed.white('Node already taken!'));
    }
}
const savenotes = function(load){
    const JSONdata = JSON.stringify(load);
    fs.writeFileSync('./data.json', JSONdata);
}
module.exports = {
    addNotes : addNotes
}


