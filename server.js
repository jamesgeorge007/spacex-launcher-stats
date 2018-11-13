const express = require('express');
const graphQLHttp = require('express-graphql');
const schema = require('./schema');
const app = express();

app.use('/graphql', graphQLHttp({
    schema,
    graphiql: true
}));

const PORT = process.env.POR || 5000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});