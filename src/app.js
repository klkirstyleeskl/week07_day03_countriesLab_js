const Country = require('./models/countries.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const country = new Country();
  country.getData();
  
});
