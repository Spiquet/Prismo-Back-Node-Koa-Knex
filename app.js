const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser') ;





const app = new Koa();
const router = new Router();

app.use(cors());

//Use bodyparser middleware to parse JSON request
app.use(bodyParser());

const queries = require('./db/queries/members');

// Response to GET requests
router.get('/welcome', async (ctx) => {
  ctx.body = 'Bienvenue chez prismo\n';
});

//Route to find all the members in the BDD
router.get( '/members', async (ctx) => {
  try {
      const members = await queries.getAllMembers();
      ctx.body = {
          status: 'success',
          data: members
      };
  } catch (err) {
      console.log(err)
  }
});


// Route that retrieves a member according to his id in the DB
router.get( '/member/:id', async (ctx) => {
  try {
      const member = await queries.getMemberById(ctx.params.id);
      ctx.body = {
          status: 'success',
          data: member
      };
  } catch (err) {
      console.log(err)
  }
});

// Route to create a new member
router.post('/member', async (ctx) => {
  try {
      const member = await queries.insertUser(ctx.request.body);
      if (member.length) {
          ctx.status = 201;
          ctx.body = {
              status: 'success',
              data: member
          };
      } else {
          ctx.status = 400;
          ctx.body = {
              status: 'error',
              message: 'Something went wrong.'
          };
      }
  } catch (err) {
      console.log(err)
  }
});



// Logging
app.use(Logger());

// Add routes and response to the OPTIONS requests
app.use(router.routes()).use(router.allowedMethods());

// Listening to the port
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
