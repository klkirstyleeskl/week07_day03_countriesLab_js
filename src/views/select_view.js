const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};


SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-loaded', (evt) => {
    const allCountries = evt.detail;
    this.populate(allCountries);
  });

};

SelectView.prototype.populate = function (data) {
  data.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });

};

module.exports = SelectView;
