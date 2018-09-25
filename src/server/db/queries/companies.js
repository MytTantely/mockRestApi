const companies = require('../data/companies.json');

function getAllCompanies(){
  return companies;
}

function getSingleCompany(id){
  return companies[id - 1];
}

function getSingleCompanyByEmail(emailId){
  for(let i=0; i < companies.length; i++){
    let company = companies[i];
    let users = company.users;

    for(let j=0; j < users.length; j++){
      if(users[j].email === emailId){
        return company;
      }
    }
  }

  return null;
}

function addCompany(company){
  companies.push(company);
  return company;
}

function updateCompany(company){
  // find company
  let index = companies.findIndex( element =>  element.id === company.id);
  companies[index] = company

  return companies;
}

module.exports = {
  getAllCompanies,
  getSingleCompany,
  addCompany,
  getSingleCompanyByEmail,
  updateCompany
};
