import express from 'express';

require('dotenv').config();

const app = express();
const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req, res) =>{
    res.send("Server is up and running!");
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));