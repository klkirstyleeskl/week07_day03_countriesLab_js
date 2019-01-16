const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Country = function (){
  this.text = null;
}

Country.prototype.getData = function () {
    const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
    request.get((data) => {
    this.text = data.country;
    PubSub.publish('Country:country-loaded', this.text)
  });
};











module.exports = Country;
