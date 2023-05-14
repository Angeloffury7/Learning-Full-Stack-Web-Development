const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/moviesDB', { useNewUrlParser: true, useUnifiedTopology: true });
// //After running this, the cursor just moves to the next line. How do we know if connection is successful??

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', () => {
//     //we're connected!
//     console.log('Connection open!');
// })

//We need to add the above boilerplate to get confirmation

mongoose.connect('mongodb://127.0.0.1:27017/moviesDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to Database');
    })
    .catch((err) => {
        console.log('Error');
        console.log(err);
    })
