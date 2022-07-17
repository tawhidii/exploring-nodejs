const firstName = 'John';
const lastName = 'Doe';

const fullName = firstName + ' ' + lastName;

function log(message){
    console.log(fullName);
    console.log(message);
}

module.exports.log = log;




