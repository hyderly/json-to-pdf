import puppeteer from 'puppeteer';
import  path from 'path';

import {BASE_URL} from './constant.js';
const __dirname = path.resolve();


// Test API
export const apiTesting = (req, res) => {
  res.send('JOSN-TO-PDF API is running....')
}


// Render PDF to Browser
export const jsonToPdf = (req, res) => {

  // Get User Data here with api
  // API Request here

  // I'm using sample data for now
  const user = {
    "name": "haider Ali",
    "bankName": "Bank of America",
    "address": "Elm Road, Dallas",
    "routingNumber": "234897547884",
    "accountNumber": "234897547884",
    "city": "Dallas",
    "state": "TX",
    "zip": "75229"
}
  

  res.render('deposits', { user: user });
  // res.render('invoice', { order: order?.toJSON() });

}


// Downlaod PDF to the local storage
// We can send Pdf to user email

export const downloadPDF = async (req, res) => {

  const url = BASE_URL;

  const filePath = path.resolve(__dirname, `./USER.pdf`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await page.pdf({ path: filePath, format: 'a4', printBackground: true });
  await browser.close();

  res.download(filePath);
};


