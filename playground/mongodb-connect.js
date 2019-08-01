// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID();
console.log(obj);

var user = {name: 'Ankit', age: 20};
var {name} = user;

console.log(name);

// TodoApp is the name of the database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'Walk the dog',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2))  //ops stores all of the documents       
    });

    // Insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Nishee Jaiswal',
    //     age: 22,
    //     location: 'Patna',
    //     // _id: 123
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert into users', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp())
    // });

    db.close();
});