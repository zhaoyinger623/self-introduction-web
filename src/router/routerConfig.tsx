import React from "react";
import Home from "../pages/Home";

// 路由配置类型
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
    icon?: string;
  };
}

// 路由配置
export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
    meta: {
      title: "首页 - 个人介绍",
      description: "前端开发工程师的个人介绍页面",
    },
  },
  // 可以在这里添加更多路由
  // {
  //   path: "/about",
  //   element: <About />,
  //   meta: {
  //     title: "关于我",
  //     description: "了解更多关于我的信息"
  //   }
  // },
  // {
  //   path: "/portfolio",
  //   element: <Portfolio />,
  //   meta: {
  //     title: "作品集",
  //     description: "查看我的项目作品"
  //   }
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  //   meta: {
  //     title: "联系我",
  //     description: "与我取得联系"
  //   }
  // }
];

// 默认路由配置
export const defaultRoute = "/";

// 获取路由元信息
export const getRouteMeta = (pathname: string) => {
  const route = routes.find((route) => route.path === pathname);
  return route?.meta || {};
};

// 404 路由
export const notFoundRoute: RouteConfig = {
  path: "*",
  element: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#6366f1" }}>
        404
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#1e293b" }}>
        页面未找到
      </h2>
      <p style={{ fontSize: "1.2rem", color: "#64748b", marginBottom: "2rem" }}>
        抱歉，您访问的页面不存在
      </p>
      <a
        href="/"
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#6366f1",
          color: "white",
          textDecoration: "none",
          borderRadius: "25px",
          fontSize: "1.1rem",
          fontWeight: "600",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#8b5cf6";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#6366f1";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        返回首页
      </a>
    </div>
  ),
};
