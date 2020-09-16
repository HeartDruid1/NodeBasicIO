const fs = require('fs');
const path = require('path');

// our file
const fileName = './data/myTextFile.txt';

console.log('\n_______________________\n');

// check if a directory exists
if(!fs.existsSync('data')){
    console.log('data dir does not exist');
    fs.mkdirSync('data');
} else {
    console.log('yep, he\'s just sittin there');
}

//write to our file, async
// fs.writeFile(fileName, 'Hello from the myTextFile. My name is Nick and Node is awesome!',
//     function (err) {
//       if (err) throw err;
//     }
//   );

// add new content async
fs.appendFile(fileName, '\nSome new content', err => {
    if (err) throw err;
});

// read file async
fs.readFile(fileName, 'utf-8', (err, data) => {
    if(err) throw err;

    console.log(`Load file: ${path.basename(fileName)}`);
    console.log('__Display file contents__\n');
    console.log(data);
})