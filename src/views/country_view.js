const PubSub = require('../helpers/pub_sub.js');

const CountryView = function(container) {
  this.container = container;
};

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    const country = evt.detail;
    console.log(country);
    this.render(country);
  });
};


CountryView.prototype.render = function (country) {
  console.log('funny');
  this.container.innerHTML = '';
const countryName = this.createElement('h2', country.name);
this.container.appendChild(countryName);

const flag = this.createElement('img');
flag.src = country.flag
flag.className = 'country-flag';
this.container.appendChild(flag);

const countryRegion = this.createElement('h3', `Region: ${country.region}`);
this.container.appendChild(countryRegion);



};

CountryView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};



module.exports = CountryView;
