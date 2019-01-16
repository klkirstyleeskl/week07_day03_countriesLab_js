const Country = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const country = new Country();
  country.getData();


  const selectElement = document.querySelector('select#countries');
  console.log('select');

  const countryDropDown = new SelectView(selectElement);
  console.log('CountryDropDown', countryDropDown);
  countryDropDown.bindEvents();

});
