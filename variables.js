const express = require ('express');
const path = require ('path');

const app = express();

app.get('/', (req,res) => {
res.sendFile(path.join(__dirname,'js variables.html'));

});

app.listen(8080, ()  => {
 console.log('Server is listening on port 8080');
});