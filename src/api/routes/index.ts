import Router from 'koa-router';

/**
 * Declare a routes
 */
import * as userRoutes from './users.route';

const router = new Router({
    prefix: '/api/v1'
});

router.use(userRoutes.default.routes());

export default router.routes();