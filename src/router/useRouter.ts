import { useLocation, useNavigate } from "react-router-dom";
import {
  getPageTitle,
  getPageDescription,
  getBreadcrumbs,
} from "./routerUtils";

/**
 * 自定义路由钩子
 * 提供路由相关的状态和操作
 */
export const useRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 当前路径
  const pathname = location.pathname;

  // 当前页面标题
  const pageTitle = getPageTitle(pathname);

  // 当前页面描述
  const pageDescription = getPageDescription(pathname);

  // 面包屑导航
  const breadcrumbs = getBreadcrumbs(pathname);

  // 导航到指定路径
  const goTo = (path: string) => {
    navigate(path);
  };

  // 返回上一页
  const goBack = () => {
    navigate(-1);
  };

  // 前进到下一页
  const goForward = () => {
    navigate(1);
  };

  // 导航到首页
  const goHome = () => {
    navigate("/");
  };

  // 检查是否为首页
  const isHome = pathname === "/";

  // 检查是否为指定路径
  const isCurrentPath = (path: string) => pathname === path;

  return {
    // 状态
    pathname,
    pageTitle,
    pageDescription,
    breadcrumbs,
    isHome,

    // 方法
    goTo,
    goBack,
    goForward,
    goHome,
    isCurrentPath,

    // 原始对象
    location,
    navigate,
  };
};
