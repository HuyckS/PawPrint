const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/petOwners', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to Paw Print db"))
    .catch((err) => console.log("Something went wrong", err));
