// 路由配置
export { routes, notFoundRoute, defaultRoute } from "./routerConfig";
export type { RouteConfig } from "./routerConfig";

// 路由组件
export { default as AppRouter } from "./Router";

// 路由工具
export {
  getPageTitle,
  getPageDescription,
  isValidRoute,
  getAllRoutes,
  getRoutes,
  navigateTo,
  getBreadcrumbs,
} from "./routerUtils";

// 路由钩子
export { useRouter } from "./useRouter";
