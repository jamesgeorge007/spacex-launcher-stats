const express = require('express');
const graphQLHttp = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

app.use('/graphql', graphQLHttp({
    schema,
    graphiql: true
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});