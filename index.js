require("dotenv").config();

const firstName = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

console.log(`I am ${firstName}, wilder in ${city}, and I speak ${language}`);
