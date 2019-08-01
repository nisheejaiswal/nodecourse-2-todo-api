const {MongoClient, ObjectID} = require('mongodb')

// TodoApp is the name of the database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5d42c2efb93e8260e447b1e7')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch tools', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch tools', err)
    // });

    db.collection('Users').find({
        name: 'Nishee'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch tools', err)
    });

    // db.close();
});