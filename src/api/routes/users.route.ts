import Router from 'koa-router';

const router = new Router({
    prefix: '/users'
});

router.get('/', async (ctx) => {
});


router.get('/:id', async (ctx) => {
  const userId = ctx.params.id;
});

router.post('/', async (ctx) => {
  const body = ctx.request.body;
});

router.patch('/', async (ctx) => {
  const body = ctx.request.body;
});

router.delete('/:id', async (ctx) => {
  const userId = ctx.params.id;
});


export default router;