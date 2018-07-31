const Router = require('koa-router');
const queries = require('../db/queries/companies');

const router = new Router();
const BASE_URL = `/api/v1/companies`;

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

// GET one company
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
