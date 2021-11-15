import express from 'express';
import { engine } from 'express-handlebars';
// const fs = require('fs');


import {jsonToPdf, downloadPDF} from './controller.js'

const app = express();
app.use(express.json());

app.use(express.static('./views/images')); 


// HandleBars Configuration
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");




app.get('/', jsonToPdf);
app.get('/download', downloadPDF);


const PORT =  5001;

app.listen(
    PORT,
    console.log(
      `server running at port ${PORT}`
    )
);
