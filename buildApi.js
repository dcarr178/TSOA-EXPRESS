const fs = require('fs');
const tsoa = require('tsoa');

const webServerApiBasePath = '/api';

// create an entry file that includes all endpoint controllers
const controllerDirectory = 'src/api/controllers';
const entryFile = 'src/webserver/api/controllers.ts';
const controllers = require('recursive-readdir-sync')(controllerDirectory);
let fileText = '';
for (var i = 0; i < controllers.length; i++) {
  let ctrl = controllers[i];
  if(ctrl.indexOf(".ts") > -1) {
    fileText += "import '../../../" + ctrl.replace(/\\/g, '/').replace('.ts', '') + "';\n";
  }
}
fs.writeFileSync(entryFile, fileText);

// generate routes.ts file that gets imported by web server
console.log('Building api routes');
tsoa.generateRoutes({
  basePath: webServerApiBasePath,
  entryFile,
  routesDir: "src/webserver/api",
});


// generate swagger.json file used by swagger.ui
console.log('Building api documentation');
tsoa.generateSwaggerSpec({
  basePath: webServerApiBasePath,
  entryFile,
  outputDirectory: "src/webserver/static/api",
  name : "TSOA Express",
  description: "Starting point for developing an auto-documenting, API-first application using TypeScript and Node.js.",
  version: "0.1",
  securityDefinitions: {
    auth: {
      type: "apiKey",
      name: "authorization_key",
      in: "header"
    }
  },

});
