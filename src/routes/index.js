/*
 * @Author: lucas Liu lantasy.io@gmail.com
 * @Date: 2024-10-27 15:07:31
 * @LastEditTime: 2024-10-28 01:29:58
 * @Description:
 */
import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { Page as MainPage } from '../pages/main/index';
import { Page as PostPage } from '../pages/post/index';

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: MainPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/post/$slug',
  component: PostPage,
});

const routeTree = rootRoute.addChildren([indexRoute, blogPostRoute]);

const router = createRouter({ routeTree });

export default router;
