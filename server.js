const express           = require( "express" );
const app               = express();
const bodyParser 		= require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.set('port', 9090);
app.listen(9090, "0.0.0.0");
