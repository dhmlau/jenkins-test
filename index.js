import express from 'express';
import {getDayOfWeek} from './transform-date.js';

const app = express();

app.get('/', (req, res)=> {
    const dayOfWeek = getDayOfWeek(new Date());
    res.send('Today is ' + dayOfWeek);
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});