const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Country = function (){
  this.text = null;
}

Country.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
    request.get((data) => {
    this.text = data

  PubSub.publish('Country:country-loaded', this.text)
    console.log(data);
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishCountryDetail(selectedIndex)});
  });
};

Country.prototype.publishCountryDetail = function (selectedIndex) {
  const selectedCountry = this.text[selectedIndex];
  PubSub.publish('Countries:selected-country-ready', selectedCountry)
  console.log(selectedCountry);
};



module.exports = Country;
