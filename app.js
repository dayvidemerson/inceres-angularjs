let express = require('express');
let path = require('path');
let app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);