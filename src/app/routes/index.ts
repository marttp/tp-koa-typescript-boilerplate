import Router from 'koa-router';

/**
 * Declare a routes
 */
import * as userRoutes from './user.routes';

const router = new Router({
    prefix: '/api/v1'
});

router.use(userRoutes.default.routes());

export default router.routes();