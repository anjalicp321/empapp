const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://anjali:anjuchin@cluster0.a30q6.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch((err) => {
        console.log(err);
})