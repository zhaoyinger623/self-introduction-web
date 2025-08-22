/// <reference types="react-scripts" />

/**
 * less module
 * react-scripts 不支持 less module
 */
declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
/**
 * 编译环境
 */
declare type BuildEnv = "development" | "test" | "uat" | "production";

/**
 * 多编译环境变量约束
 */
declare type MultiEnv<T = string> = Record<BuildEnv, T>;
