import Router from 'koa-router';

const router = new Router({
    prefix: '/users'
});

const mockup = [
  {
    name: 'Mart',
  },
]

router.get('/', async (ctx) => {
    // console.log(ctx.req)
    ctx.body = mockup;
});

export default router;