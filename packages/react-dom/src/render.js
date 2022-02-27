const TEXT_ELEMENT = "TEXT_ELEMENT";

/**
 * 将虚拟 DOM 转换为真实 DOM 并添加到容器中
 * @param {element} 虚拟 DOM
 * @param {container} 真实 DOM
 */
export default function render(element, container) {
  // 处理文本节点和标签节点
  const dom =
    element.type == TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(element.type);
  // 为节点绑定属性 (除子节点以外)
  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  // 处理子节点
  element.props.children.forEach((child) => render(child, dom));
  
  // 添加到容器
  container.appendChild(dom);
}
