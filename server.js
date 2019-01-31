const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

if(process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, 'build')));
}

app.listen(app.get('port'), () => {
    console.log('Server is running on http://localhost:' + app.get('port'));
});