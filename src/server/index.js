require('dotenv').config();
const express = require('express');
const session = require('express-session');
const controller = require('./controller');
const massive = require('massive');

const app = express();
app.use(express.json());

let { SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})
    .catch(err => {
        console.log(err);
})

app.get('/api/houselist', controller.getHouseList);
app.post('api/property', controller.addNewProperty);
app.delete('/api/property/:id', controller.deleteProperty);



app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
  });
  