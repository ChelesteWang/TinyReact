import React from "@tinyreact/react";
import ReactDOM from "@tinyreact/react-dom";

// 使用 React 和 ReactDOM 创建一个简单的组件

// 用于 babel 转换的 jsx 语法
/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

/**
 * 创建一个 React 组件
 * @returns {React.Component}
 */
export default function App({ name }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
}

/**
 * 渲染 React 组件
 * @param {React.Component} App
 * @param {HTMLElement} document.getElementById("app")
 */
ReactDOM.render(App({ name: "TinyReact" }), document.getElementById("app"));
