import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginLess } from "@rsbuild/plugin-less";

export default defineConfig({
  plugins: [pluginReact(), pluginLess()],
  html: {
    template: "./public/index.html",
    title: "个人介绍页面",
    meta: {
      description: "基于React和Rsbuild构建的个人介绍页面",
    },
  },
  server: {
    port: 3000,
  },
  output: {
    distPath: {
      root: "build",
      js: "static/js",
      css: "static/css",
      media: "static/media",
    },
  },
  performance: {
    chunkSplit: {
      strategy: "split-by-module",
    },
  },
  tools: {
    cssLoader: {
      modules: {
        auto: true,
        localIdentName: "[local]_[hash:base64:5]",
      },
    },
  },
  source: {
    define: {
      "process.env.PUBLIC_URL": JSON.stringify("/self-introduction-web/"),
    },
  },
});
