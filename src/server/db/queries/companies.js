const companies = require('../data/companies.json');

function getAllCompanies(){
  return companies;
}

function getSingleCompany(id){
  return companies[id - 1];
}

function addCompany(company){
  companies.push(company);
  return company;
}

module.exports = {
  getAllCompanies,
  getSingleCompany,
  addCompany
};
