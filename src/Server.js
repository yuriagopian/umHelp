const app = require('./app');
const routes = require('./Routes');

require = ('./database');



app.listen(3003, function () {
    console.log('Servidor Rodando');
});