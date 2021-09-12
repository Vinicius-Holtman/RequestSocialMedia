import express from 'express';
import fetch from 'node-fetch';

import Twitter from './Twitter.js'

const app = express();
app.use(express.json());

app.get("/twitter", Twitter.index)

app.listen(3000, () => console.log('Server is runnning'))