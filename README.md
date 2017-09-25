## Resilency Map Project for National Day of Civic Hacking

Web app for collecting location data using Bing Maps! 
This is starter code, please fork and go to town! 

## Development Environment Setup: 

- `$ git clone https://github.com/timmyreilly/resilience-map`
- `$ cd resilience-map`
- You'll now need a MongoDB to store the map data. Here's instructions for how to do this on [Azure's Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-introduction)
- Take that connection string in put it in a .env file next to app.js:  
<kbd>
<img src="https://i.imgur.com/WWSxgKR.png" width="800">
</kbd>

- Here's a snippet you can copy: 

```
PORT=8080
MONGO_CONNECTION_STRING=mongodb://sfmta-storage:asdfasdfasdfZ3ZBhhm6sFKaUzaBI8up4XTxV5BJh8sTVt6Mm45cDDqmUzbyr1p2aDzykBuaO97BAg==@sfmta-storage.documents.azure.com:10255/?ssl=true&replicaSet=globaldb
```

- You'll also need a `BingMapsCredentials.js` in your public directory. Like this:
<kbd>
<img src="https://i.imgur.com/1XDMDF0.png" width="800"> 
</kbd>
- Here's a snippet: 

``` JavaScript 
//Update this value with your Bing Maps key.
var BingMapsKey = 'AasdfasdfasdfasdfwNFdz2blihxwv8mPZdB5vEJR7epV3tluq67AFF75nFgVGzMH';
```

- Now you can run these to start the app and visit localhost:3000 or localhost:8080 depending on your *.env* 
- `$ npm install`
- `$ npm start` or `nodemon app.js` or `node app.js`

## Resources for Continued development: 

Create push pin add metadata: https://bingmapsv8samples.azurewebsites.net/#Create%20Pushpin%20Add%20Metadata
Good samples for continued development: https://bingmapsv8samples.azurewebsites.net/ 

Also the BingMapsCredentials.js file (*place inside of public*): 
```
//Update this value with your Bing Maps key.
var BingMapsKey = 'asdfasdfasdftNnk1wNFdz2blihxwv8mPZdB5vEJR7epV3tluq67AFF75nFgVGzMH';
```

### Asset List: 
Supplies
Staff
Food
Water
Energy/Fuel
Medical
Open Space
Shelter

### TO-DOs:
- Customize asset icons
- Figure out how to Make Aerial Mode less slow
- Add delete button to form
- Figure out the Bing Maps Security situation
- Implement GeoJSON endpoint 