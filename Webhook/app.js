const express = require('express');
const bodyParser = require('body-parser')
const rp = require('request-promise');

const PORT = process.env.PORT || 2500;

const app = express();

app.use(bodyParser.json());

app.use("/", require("./middleware/request_parser"));

app.post("/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    rp(req.body.options).then((response) => {
        res.json(response);
    })
        .catch((err) => {
            res.json(err);
        });

});


app.listen(PORT, () => {
    console.log('we are live');
})
