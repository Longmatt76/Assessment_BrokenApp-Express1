# Broken App Issues

- It was using the depricated 'var' to assign the app variable, I changed it to const. Also there was no reason that the axios varible needed to be assigned with let so I changed it to const as well. 

- It was using json.stringify with .send instead of the express.json() middleware. I changed that and included it with an app.use.

- The catch block was missing the error parameter, I changed it to catch(err) also it was calling next but there were no error handing functions so I added them plus an ExpressError class. 

- It was using simply 'd' and 'r' as varibles for sending and receiving to the API, I changed them to 'data' and 'response' so it would be easier to understand what was actually going on. 

- As it was setup the 'results' varible would have only returned an array of promises as opposed to the desired array of results from the API so I changed the route function to async and added an await promise.all that way all the promises are resolved before it attempts to map the results. 

- The app.listen didn't include a callback function, not sure if that's essential but I added one. I also pulled it out into it's own file 'server.js'so I could run supertest. 

- I added some comments to the route

- There was no testing so I added some. 



