const app = require('./server');
const port = 3000;

//API usará a porta 3000
app.listen(port, () => {
  console.log(`API Started in ${port}`);
});