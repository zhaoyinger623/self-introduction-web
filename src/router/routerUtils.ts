import { routes, getRouteMeta } from "./routerConfig";

// 路由工具函数

/**
 * 获取当前页面的标题
 * @param pathname 当前路径
 * @returns 页面标题
 */
export const getPageTitle = (pathname: string): string => {
  const meta = getRouteMeta(pathname);
  return meta.title || "个人介绍页面";
};

/**
 * 获取当前页面的描述
 * @param pathname 当前路径
 * @returns 页面描述
 */
export const getPageDescription = (pathname: string): string => {
  const meta = getRouteMeta(pathname);
  return meta.description || "前端开发工程师的个人介绍页面";
};

/**
 * 检查路径是否为有效路由
 * @param pathname 路径
 * @returns 是否为有效路由
 */
export const isValidRoute = (pathname: string): boolean => {
  return routes.some((route) => route.path === pathname);
};

/**
 * 获取所有路由路径
 * @returns 路由路径数组
 */
export const getAllRoutes = (): string[] => {
  return routes.map((route) => route.path || "");
};

/**
 * 获取路由配置
 * @returns 路由配置数组
 */
export const getRoutes = () => {
  return routes;
};

/**
 * 路由导航函数
 * @param path 目标路径
 * @param navigate 导航函数
 */
export const navigateTo = (path: string, navigate: (path: string) => void) => {
  if (isValidRoute(path)) {
    navigate(path);
  } else {
    navigate("/");
  }
};

/**
 * 获取面包屑导航数据
 * @param pathname 当前路径
 * @returns 面包屑数据
 */
export const getBreadcrumbs = (pathname: string) => {
  const breadcrumbs = [{ path: "/", label: "首页" }];

  if (pathname !== "/") {
    const route = routes.find((route) => route.path === pathname);
    if (route?.meta?.title) {
      breadcrumbs.push({
        path: pathname,
        label: route.meta.title.split(" - ")[0],
      });
    }
  }

  return breadcrumbs;
};
