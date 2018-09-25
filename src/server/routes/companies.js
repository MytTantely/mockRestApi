const Router = require('koa-router');
const queries = require('../db/queries/companies');

const router = new Router();
const BASE_URL = `/api/v1/companies`;

// put a user email, get company with products and users

// GET all companies
router.get(BASE_URL, async (ctx) => {
  try {
    const companies = await queries.getAllCompanies();
    ctx.body = {
      status: 'success',
      data: companies
    };
  } catch (err) {
    console.log(err);
  }
});

// GET one company by id
router.get(`${BASE_URL}/:id`, async (ctx) => {
  try{
    const company = await queries.getSingleCompany(ctx.params.id);

    ctx.body = {
      status: 'success',
      data: company
    }
  }catch(err){
    console.log(err);
  }
});

// GET one company by user email
router.get(`${BASE_URL}/email/:email`, async (ctx) => {
  try{
    const company = await queries.getSingleCompanyByEmail(ctx.params.email);

    if(company){
      ctx.body = {
        status: 'success',
        data: company
      }
    }else{
      ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'User not found.'
        };
    }
    
  }catch(err){
    console.log(err);
  }
});

// POST one company
router.post(BASE_URL, async (ctx) => {
    try {
      const company = await queries.addCompany(ctx.request.body);
      if(company != null || company != undefined){
        ctx.status = 201;
        ctx.body = {
          status: 'success',
          data: company
        };
      }else{
        ctx.status = 400;
        ctx.body = {
          status: 'error',
          message: 'Something went wrong.'
        };
      }
    } catch (e) {
      console.log(err);
    }
});

module.exports = router;
