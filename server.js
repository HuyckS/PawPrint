const express = require("express");
const cors = require("cors");
const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');
require('./server/routes/person.routes')(app);
require('./server/routes/pet.routes')(app);
require('./server/routes/organization.routes')(app);
require('./server/routes/veterinarian.routes')(app);
require('./server/routes/message.routes')(app);
require('./server/routes/reminder.routes')(app);

app.listen(PORT, () => {
    console.log(`Tuning into port: ${PORT} for Paw Print db`);
});