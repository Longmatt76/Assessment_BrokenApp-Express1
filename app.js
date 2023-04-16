const express = require('express');
const axios = require('axios');
const ExpressError = require('./expressError');

const app = express();


app.use(express.json());

// takes names provided in req.body and makes requests to the github api  
// and returns user data.  
app.post('/', async function(req, res, next) {
  try {
    let results = await Promise.all(req.body.developers.map(async data => {
      return await axios.get(`https://api.github.com/users/${data}`);
    }));
    let out = results.map(response => ({ name: response.data.name, bio: response.data.bio }));

    return res.json(out)
  } catch (err){
    next(err);
  }
});

// general error handlers
app.use(function (req, res) {
  return new ExpressError("Not Found", 404);
});

app.use(function (err, req, res, next) {
  let status = err.status || 500;

  return res.status(status).json({
    error: {
      message: err.message,
      status: status,
    },
  });
});

module.exports = app;

