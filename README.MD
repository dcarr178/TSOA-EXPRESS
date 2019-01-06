# TSOA Express
This project is a starting point for developing an auto-documenting, API-first application using TypeScript and Node.js. It uses Express as the web server and TSOA to automatically generate Express routes and Swagger API documentation.

### Setup
After downloading this package, run:
```
npm i -g typescript@latest grunt-cli@latest
npm i
npm run build
npm run start
```
At this point the web server should be running and you should be able to open a browser to [http://localhost:3000](http://localhost:3000).

### Information
`/src/webserver/static/` contains static html and css files to be served by the web server. This can include a web-packed angular/react progressive web app if you choose.

`/src/api/helpers/` and `/src/api/models/` contain whatever typescript data models and business logic that your api endpoints use.

`/src/api/controllers/` contains multiple controller files that describe your api endpoints and what they should do. TSOA makes extensive use of decorators to define endpoint security, http methods, and functionality. More information about tsoa decorators can be found here: [https://github.com/lukeautry/tsoa](https://github.com/lukeautry/tsoa).

`/buildApi.js` takes all the controllers you have created and creates api routes for Express. It also creates a swagger.json file at `/src/webserver/static/api/swagger.json` which is an open api specification format that many programs can read and write to so they can understand what your api can do. More information about swagger can be found here: [https://swagger.io/specification/](https://swagger.io/specification/).

`/src/webserver/static/api/` also contains default swagger-ui files that are helpful in viewing your swagger.json api endpoint documentation and in testing those api endpoints.

To view your api documentation, simply open a browser to [http://localhost:3000/api](http://localhost:3000/api).

### Customization
In order to create your own api endpoints, simply create a new controller file under `/src/api/controllers/` containing your endpoint definitions and add helper and model files as needed containing your business logic.

After making changes, run `npm run build` to build the routes and run `npm run start` to run the web server.

### Other resources
This package is similar to [https://github.com/lukeautry/ts-app](https://github.com/lukeautry/ts-app) but without react frontend, orm, etc.
