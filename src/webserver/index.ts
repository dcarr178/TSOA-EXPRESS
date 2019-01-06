import * as express from "express";
import * as path from "path";
import * as methodOverride from 'method-override';
import { getProcessMetadata } from '../libs/whoami';
import { RegisterRoutes} from "./api/routes";
const bodyParser = require("body-parser");

// configure express
const port = process.env.WEBSERVER_PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// register api routes
RegisterRoutes(app);

// serve static files on root path
app.use('/', express.static(path.join(__dirname, 'static')));

// run web server
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}`)
});

// query public ip address
getProcessMetadata().then((processMetadata) => {
  console.log(`Access web server via browser on localhost using http://localhost:${port}/`);
  console.log(`Access web server via any browser on LAN using http://${processMetadata.ipAddressPrivate}:${port}/`);
  if (processMetadata.ipAddressPublic) {
    console.log(`Access web server via any browser on Internet using http://${processMetadata.ipAddressPublic}:${port}/`);
  }
});
