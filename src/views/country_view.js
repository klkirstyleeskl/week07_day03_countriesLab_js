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

const languageListTitle = this.createElement('h3', 'Languages:');
this.container.appendChild(languageListTitle);

const countryLanguageList = this.createLanguageList(country.languages);
this.container.appendChild(countryLanguageList);
console.log(countryLanguageList);

};

CountryView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

 CountryView.prototype.createLanguageList = function (languages) {
   const list = document.createElement('ul');

   languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);

   });

   return list;

 };



module.exports = CountryView;
