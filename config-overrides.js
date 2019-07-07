// 这个文件表示的是合并webpack配置
const { override, addBabelPlugins, fixBabelImports } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins([
    "styled-jsx/babel",
    // 新增一个局部样式支持
    { plugins: ["styled-jsx-plugin-less"] }
  ]),
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css"
  })
);
