'use strict';

const axios = require('axios');

const crefLookup = new function() {
  this.query = async function(params) {
    try {
      params.name = params.name.replace(/\s/g, '+');
      const URI = `http://www.confef.org.br/confef/registrados/ssp.registrados.php?draw=6&columns[0][data]=0&columns[0][name]=&columns[0][searchable]=true&columns[0][orderable]=false&columns[0][search][value]=${
        params.state
      }&columns[0][search][regex]=false&columns[1][data]=1&columns[1][name]=&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=003325-G/PA&columns[1][search][regex]=false&columns[2][data]=2&columns[2][name]=&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=3&columns[3][name]=&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=4&columns[4][name]=&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&columns[5][data]=5&columns[5][name]=&columns[5][searchable]=true&columns[5][orderable]=true&columns[5][search][value]=&columns[5][search][regex]=false&order[0][column]=2&order[0][dir]=asc&start=0&length=10&search[value]=${
        params.name
      }&search[regex]=false&_=1531052097511`;
      const response = await axios.get(URI);
      return response.data;
    } catch (err) {
      throw err;
    }
  };
}();

module.exports = crefLookup;
